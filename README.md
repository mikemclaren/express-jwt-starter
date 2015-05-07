# Express Starter Kit
This starter kit is for back-end applications, such as APIs. This utilizes Express and includes a simple JWT implementation.

Feel free to open a pull-request if you have an idea or improvement!

To view an example, check out the `examples` branch!

## Usage
__Note:__ You should use this starter kit with the [starter-kit](https://www.npmjs.com/package/starter-kit) utility.
```
./bin/bootstrap
./bin/dev-start
```

## Authentication
By default, `/auth` is the route for authenticating.  Simply `POST` to it to get a web token.  Once you have a web token, you can pass it with subsequent requests to authenticate.

```
Authorization: Bearer [token]
```

## Important Files
|File|What's Important About It?
|------|------|
|`app/auth.js`|Where the authentication route for JWT creation resides.|
|`app/index.js`|Where the base route exists.|
|`app/routes.js`|Where routes can be bound to the express app.|
|`server/server.js`|Where the express server resides.|


## Features
- JWT
- Supervisor
- ExpressJS
