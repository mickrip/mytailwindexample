const fs = require('fs');
/*
For the corePlugins section of tailwind.config.js

Dirty helper to take stuff from https://tailwindcss.com/docs/configuration/
(too lazy to type it in).
 */

(async () => {
    const foo = fs.readFileSync("./docs.txt", "utf8");
    const test = foo.split("\n");
    const blah = test.map(v => v.split("\t"));
    const moo = blah.map( v =>{
        // `preflight`,    // Tailwind's base/reset styles
        if(!v[1])return;
        v[1] = v[1].replace(/\\/g, '!!');
       return `\t\t// "${v[0]}", // ${v[1]}`;
    });

    console.log(moo.join("\n"));
})();
