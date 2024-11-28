let express = require('express');
let app = express();

const router = express.Router();


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

console.log(__dirname)

module.exports = router ;