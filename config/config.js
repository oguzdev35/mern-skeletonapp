const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";
const jwtSecret = process.env.JWT_SECRET || "Your secret key";
const mongoDbName = "mernskeletonapp"
const mongoUri = process.env.MONGODB_URI ||
    process.env.MONGO_HOST || `mongodb://localhost:27017:${mongoDbName}`

export default {
    port, env, jwtSecret, mongoUri
}