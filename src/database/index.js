const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'app',
});

client.connect();

client.query('SELECT * FROM clients;').then(console.log);
