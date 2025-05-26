'use strict'

console.log(this) // ссылается на LE документа

function getThis() {
  console.log(this)
}
getThis() // возвращает undefined так как в строгом режиме function declaration всегда что то возвращает и имеет this

const arrThis = () => console.log(this)
arrThis() // так как не имеет собственного this ссылается на LE родителя (документа)

// 4
function formatName(name) {
  const firstLit = name.charAt(0).toUpperCase()
  const restLit = name.slice(1).toLowerCase()
  return firstLit + restLit
}
console.log(formatName('alEX'))

// 5
function countError(text) {
  const lowerCaseText = text.toLowerCase().replace('.','')
  const words = lowerCaseText.split(/\s+/)

  let count = 0

  for (let word of words) {
    if (word === 'error') {
      count++
    }
  }
  return count
}

console.log(countError("System error. Another ERROR occurred."))
console.log(countError("No errors here."))