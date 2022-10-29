import { scrypt, randomBytes } from 'crypto'; // hashing func to create a hashed password
import { promisify } from 'util'; // to make the progress asynchronous (Promise based)

const scryptAsync = promisify(scrypt);

export class Password {
  // Static methods are methods that we can access without
  // create an instance of a class (opposed to instance methods)

  // The Buffer is designed to handle raw binary data.
  // Each buffer corresponds to some raw memory allocated outside V8.
  // Buffers act somewhat like arrays of integers, but aren't resizable
  // and have a whole bunch of methods specifically for binary data

  static async toHash(password: string) {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
    return buf.toString('hex') === hashedPassword;
  }
}
