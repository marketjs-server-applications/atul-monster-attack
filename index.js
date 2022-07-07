const mongoose = require('mongoose')
mongoose .connect("mongodb://localhost:27017/expressdb").then(() => console.log("connection created!")).catch((err) => console.log(err));
const collectionschema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    author:String,
    active:Boolean
})
const expresscollection = new mongoose.model('expresscollection',collectionschema);
const createDocument = async () => {
    try{
        const expressdocument = new expresscollection({
            name : "Express Js",
            author: "Atul Rana",
            active: true
        });
        const result = await expressdocument.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}
createDocument();