## Authentication Service API

- /api/users/signup POST {email: string, password: string}
- /api/users/signin POST {email: string, password: string}
- /api/users/signout POST {}
- /api/users/currentuser GET

## Requirements for Auth Mechanism

- Must be able to tell details about a user
- Must be able to handle authorization
- Must have a built-in, tamper-resistant way to expire or invalidate itself
- Must be easily understood between different languages (cookie handling accross languages is usually an issue when i encrypt the data in the cookie -> won't encrypt the cookie contents)
- Must not require some kind of backing data store on the server

=> The flow will be:

- User ABC requests to purchase a ticket with a JWT/Cookie that is 30 minutes old
- Logic to inspect JWT/Cookie and decide if user is authenticated
- If JWT/Cookie is older than 30 minutes, reach to auth service -> token refresh logic
- If Admin User requests to ban a user -> emit a 'user banned' event to auth service & other services

## Note

Cookies vs JWT's

- Cookie
  - transport mechanism
  - moves any kind of data between browser and server
  - automatically managed by the browser
- JWT
  - authentication / authorization mechanism
  - stores any data
  - has to manage it manually
