const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
   
   db.collection('Todos').deleteMany({tag: 'pagal'}).then((result)=>{
       console.log(result);
   });
  
});



  
    
