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
