import { cp, mkdir, rm, readFile, access, readdir } from 'node:fs/promises';
import vm from 'node:vm';
import path from 'node:path';
const context = {window:{}};
vm.runInNewContext(await readFile('public/catalog.js','utf8'), context);
const data = context.window.ROUND_DATA;
const files = new Set(data.activities.map(a=>a.poster));
for (const p of data.posts) for (const image of p.images) {files.add(image.src);files.add(image.thumb);}
for (const file of files) {if (!file.startsWith('assets/')) throw Error(`Invalid path: ${file}`);await access(path.join('public',file));}
if (data.activities.length!==17 || data.posts.length!==52) throw Error('Incomplete source catalog');
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});
console.log(`Built dist/: ${data.activities.length} activities, ${data.posts.length} original notes, ${files.size} verified local media references.`);
