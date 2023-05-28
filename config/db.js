require('dotenv').config();
const mongoose = require('mongoose');


// function connectDB(){

//     // // //Database Connection   

//     // mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
//     // const connection = mongoose.connection;
//     //     try{

//     //         connection.once('open',()=>{
//     //             console.log('Database Connected')
//     //         })
//     //     }catch(err){
//     //         console.error(err.message);
//     //     }


   
//     // const URL="mongodb+srv://inShare:Djp7271%21@cluster0.yijuxr7.mongodb.net/inshare?retryWrites=true&w=majority"
   
//     // mongoose.connect(URL, {

//     //     useNewUrlParser: true, 
        
//     //     useUnifiedTopology: true 
        
//     //     }, err => {
//     //     if(err) throw err;
//     //     console.log('Connected to MongoDB!!!')
//     //     });

    
// }

// -----------------------------------------------------------------------------------------------------------------------------


// let mongoDB ="mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qyrzo.mongodb.net/inshare?retryWrites=true&w=majority";
// let mongoDB ="mongodb://test:test123@cluster0.qyrzo.mongodb.net/inshare?retryWrites=true&w=majority";

let mongoDB = "mongodb://test:test123@ac-qf27nvm-shard-00-00.yijuxr7.mongodb.net:27017,ac-qf27nvm-shard-00-01.yijuxr7.mongodb.net:27017,ac-qf27nvm-shard-00-02.yijuxr7.mongodb.net:27017/inshare?ssl=true&replicaSet=atlas-hpgywa-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
      
          console.log(`MongoDB connected:`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = { connectDB };



// module.exports = connectDB;


