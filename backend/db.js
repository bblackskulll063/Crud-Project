const mongoose = require('mongoose');
require('dotenv').config()
// const url = process.env.MONGO_ATLAS_URL;
const url = "mongodb://127.0.0.1/crudUser";
// const url = "https://crudcrud.com/api/c9a0784432a7427bbda1dc1e7a8695bc";

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(url, {useNewUrlParser: true});
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error(error.message);
      }
}

module.exports = connectToMongo;