fetch('http://127.0.0.1:4275?key=123', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'cc',
    age: 18
  })
})
