const count = require('text-count');

function momogesa() {
  const text = "M O M O G E S A"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Momogesa
