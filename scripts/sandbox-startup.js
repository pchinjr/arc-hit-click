let data = require('@begin/data')
let arc = require('@architect/functions')

async function startUpScript() {
  let table = 'movies'
  let key = 'National Treasure'
  let votes = 450
  
  await data.set([{ table, key, votes}])
  
}

module.exports = startUpScript