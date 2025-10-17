require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongoose.connect('mongodb+srv://janrobimistica_db_user:jOCEoTCZ373eEb6A@comp229-003.cvqmiwl.mongodb.net/midterm');"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}