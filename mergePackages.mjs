import fs from 'fs';
import mergePackages from 'merge-packages';

const pkgStr1 = fs.readFileSync('./package.json', 'utf8');
const pkgStr2 = fs.readFileSync('./import/package.json', 'utf8');

// only support string. buffer is not supported
const mergedPkgStr = mergePackages.default(pkgStr1, pkgStr2);
console.log(mergedPkgStr)
fs.writeFileSync('./package.json', mergedPkgStr)