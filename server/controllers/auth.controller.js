import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from '../../config/config';

const signin = (req, res) => {
    User.findOne({"email": req.body.email})
        .then( user => {
            if(!user)
                return res.status(401).json({
                    error: "User not found"
                })
            if(!user.authenticate(req.body.password))
                return res.status(401).json({
                    error: "Email and password don't match."
                })
            const token = jwt.sign({_id: user._id}, config.jwtSecret);

            return res.json({
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            });
        })
        .catch( err => res.status(401).json({
            error: "Could not sign in"
        }))
}
const signout = (req, res) => {
    return res.status(200).json({
        message: "signed out"
    })
}
const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: "auth",
    algorithms: ['HS256']
})
const hasAuthorization = (req, res, next) => {

    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!authorized){
        return res.status(403).json({
            error: "User is not authorized"
        })
    }

    next();
}

export default {
    signin, signout, requireSignin, hasAuthorization
}