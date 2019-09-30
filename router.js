const express = require("express");
const router = express.Router();

const { DogPosts } = require("./models");


DogPosts.create("Spot","5", "M", "Jan 5");
DogPosts.create("Silly", "1", "F", "July 12");
DogPosts.create("Sam", "10", "F", "July 25");


router.get("/", (req, res) => {
  res.json(DogPosts.get());
});

router.post("/", (req, res) => {
  const requiredFields = ["name", "age", "sex", "enterDate"];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      console.error("missing field");
      return res.status(400).send(message);
    }
  }
  const item = DogPosts.create(
    req.body.name,
    req.body.age,
    req.body.sex,
    req.body.enterDate); 

  res.status(201).json(item);
});

router.put("/:id", (req, res) => {
  const requiredFields = ["id", "name", "age", "sex", "enterDate"];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      console.error("missing field");
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    console.error("fields not matching");
    return res.status(400).send(message);
  }
  console.log(`Updating dog post with id \`${req.params.id}\``);
  DogPosts.update({
    id: req.params.id,
    name: req.body.name,
    age: req.body.age,
    author: req.body.author,
    enterDate: req.body.enterDate
  });
  res.status(204).end();
});

router.delete("/:id", (req, res) => {
  DogPosts.delete(req.params.id);
  console.log(`Deleted dog post with id \`${req.params.ID}\``);
  res.status(204).end();
});

module.exports = router;