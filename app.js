const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));


app.get("/api/version", (req, res) => {
  res.send("1.0");
})
app.get('/health', (req, res) => {
  // throw 'error...'
  res.send('OKK')
})

app.listen(PORT, () => {
  console.log(`server started on port${PORT}` );
});
