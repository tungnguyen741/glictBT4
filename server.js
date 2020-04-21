// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const data = [
  { name: "Đi chợ " },
  { name: "Nấu cơm" },
  { name: "Rửa bát" },
  { name: "Học code tại CodersX" }
];
app.set("view engine", "pug");
app.set("views", "./views");
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/todos", (req, res) => {
  var q = req.query.q;
  if (q) {
    var matchWork = data.filter(item => {
      return item.name.toLowerCase().indexOf(q.toLowerCase()) > -1;
    });
    res.render("todos", { works: matchWork });
  }
  res.render("todos", { works: data });
});

app.get("/todos/create", (req, res) => {
  res.render('create');
});

app.post("/todos/create", (req, res) => {
  var todoOb = {};
  todoOb.name = req.body.todo;
  data.push(todoOb);
  res.redirect("/todos");
});
//glitch.com/edit/#!/bai4-express?path=server.js:37:3
https: // listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
