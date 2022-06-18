/**
* @author Ajay Chambers <w3dojo@gmail.com>
* @copyright COPYRIGHT 2022 - Andrew Jay Chambers
* @license Apache-2.0 (Sort-of like MIT, but more defined)
* @JAYD3V
* @link Https://www.GitHub.com/JAYD3V/Alloy
* */

import { join, extname } from 'node:path';
import { readdirSync } from 'node:fs';
import { Dirent } from 'node:fs';

type StrOrStrArr<T> = T | ArrayOfStrOrStrArr<T>;

type ArrayOfStrOrStrArr<T> = Array<StrOrStrArr<T>>;

type SearchType = 'is'
  | 'has'
  | 'beginsWith'
  | 'endsWith'
  | 'fileExt'
  | 'valid';

type ScannerOpts = {
  dirToSearch?: string;
  verboseAlgorithm: boolean;
  searchType: SearchType;
};

export class DirectoryScanner {
  // PRIVATE
  private basepath = '';
  private basename = '';
  private opts: ScannerOpts;

  // PUBLIC
  files: ArrayOfStrOrStrArr<string> = [];

  // GETTERS
  get directory(){ return this.basepath; }

  // SETTERS
  set directory(dirpath: string){ this.basepath = dirpath; }
  set searchType(type: SearchType){ this.opts.searchType = type; }

  constructor(dirpath?: string){
    if (dirpath) this.directory = dirpath;
    else this.directory = '';

    this.opts = {
      verboseAlgorithm : false,
      searchType       : 'is'
    };
  }

  exec(fileExt: string, dirpath: string, opts: ScannerOpts = {
    verboseAlgorithm : false,
    searchType       : 'is'
  }){
    if (opts.verboseAlgorithm) console.log('Reading dir: ' + dirpath);

    const contents = readdirSync(dirpath, { withFileTypes: true });

    contents.forEach((dirent: Dirent) => {
      let next = join(dirpath, dirent.name);
      const hasExt = dirent.name.endsWith(fileExt);

      if (dirent.isFile() && hasExt) this.files.push(next);
      if (dirent.isDirectory()) this.exec(fileExt, next);

      next = dirpath;
    });

    console.log('FOO BAR!');

    return this.files;
  }


}

/** **Declaration:**
  * `const files: ArrayOfStrOrStrArr<string> = [];`\
  * Modular-scoped Files Value, for hanging on to files found by\
  * `fileExtScanner(fileExt, dirPath, opts)` */
const files: ArrayOfStrOrStrArr<string> = [];

/**
  * **fileExtScanner** — _"Recursively scans a directory for all
  * files that end with in the str-value passed to the `fileExt`
  * parameter, and returns an array that contains the filepaths
  * for all matches found."_
  *
  * @param fileExt The file extension to search for.
  * @param dirpath The dir where the search will be initiated.
  * @returns String array that contains the filepaths found.
  * */
export function fileExtScanner(
  fileExt: string,
  dirpath: string,
  opts = {
    verboseRead: false
  }
){
  const contents = readdirSync(dirpath, { withFileTypes: true });

  console.log('READING FROM: ' + dirpath);

  contents.forEach((dirent: Dirent) => {
    const next = join(dirpath, dirent.name);
    const hasPatt = dirent.name.endsWith(fileExt);

    if (dirent.isFile() && hasPatt) files.push(next);
    if (dirent.isDirectory()) fileExtScanner(fileExt, next);
  });

  return files;
}

// export function test4pattern(str: string, pattern: RegExp){ }
