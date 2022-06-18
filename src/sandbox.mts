import { fileExtScanner, TreeScanner } from './scanner.mjs';

// const results = fileExtScanner('.log', './test-dir');

const dirScanner = new TreeScanner();

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
