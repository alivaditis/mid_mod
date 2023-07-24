function getTricks () {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(res => {
      if(!res.ok) {
        throw new Error('Could not get tricks.')
      }
      return res.json()})
}

function postTrick (newTrick) {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    body: JSON.stringify(newTrick),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => {
      if(!res.ok) {
        throw new Error('Could not get tricks.')
      }
      return res.json()})}

export {getTricks, postTrick}