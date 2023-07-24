function getTricks () {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(res => {
      if(!res.ok) {
        throw new Error('Could not get tricks.')
      }
      return res.json()})
}

export {getTricks}