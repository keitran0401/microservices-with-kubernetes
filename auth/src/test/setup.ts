import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongo: any;

// Get MongoMemoryServer start up & get Mongoose connect to it
beforeAll(async () => {
  process.env.JWT_KEY = 'togetpassthetest';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri);
});

// Connect to the db, delete & reset all the data
beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

// Stop MongoDb server & disconnect
afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

// Global functions for testing purpose
declare global {
  function signup(payload: {
    email: string;
    password: string;
  }): Promise<request.Response>;
  function signin(payload: {
    email: string;
    password: string;
  }): Promise<request.Response>;
}

global.signup = async (payload) => {
  return await request(app).post('/api/users/signup').send(payload).expect(201);
};
global.signin = async (payload) => {
  return await request(app).post('/api/users/signin').send(payload).expect(200);
};
