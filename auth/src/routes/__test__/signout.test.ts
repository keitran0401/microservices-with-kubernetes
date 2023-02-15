import request from 'supertest';
import { app } from '../../app';

it('signs out successfully', async () => {
  await global.signup({
    email: 'test@test.com',
    password: 'password',
  });

  await request(app).post('/api/users/signout').send({}).expect(200);
});
