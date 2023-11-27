# `@asaml/fs-helpers`

The `@asaml/fs-helpers` package is a Node.js module that provides utility functions for file system operations. It simplifies common tasks related to directories and files.

## Installation

```bash
npm install @asaml/fs-helpers
```

## Usage

```javascript
const fsHelpers = require('@asaml/fs-helpers')
```

## Available Functions

* isDir(path: string): boolean
Checks if the specified path refers to a directory.

Parameters:

path (string): The directory path to check.
Return:

A Promise that resolves to true if it's a directory, or false if it's not.
isFile(path: string): boolean
Checks if the specified path refers to a file.

Parameters:

path (string): The file path to check.
Return:

A Promise that resolves to true if it's a file, or false if it's not.
copyDirTo(sourceDir: string, destinationDir: string): void
Copies the entire contents of one directory to another.

Parameters:

sourceDir (string): The source directory.
destinationDir (string): The destination directory.
Return:

A Promise that resolves after the copy is complete.
copyFileTo(sourceFile: string, destinationFile: string): void
Copies a source file to a specific destination.

Parameters:

sourceFile (string): The path of the source file.
destinationFile (string): The path of the destination file.
Return:

A Promise that resolves after the copy is complete.
copyDirectoryTo(sourceDir: string, destinationDir: string): void
Copies the entire source directory to the destination, maintaining the directory structure.

Parameters:

sourceDir (string): The source directory.
destinationDir (string): The destination directory.
Return:

A Promise that resolves after the copy is complete.

getDirectoryFilesList(directory: string): string
Gets a list of files in the specified directory.

Parameters:

directory (string): The directory to get the list of files.
Return:

A Promise that resolves to an array of strings, where each string is the path of a file in the directory.

## Usage Examples

```javascript
const fsHelpers = require('@asaml/fs-helpers');

// Check if a path is a directory
const isDirectory = fsHelpers.isDir('/path/to/directory');

// Check if a path is a file
const isFile = fsHelpers.isFile('/path/to/file.txt');

// Copy the contents of a directory to another
fsHelpers.copyDirTo('/source/directory', '/destination/directory');

// Copy a file from one location to another
fsHelpers.copyFileTo('/source/file.txt', '/destination/file.txt');

// Copy an entire directory to another while maintaining the structure
fsHelpers.copyDirectoryTo('/source/directory', '/destination/directory');

// Get the list of files in a directory
const filesList = fsHelpers.getDirectoryFilesList('/path/to/directory');
```

## Contributing

Feel free to contribute! Open issues or send pull requests to improve this package.
