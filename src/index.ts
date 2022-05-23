import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import { smokeTest } from './smoke-test';

createConnection()
  .then(async (connection) => {
    await connection.runMigrations();
    await smokeTest(connection);
    app.listen(8080, () => console.log('server running on port 8080'));
  })
  .catch((error) => console.log(error));
