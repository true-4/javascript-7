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

// 6
function replaceEmailDomains(emails) {
  const newEm = emails.replaceAll('@gmail.com', '@example.com')
  return newEm
}

console.log(replaceEmailDomains('user1@gmail.com'))
console.log(replaceEmailDomains('user1@gmail.com; user2@gmail.com'))
console.log(replaceEmailDomains('admin@mail.ru; user@gmail.com'))

// 7
function formatDate(dateStr) {
  return dateStr.split('-').reverse().join('.')
}

console.log(formatDate('2025-05-24'))
console.log(formatDate('1999-01-01'))
console.log(formatDate('2000-12-31'))