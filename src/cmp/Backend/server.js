var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
jwt_secret = "fg5f1454g5f4v3s4f43s3hvs4hvf14sds";

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started");
  }
});

const mongoUrl = "mongodb://127.0.0.1:27017/expense-tracker";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
  });

require("./user");
var userInfo = mongoose.model("userInfo");

app.use("/api", async (req, res, next) => {
  const { username, token } = req.body;
  var user = await userInfo.findOne({ username, sec_token: token });
  if (user) {
    next();
  } else {
    res.json({ status: 403 });
  }
});

app.get("/api/getUserInfo", async (req, res) => {
  var user = await userInfo.find({});
  return res.json({ data: user });
});

var expenseInfo = mongoose.model("expenseInfo");
app.get("/api/getExpenseDetail", async (req, res) => {
  var expense = await expenseInfo.find({});
  return res.json({ data: expense });
});

app.post("/api/addExpense", async (req, res) => {
  const { username, time, month, title, amount, mode, category, remark } =
    req.body;
  var newExpense = await expenseInfo.create({
    time,
    month,
    username,
    title,
    amount,
    mode,
    category,
    remark,
  });
  res.json({ status: "New Expense Added" });
});

app.post("/loginUser", async (req, res) => {
  const { username, password } = req.body;
  var user = await userInfo.findOne({ username });
  // console.log(user);
  // console.log(bcrypt.compare(password, user.password));
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      console.log("Login Success");
      return res.json({ status: "Login Success" });
    } else {
      console.log("Invalid Credentials");
      res.json({ status: "Invalid Credentials" });
    }
  } else {
    console.log("User Not Found");
    res.json({ status: "Invalid Credentials" });
  }
});

app.post("/createUser", async (req, res) => {
  const { username, password, cashAvailable, balanceAvailable, avtarPath } =
    req.body;
  var user = await userInfo.findOne({ username });
  if (user) {
    res.json({ status: "User Exists" });
  }
  var token = jwt.sign({ username }, jwt_secret);
  var hashedpassword = await bcrypt.hash(password, 15);
  var newUser = await userInfo.create({
    username,
    password: hashedpassword,
    sec_token: token,
    cashAvailable,
    balanceAvailable,
    avtarPath,
  });
  res.json({ status: "User Created" });
});
