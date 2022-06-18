/**
* @author Ajay Chambers <w3dojo@gmail.com>
* @copyright COPYRIGHT 2022 - Andrew Jay Chambers
* @license Apache-2.0
* @JAYD3V
* @link Https://www.GitHub.com/JAYD3V/Alloy
* */

import { join, extname } from 'node:path';
import { readdirSync } from 'node:fs';
import { Dirent } from 'node:fs';

type StrOrStrArr<T> = T | ArrayOfStrOrStrArr<T>;
type ArrayOfStrOrStrArr<T> = Array<StrOrStrArr<T>>;

const files: ArrayOfStrOrStrArr<string> = [];

const genErrMesg = '';

export class DirectoryScanner {
  private basepath = '';
  private basename = '';

  constructor(dirpath?: string){
    if (dirpath) { this.directory = dirpath; }
  }

  recursiveScan(){
    return '';
  }

  set directory(dirpath: string){
    this.basepath = dirpath;
  }

  get directory(){
    return this.basepath;
  }
}

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
export function fileExtScanner(fileExt: string, dirpath: string){
  try {
    let next = dirpath;

    const contents = readdirSync(dirpath, { withFileTypes: true });

    console.log('READING FROM: ' + dirpath);

    contents.forEach((dirent: Dirent) => {
      next = join(dirpath, dirent.name);

      if (dirent.isFile()) { files.push(next); }

      if (dirent.isDirectory()) {
        const nextFiles = fileExtScanner(fileExt, next);
        files.push(nextFiles);
      }

      next = dirpath;
    });

    return files;
  } catch (e: unknown) {
    throw new Error();
  }
}
