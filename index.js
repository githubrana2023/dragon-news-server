const news = require("./data/news.json");
const categories = require("./data/categories.json");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("welcome to our news website");
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:newsId", (req, res) => {
  const newsId = req.params.newsId;
  const singleNews = news.find((eachNews) => eachNews._id === newsId);

  res.send(singleNews);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:categoryId", (req, res) => {
  const categoryId = parseInt(req.params.categoryId)


  if (categoryId === 0) {
    res.send(news);
  } else {
    const newsCategory = news.filter(
      (singleNews) => parseInt(singleNews.category_id) === categoryId
    );

    res.send(newsCategory);
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
