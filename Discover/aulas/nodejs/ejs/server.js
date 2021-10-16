const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil",
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML",
    },
    {
      title: "M",
      message: "uito fácil de usar",
    },
    {
      title: "A",
      message: "juda a não repetir código",
    },
    {
      title: "I",
      message: "nstall ejs",
    },
    {
      title: "S",
      message: "intaxe simples",
    },
  ];

  const subtitle =
    "Uma linguagem de modelagem para criação de páginas HTML usando JS";

  response.render("pages/index", {
    qualitys: items,
    subtitle,
  });
});

app.get("/about", (request, response) => {
  response.render("pages/about");
});

app.listen(3333);
