# Express Starter Kit
This starter kit is for back-end applications, such as APIs. This utilizes Express and includes a simple JWT implementation.

Feel free to open a pull-request if you have an idea or improvement!

To view an example, check out the `examples` branch!

## Usage
```
./bin/bootstrap
./bin/dev-start
```

## Build
__Note:__ Build process target files overwrite dev process files for ease of use.

```
./bin/build
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
