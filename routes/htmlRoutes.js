var router = require('express').Router();
var path = require('path');

console.log(path.join(__dirname, '../public/index.html'))

router.get("/notes", function(req, res){
   res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get("*", function(req, res){
   res.sendFile(path.join(__dirname, '../public/index.html'))
})
module.exports = router;


