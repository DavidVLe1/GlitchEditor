
var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
var db = new sqlite3.Database('./database/user.db');


db.run('CREATE TABLE IF NOT EXISTS user(id TEXT, name TEXT)'); //role
// db.run('CREATE TABLE IF NOT EXISTS bugs(id TEXT, info TEXT)');

app.get('/', function(req,res){
  var table = "table: ";
  db.serialize(()=>{
    db.all('SELECT * FROM user ORDER BY id', [], function(err, rows) {
      if(err){
        res.send("Error encountered while dislaying");
        return console.error(err.message);
      }else {
        res.send(rows);
      }
    });
  });
});


// CREATE
app.get('/add/:id/:name', function(req,res){
  db.serialize(()=>{
    db.run('INSERT INTO user(id,name) VALUES(?,?)', [req.params.id, req.params.name], function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log("New user has been added");
      res.send("New user has been added into the database with ID = "+req.params.id+ " and Name = "+req.params.name);
    });
  });
});


// READ
app.get('/view/:id', function(req,res){
  db.serialize(()=>{
    db.each('SELECT id ID, name NAME FROM user WHERE id =?', [req.params.id], function(err,row){ 
      if(err){
        res.send("Error encountered while dislaying");
        return console.error(err.message);
      }
      res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
      console.log("Entry dislayed successfully");
    });
  });
});


// UPDATE Username
app.get('/update/:id/:name', function(req,res){
  db.serialize(()=>{
    db.run('UPDATE user SET name = ? WHERE id = ?', [req.params.name,req.params.id], function(err){
      if(err){
        res.send("Error encountered while updating");
        return console.error(err.message);
      }
      res.send("User updated successfully");
      console.log("User updated successfully");
    });
  });
});

// DELETE
app.get('/del/:id', function(req,res){
  db.serialize(()=>{
    db.run('DELETE FROM user WHERE id = ?', req.params.id, function(err) {
      if (err) {
        res.send("Error encountered while deleting");
        return console.error(err.message);
      }
      res.send("User deleted");
      console.log("User deleted");
    });
  });

});

// Closing the database connection.
app.get('/close', function(req,res){
  db.close((err) => {
    if (err) {
      res.send('There is some error in closing the database');
      return console.error(err.message);
    }
    res.send('Database connection successfully closed');
  });

});

server.listen(3000, function(){
  console.log("server is listening on port: 3000");
});

