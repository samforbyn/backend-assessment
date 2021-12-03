const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["You're destined to be a JavaScript Developer",
        "The path of Python Developer calls you",
        "The server says you're a Java Developer",
        "Uh oh. David Wheeler told me that you're an Assembly Developer. Good luck!",
        "sonic's divine word says you're the one to defeat the Dr. Eggman"
    ] 
    let randIndex = Math.floor(Math.random() * fortunes.length)
    let randFortune = fortunes[randIndex]

    res.status(200).send(randFortune)

})

app.get("/api/lucky", (req, res) => {
  const numArr = [...Array(100).keys()]
  let randIndex = ~~(Math.random() * numArr.length)
  let luckyNumber = numArr[randIndex]
  let luckyNumStr = luckyNumber.toString()
  console.log(luckyNumber)
  res.status(200).send(luckyNumStr)
})


let complimentHolder = []
app.put('/api/compliments/', (req, res) => {
  const allCompliments = [];
  let text = req.body
  allCompliments.push(text)
  complimentHolder.push(allCompliments)
  res.status(200).send(complimentHolder)

})

app.delete('/api/compliments/:id', (req, res) => {
  let index = complimentHolder.findIndex(elem => elem.id === +req.params.id)
  complimentHolder.splice(index, 1)
  res.status(200).send(complimentHolder)
  console.log("REMOVED")
})

app.listen(4000, () => console.log("a chinchilla leads you to 4000"));
