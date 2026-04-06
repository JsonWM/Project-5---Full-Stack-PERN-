// Connect to Postgres using node-postgres package
// Interacting with the DataBase
require('dotenv').config();
const { request } = require('express');

const POOL = require('pg').Pool;

const pool = new POOL({
    connectionString: process.env.DATABASE_URL, ssl: {
        rejectUnauthorized: false
    }
});
// Create all the functions that will be our request handlers in our express server 

// CREATE 
const createLink = (req, res) => {
    const name = req.body.name;
    const URL = req.body.URL;

    pool.query('INSERT INTO links (name, URL) VALUES ($1, $2) RETURNING id', [name, URL], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Success, link added with ID: ${results.rows[0].id}`)
    })
}

// Get all the data from db  - READ
const getLinks = (req, res) => {

    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows)
    })
}


// Update link in the db

const updateLink = (req, res) => {
    const id = parseInt(req.params.id);
    const name = req.body.name;
    const URL = req.body.URL;

    pool.query('UPDATE links SET name = $1, URL = $2 WHERE id = $3',[name, URL, id], (error, results) => {
            if (error){
                throw error;
            } 
            res.status(201).send(`Link modified with ID: ${id}`);
        }
    )
}



// Delete link in the db

const deleteLink = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM links WHERE id = $1', [id], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Link deleted with ID: ${id}`);
    })
}


// Exporting the functions so index.js can use them
module.exports = {
    // CREATE
    createLink,
    // getLinks is now an object (READ)
    getLinks,
    // UPDATE
    updateLink,
    // REMOVE
    deleteLink
}