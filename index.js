const chalk = require("chalk")

function transform (data) {
  const out = []
  let match
  data.forEach((line) => {
    let output = line
    if (line.startsWith("```")) { output = "" }
    else if (line.startsWith("#")) { output = chalk.bold(line) }
    while (match = /\*\*(.*?)\*\*/.exec(output)) {
      output = output.replace(match[0], chalk.bold(match[1]))
    }
    while (match = /_(.*?)_/.exec(output)) {
      output = output.replace(match[0], chalk.italic(match[1]))
    }
    out.push(output)
  })
  return out
}
module.exports = transform
