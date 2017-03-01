 
var Generator = require('yeoman-generator');

 module.exports = class extends Generator {

 	constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Name Of the Project',
      default : this.appname // Default to current folder name
    }, {
      type    : 'input',
      name    : 'author',
      message : 'Name Of the Author',
      default : '' // Default to blank
    }]).then((answers) => {
      this.appname = answers.name;
      this.author = answers.author;
    });
  }


  writing() {
    this.fs.copyTpl(
      this.templatePath('_index.js'),
      this.destinationPath('index.js'),
      { appname: this.appname }
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { appname: this.appname , author : this.author }
    );

    this.fs.copyTpl(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

	  // Copy all config files
	  this.fs.copy(
	    this.templatePath('config/**/*'),
	    this.destinationPath('config')
	  );

    // Copy basic route files
    this.fs.copy(
      this.templatePath('routes/**/*'),
      this.destinationPath('routes')
    );

  }

   method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

};