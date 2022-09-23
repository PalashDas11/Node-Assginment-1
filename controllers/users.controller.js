
let users = [
    {
        "id": 1,
        "name": "Karim",
        "gender": "male",
        "contact": "01234567890",
        "address": "Dhaka",
        "photoUrl": "https://i.im.ge/2022/09/24/15i4eT.Person1.jpg"
      },
      {
        "id": 2,
        "name": "Rahim",
        "gender": "male",
        "contact": "01234567890",
        "address": "Faridpur",
        "photoUrl": "https://i.im.ge/2022/09/24/155YUD.Person2.webp"
      },
      {
        "id": 3,
        "name": "Salam",
        "gender": "male",
        "contact": "01234567890",
        "address": "Madaripur",
        "photoUrl": "https://i.im.ge/2022/09/24/15PhAW.Person3.webp"
      },
      {
        "id": 4,
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