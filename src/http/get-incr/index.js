let data = require('@begin/data')
let arc = require('@architect/functions')

async function http(req) {

  let table = 'Movies'
  let key = 'National Treasure'
  
  //Decrement
  const results = await data.incr({table, key, prop: 'votes'})
  console.log(results)
  
  return {
    type: 'text/html; charset=utf8',
    "body": `<h1>That is correct and ${results.votes} clicks agree!</h1>`
  }
  
}
exports.handler = arc.http.async(http)