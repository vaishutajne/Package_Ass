const shell = require('shelljs')
//print
shell.echo('hello world');

// Create a file
shell.touch('myFile.txt');
//copy files
shell.cp('-R', 'myFile.txt/', './demo');
// Display the contents of the file
shell.cat('myFile.txt');

//remove files
shell.rm('-rf', './ex.txt');

// Create a directory
shell.mkdir('-p', 'myDirectory');
// Append text to the file
shell.echo('This is some text.').toEnd('myFile.txt');
// Change back to the parent directory
shell.cd('..');
// Remove the directory
shell.rm('-rf', 'myDirectory');








