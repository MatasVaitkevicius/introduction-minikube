const { MongoClient } = require('mongodb');
const express = require('express');

// Connection details
const url = 'mongodb://mongo-service.default.svc.cluster.local:27017';
const dbName = 'mydatabase';
const dataToAdd = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, async () => {
    console.log(`Server is listening on port ${port}`);

    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection('mycollection');
        const result = await collection.insertMany(dataToAdd);
        
        console.log(`Inserted ${result.insertedCount} documents`);
        client.close();
    } catch (err) {
        console.error('Failed to insert documents:', err);
    }
});
