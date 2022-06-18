import { fileExtScanner, DirectoryScanner } from './scanner.mjs';

// const results = fileExtScanner('.log', './test-dir');

const dirScanner = new DirectoryScanner();

const results = dirScanner.exec(
  '.log',
  './test-dir',
  {
    verboseAlgorithm : false,
    searchType       : 'is'
  }
);

console.log('\n\n');
console.log(results);
console.log('\n\n');

console.log(dirScanner.files);
