# generator-restify-log-config 

A yeoman generator that will create the boilerplate for creating , running and deploying [restify](http://mcavage.me/node-restify/) based RESTful API.

This generator will create scaffolding with support for logging and environment-specific configuration files. 

Also includes gulp script for running and building the code.

It adds to the following functionalty from [generator-restify](https://travis-ci.org/chris-l/generator-restify).

## About the folder structure 

One of the most relevant parts of this generator is the auto-inclusion of files.

To create a new route, is only necessary to create a file in the `routes/` directory that looks like this:

```
module.exports = function (server) {
  server.get('/info/:param', function (req, res, next) {
  });

  server.put('/info/', function (req, res, next) {
  });
};
```

Just for being in the `routes` directory, the file will be automatically included. Is not necessary to do any other step.

## Environment specific property files

4 environment specific properties and 1 common property file ( JSON format) will be generated for the project. 

Adding property-values to the environment specific property-file will override the values in the common property-file. 

The config module will 'merge' the common and the environment-specific property-file and provide a consolidated configuration object.

## Installation

Install: `npm install -g generator-restify-log-config`

Create a new directory and enter inside of it:
```
mkdir some-app && cd some-app
```

Run the generator: 
```
yo restify-log-config
```
Install the node modules
```
npm update   
```
Start the server (node mon for file-watching)
```
gulp 
```
Add new routes
Build a file with app specific logic (using instructons above) and drop it under the 'routes/' directory.
The server will autometically pick the file and restart.

Build - set the environment value so only that specific file is copied over to the dist folder. 
```
gulp build --env 
```
## License

MIT
