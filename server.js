const express = require("express");

const app = express();

const PORT = 3100;

app.get("/api/books", (req, res) => {
  const books = [
    {
      id: 1,
      title: "12 Rules for Life: An Antidote to Chaos",
      author: "Jordan Peterson"
    },
    {
      id: 2,
      title: "Discipline Equals Freedom: Field Manual",
      author: "Jocko Willink"
    },
    {
      id: 3,
      title: "Crush It!: Why NOW Is the Time to Cash In on Your Passion",
      author: "Gary Vaynerchuk"
    }
  ];
  res.json(books);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));