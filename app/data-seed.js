const { MongoClient } = require('mongodb');

const dataToAdd = [
  { name: "John", value: "Test" },
  { name: "Jones", value: "Test" }
];

async function seedData() {
  const url = 'mongodb://mongo-sts-0.mongo-service.default.svc.cluster.local:27017';
  const dbName = 'mydatabase';
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('mycollection');

    const result = await collection.insertMany(dataToAdd);
    console.log(`Inserted ${result.insertedCount} documents`);
  } catch (err) {
    console.error('Failed to insert documents:', err);
  } finally {
    await client.close();
  }
}

seedData().catch(console.error);
