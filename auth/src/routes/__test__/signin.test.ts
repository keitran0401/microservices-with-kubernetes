import request from 'supertest';
import { app } from '../../app';

it('fails when an email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await global.signup({
    email: 'test@test.com',
    password: 'password',
  });

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'aslkdfjalskdfj',
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await global.signup({
    email: 'test@test.com',
    password: 'password',
  });

  const response = await global.signin({
    email: 'test@test.com',
    password: 'password',
  });
  expect(response.get('Set-Cookie')).toBeDefined();
});
