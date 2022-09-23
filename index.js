const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const usersRoutes = require('./routes/v1/user.route.js')


app.use(express.json());



app.use("/api/v1/users", usersRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all("*", (req, res) => {
  res.send ("No route found")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})