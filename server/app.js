const express = require("express");
router = express.Router();
const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/raghu_DB";
const url = "mongodb+srv://CoffebiteUser:<password>@coffebitescluster.cld9c.mongodb.net/sai?retryWrites=true&w=majority"
const app = express();
var cors = require('cors')
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const Router = require("./routes");

app.use("/", Router);

app.listen(4000, () => {
  console.log("Server started");
});
