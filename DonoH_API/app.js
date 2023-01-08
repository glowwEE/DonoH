const express = require('express');
const app = express();

const port = 3553;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send({"Greeting": "Welcome to our server"})


});

app.post('/login page', (req,res)=>{

})

app.get('')



app.listen(process.env.port || port, ()=> {

    console.log(`Server listening at port ${port}`);
})