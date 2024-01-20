const express = require('express')
const app = express()
const PORT = 3000


app.get('/checking', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})
app.get('/doublecheck', (req, res) => {
  res.status(200).json('Welcome, your app is working well now also');
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


module.exports = app
