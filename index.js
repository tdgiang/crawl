var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

var request = require("request");
var cheerio = require("cheerio");

app.get("/", function (req, res) {
  request("https://vnexpress.net/", (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      $ = cheerio.load(body);
      var ds = $(body).find("a.thumb.thumb-5x3");

      ds.each((i, e) => {
        console.log("------------------");
        console.log(e["attribs"]["title"]);
      });

      res.render("trangchu", { html: body });
    }
  });
});
