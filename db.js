const { MongoClient } = require('mongodb');

const state = { db: null };
const url = 'mongodb://localhost:27017';

// add data base name here 
const dbname = '';
// for use this database name 

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connect = async () => {
    try {
        await client.connect();
        state.db = client.db(dbname);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
    }
};

const get = () => {
    if (!state.db) throw new Error('Database not connected');
    return state.db;
};

module.exports = { connect, get };
