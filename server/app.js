const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(cors());

// routes ======================================================================
require('./routes/users.js')(app);


app.listen(3000, () => {
    console.log('server is running on port 3000...');
});

module.exports = app;