//PORT, Rendering (routes) and functions from queries.js (db), 

const express = require("express");
const app = express();

const path = require('path');
//(db)  
const db = require('./queries');



const PORT = process.env.PORT || 9000; 

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))
// host react app as static files
app.use(express.static(path.resolve(__dirname, '../Project-3---My-Favorite-Links/dist')))



//ROUTES
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../Project-3---My-Favorite-Links/dist', 'index.html'))
})

app.get('/test', (req, res)=>{

})

//CRUD  

// CREATE - add data to db
app.post('/new', db.createLink)

// READ - get data from db
app.get('/links', db.getLinks)

// UPDATE - update data in db by ID
app.put('/update/:id', db.updateLink);

// DELETE - remove data from db by ID
app.delete('/remove/:id', db.deleteLink);

// Starting Express on our PORT 
app.listen(PORT, ()=>{
    console.log(`App running on the port: ${PORT}`);
    
})          