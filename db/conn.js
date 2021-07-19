const mongoose = require("mongoose");
//console.log(process.env.DATABASE);
const DB =  process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(()=>{
    console.log('Mongo Connected')
}).catch((err)=>{
    console.log('Mongo Not Connected')
})