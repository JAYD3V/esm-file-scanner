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
    dirpath: string,
    opts = {
        verboseRead: false
    }
){
    const contents = readdirSync(dirpath, { withFileTypes: true });

    console.log('READING FROM: ' + dirpath);

    contents.forEach((dirent: Dirent) => {
        const next = join(dirpath, dirent.name);
        if (dirent.isFile()) {
            console.log('\t\t    - FILE: %s', next);
            files.push(next);
        }
        if (dirent.isDirectory()) {
            console.log('\n\n\n\n\t  * DIRECTORY %s', next);
            fileExtScanner(next);
        }
    });

    return files;
}

// export function test4pattern(str: string, pattern: RegExp){ }
