
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





module.exports.getAllUsers = (req, res, next) => {
    res.send(users)
}
module.exports.saveAUser = (req, res, next) => {
  
  if(users.id, users.name, users.contact, users.address, users.gender, users.photoUrl ===req.body.id, req.body.name, req.body.address, req.body.gender, req.body.photoUrl){
    users.push(req.body)
    res.send('saved')
  }
  else{
    res.send('put all property')
  }
       
}

module.exports.detailsUser = (req, res) =>{
  const { id } = req.params;
  // console.log(id);
  const filter = { _id: id };
  const foundUser = users.find((user) => user.id === Number(id));
  res.send(foundUser);
 }
module.exports.randomUser = (req, res) =>{
  const randomUsers = users.sort(() => Math.random() - 0.5);
  res.send(randomUsers)
  // const { id } = req.params;
  // console.log(id);
  // const filter = { _id: id };
  // const foundUser = users.find((user) => user.id === Number(id));
  // res.send(foundUser);
 }
module.exports.updateUser = (req, res) =>{
  const {id} = req.params;
  const filter = {_id : id};
  console.log(filter);
  const newUser = users.find(user => user.id===Number(id))
  console.log(newUser.id);

  newUser.id = id
  newUser.name = req.body.name
  
  res.send(newUser)
 }