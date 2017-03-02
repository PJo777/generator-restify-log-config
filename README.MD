# generator-restify-log-config 

A yeoman generator that will create the scaffolding for creating, running and building [restify](http://mcavage.me/node-restify/) based RESTful API, with support for logging and environment-specific configuration files. 

Start developing a RESTful API in about 15 minutes.

It adds to the functionality from [generator-restify](https://travis-ci.org/chris-l/generator-restify).


## Environment specific property files

Environment specific properties (for development, qa, uat and production) and one common property file (all in JSON format) will be generated for the project.

Adding property-values to the environment specific property-file will override the values in the common property-file.

The config module will 'merge' the common and the environment-specific property-file and provide a consolidated configuration object.

## Installation

Install: `npm install -g generator-restify-log-config`

Create a new directory and enter inside of it:
```
mkdir some-app && cd some-app
```

Run the generator (npm install -g yo , if not installed already): 
```
yo restify-log-config
```
Install the required node modules (this will install all the dependencies from package.json)
```
npm update   
```
Start the server (starts a watcher using node-mon, so you can continue to develop and the server will restart with the changes)
```
gulp 
```
Add new routes/functionality.

Create a file with app specific logic (use the following format) and drop it under the 'routes/' directory.

```
module.exports = function (server) {
  server.get('/info/:param', function (req, res, next) {
  });

  server.put('/info/', function (req, res, next) {
  });
};
```

Just for being in the `routes` directory, the file will be automatically included. Is not necessary to do any other step.

Build - set the environment value so only that specific file is copied over to the dist folder. 
```
gulp build --env 
```
## License

MIT
