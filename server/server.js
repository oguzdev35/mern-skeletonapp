import config from '../config/config';
import app from './express';
import db from './mongoose';

db.connect(config.mongoUri);

app.listen(config.port, err => {
    if(err){
        console.log(err)
    }
    console.info(`Http server started on port ${config.port}`)
})