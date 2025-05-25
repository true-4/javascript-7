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