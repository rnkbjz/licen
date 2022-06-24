const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        database: "licencjat"
    }
);
    

app.post('/register', (req, res) => {
const username = req.body.username;
const password = req.body.password;

db.query(
    `SELECT 1 FROM users WHERE username = '${username}'`,
    (err, result) => {
      if (result) {
        if (result.length > 0) {
          res.send({
            message: "Wprowadź inną nazwę użytkownika",
          });
        } else {
          db.query(
            "INSERT INTO users (username,password) VALUES (?,?)",
            [username,password],
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
              }
            }
          );
        }
      }
});
});

app.post('/login',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    
        db.query("SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password], 
        (err, result) => {
            if(err) {
                res.send({err: err});
            } 
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({message: "Zły login lub hasło"});
                }
            }
        );
});

app.listen(3001, () => {
    console.log("running server");
});
