const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const usersRoutes = require('./routes/v1/user.route.js')

app.use(cors())
app.use(express.json());



app.use("/api/users/all", usersRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all("*", (req, res) => {
  res.send ("No route found")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})