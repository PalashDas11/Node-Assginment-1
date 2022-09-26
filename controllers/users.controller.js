
let users = [
    {
        id: 1,
        "name": "Karim",
        "gender": "male",
        "contact": "01234567890",
        "address": "Dhaka",
        "photoUrl": "https://i.im.ge/2022/09/24/15i4eT.Person1.jpg"
      },
      {
        id: 2,
        "name": "Rahim",
        "gender": "male",
        "contact": "01234567890",
        "address": "Faridpur",
        "photoUrl": "https://i.im.ge/2022/09/24/155YUD.Person2.webp"
      },
      {
        id: 3,
        "name": "Salam",
        "gender": "male",
        "contact": "01234567890",
        "address": "Madaripur",
        "photoUrl": "https://i.im.ge/2022/09/24/15PhAW.Person3.webp"
      },
      {
        id: 4,
        "name": "Rafiq",
        "gender": "male",
        "contact": "01234567890",
        "address": "Barisal",
        "photoUrl": "https://i.im.ge/2022/09/24/15P9wc.Person4.webp"
      }
]




//  get All user 
module.exports.getAllUsers = (req, res, next) => {
  const { limit, page } = req.query;
    res.send(users)
}

// save a user 
module.exports.saveAUser = (req, res, next) => {
  
  if(users.id, users.name, users.contact, users.address, users.gender, users.photoUrl ===req.body.id, req.body.name, req.body.address, req.body.gender, req.body.photoUrl){
    users.push(req.body)
    res.send('saved')
  }
  else{
    res.send('put all property')
  }
       
}
// details a user 
module.exports.detailsUser = (req, res) =>{
  const { id } = req.params;
  const filter = { _id: id };
  const foundUser = users.find((user) => user.id === Number(id));
  res.send(foundUser);
 }
//  random user genarate 
module.exports.randomUser = (req, res) =>{
  const keys = Object.keys(users)
  const randIndex = Math.floor(Math.random() * keys.length)
  const randKey = keys[randIndex]
  const name = users[randKey]
   res.send(name);
 }

//  update a user 
module.exports.updateUser = (req, res) =>{
  const {id} = req.params;
  const filter = {_id : id};
  const newUser = users.find(user => user.id===Number(id))
  newUser.id = id
  newUser.name = req.body.name;
  res.send(newUser)
 }
//  delete a User 
 module.exports.deleteUser = (req, res) => {
  const {id}= req.params
  const filter = {_id : id}
  users = users.filter(user => user.id !== Number(id))
  res.send(users)
}