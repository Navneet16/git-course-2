const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
           }
  console.log('Connected to MongoDB server');
    
  db.collection('Users').findOneAndUpdate({
      _id : new ObjectID("59958a9d9886ad06e4ae2d7e")
      },{
          $set : {
             name: "something like"   
                 }
        },{
           returnOriginal: false 
        }).then((result)=>{

            console.log(result);
        })
  

});



  
    
