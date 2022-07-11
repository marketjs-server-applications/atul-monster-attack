var mongoose=require('mongoose'); 
var db = require('../database');
// create an schema
var userSchema = new mongoose.Schema({
            fullName: String,
            emailAddress:String,
            city:String,
            country:String
        });
userTable=mongoose.model('users',userSchema);
        
module.exports={
     createData:function(inputData, callback){
                  
        userData= new userTable(inputData);
        userData.save(function(err, data){
          if (err) throw err;
           return callback(data);
        })
     },
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     },
     editData:function(editId,callback){
        var userData= userTable.findById(editId);
        userData.exec(function(err, data){
         if(err) throw err;
         return callback(data);
      })
     },
     updateData:function(inputData, editId, callback){
                  
      userData= userTable.findByIdAndUpdate(editId, inputData);
      userData.exec(function(err, data){
        if (err) throw err;
         return callback(data);
      })
   },
   deleteData:function(deleteId, callback){
                  
      userData= userTable.findByIdAndDelete(deleteId);
      userData.exec(function(err, data){
        if (err) throw err;
         return callback(data);
      })
   }
}