const db = require('../db');

module.exports = (app) => {

    // GET api for initial data 
    app.post('/users',
        (req, res) => {
            db.query(' SELECT * FROM users', (err, rows, fields) => {
                if (!err) res.send(rows);
                else console.log(err)
            })
        }
    );

    // POST api for adding data and editing based on user ID 
    app.post('/save',
        (req, res) => {
            console.log("add data", req.body.data)
            const reqBody = req.body.data;
            const users = {
                "name": reqBody.name,
                "value": reqBody.value
            }
            if (reqBody.id && reqBody > 0) {
                users.user_id = reqBody.id
            }

            if (reqBody.id && reqBody.id > 0) {
                db.query(' UPDATE users SET name= ?, value = ?  WHERE user_id = ? ', [reqBody.name, reqBody.value, reqBody.id], (err, rows, fields) => {
                    if (!err) {
                        res.send(rows);
                    }
                    else console.log(err)
                })
            } else if (!reqBody.id) {
                db.query('INSERT INTO users SET ?', users, (err, rows, fields) => {
                    if (!err) {
                        res.send(rows);
                    }
                    else console.log(err)
                })
            }
        }
    );

    // POST api for DELETING particular data 
    app.post('/delete',
        (req, res) => {
            db.query('DELETE FROM users WHERE user_id = ?', [req.body.data.id], (err, rows, fields) => {
                if (!err) res.send(rows);
                else console.log(err)
            })
        }
    );

};

