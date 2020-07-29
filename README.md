# cli-manual
parse markdown input, making it more readable in the terminal

This module returns the markdown input with inserted ANSI escape codes such that:
* titles and `**bold**` text are bolded, 
* `_italics_` are marked up, 
* and code blocks simplified

Basically, I wanted to have a manual that could be printed nicely in the terminal using the same README as the project repo, and so I created this.


### Usage
```javascript
const fs = require("fs")
const toManual = require("cli-manual")
const markdown = fs.readFileSync("./README.md").toString()
const output = toManual(markdown.split("\n"))
console.log(output.join("\n")) // prints the input markdown with titles and **bold** text bolded, italics marked up, and code blocks simplified
```


### License
ISC
