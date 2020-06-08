let data = require('@begin/data')
let arc = require('@architect/functions')

async function http(req) {

let table = 'Movies'
let key = 'National Treasure'

//Decrement
const results = await data.decr({table, key, prop: 'votes'})
console.log(results.votes)

  return {
    type: 'text/html; charset=utf8',
    "body": `<h1>That is incorrect, ${results.votes} clicks say otherwise</h1> <h2><a href="/incr">Click Here to change your mind</a></h2>`
  }
}

exports.handler = arc.http.async(http)