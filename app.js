const express = require ('express')
const path = require('path');
const app = express();

app.use(express.static("Public"));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "Views" , "home.html"))
});
const port = 3000 ;

app.listen(port, ()=> console.log ('Servidor corriendo' + port));