# esm-file-scanner
PURE 100% TYPED ESM. This is a ECMAScript-Module that runs in the Node.js RTE. It was written in TypeScript, transpiled to JavaScript, and was built to be ESM from the start. If your using ESM &amp; TS, and want a package that simply just works, then this is it.

This is a 100% pure ECMAScript-Module for the Node.js Runtime Environment. Comes fully typed, as it is authored in TypeScript using the module-resolution configuration for TSC released in TS v4.7. Things have changed, wether you have kept up or not, however; if you are reading this then you kept up, or are at-least trying to. The biggest problem with ESM is porting over to it is difficult. Often times developers want to convert there project to the newer ECMA-standardized ESM module-specification, however, they are quickly turned off by the idea when they find out how difficult it is to convert. Node.js wasn't created to use ES-Modules (short name for ECMAScript-Modules, ESM also works). The problem is compounded even further when you add the fact, the dependencies your going to need to use (and are possibly switching to, as your current dependencies likely do not support ESM, at-least not all of them) are also likely to have not been developed for ESM. This means your trying to duct-tape a ESM package together, with ducked-taped dependencies, that run in a duct-taped RTE; that's a lot of freaking duct-tape. The best way to start easing support, and fixing the problem, is to start creating packages that were intended to be ESM from the start, and thats what I JAYD3V am working on.",
  "main": "build/main.mjs",







`````````````````


// MODULAR SCOPED VARIABLES
let funcCount = 0;
let reoccurrenceCounter = 0;

const onFileHook = (filepath: string) => {
    console.log('\t\t  -\'Filename\' ->   "%s"', basename(filepath));
    console.log('\t\t  - \'Filepath\' ->   "%s"\n', filepath);
};

const onDirHook = (dirpath: string) => {
    console.log('\n\n\t>> DIRECTORY => "%s"', basename(dirpath));
    console.log('\t>> DIRPATH => "%s"\n', dirpath);
};




export function printDirRecursively(directoryPath: string){
    console.log('\n\n\n\nREADING FROM: ' + directoryPath);
    console.log('\nRECURSIVE COUNT:' + reoccurrenceCounter + '\n');
    const recursiveDirRead = (dirpath: string) => {
        const filesAndDirs = readdirSync(dirpath, { withFileTypes: true });

        reoccurrenceCounter++;
        console.log('\n\nRECURSIVE COUNT:' + reoccurrenceCounter + '\n\n');

        filesAndDirs.forEach((entity: Dirent, i) => {
            const relativePath = join(dirpath, entity.name);
            const name = entity.name;


            if (entity.isFile()) onFileHook(relativePath);

            if (entity.isDirectory()) {
                onDirHook(relativePath);
                recursiveDirRead(relativePath);
            }
        });

        reoccurrenceCounter = 0;
        funcCount++;
        console.log(funcCount);
    };

    recursiveDirRead(directoryPath);
}

/*






 */
/*






 */
/*






 */

/*






 */
/*






 */

/*






 */


`````````````````
