'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
var extend = require('extend');


function readConfigFile() {

    // Load common properties
    var commonProps = require('./environments/common.json');

    //derive environment
    var env =  process.env.NODE_ENV || 'development';

    //load environment specific properties
    var envProps =  require('./environments/'+ env + '.json');

    var configs ={};
    // merge properties
    extend (true, configs, commonProps, envProps);

    return configs;
}

module.exports = {configuration: readConfigFile()};
