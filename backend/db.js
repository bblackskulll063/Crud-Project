const mongoose = require('mongoose');
// require('dotenv').config()
// const url = process.env.MONGO_ATLAS_URL;
const url = "mongodb://127.0.0.1/crudUser";

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(url, {useNewUrlParser: true});
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error(error.message);
      }
}

module.exports = connectToMongo;