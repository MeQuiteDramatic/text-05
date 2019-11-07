#! /usr/bin/env node

let oldName = process.argv[2] && process.argv[2].slice(1);

let newName = process.argv[3] && process.argv[3].slice(1);

const path = require('path');

const fs = require('fs');





if (oldName || newName) {
   if (fs.existsSync(path.join(process.cwd(), oldName))) {
      fs.renameSync(oldName, newName);
   }
} else {
   let i = 0;

   let list = fs.readdirSync(process.cwd())  //['bin','dist','index.html','index.js','package.json'...]
   list.forEach(item => {
      if (/.js$/.test(item)) {
         i++;
         fs.renameSync(item, `index(${i}).js`)
      }
   })
}
