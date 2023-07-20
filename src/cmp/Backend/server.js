var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

var Joi = require("joi");

// Backend
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
jwt_secret = "fg5f1454g5f4v3s4f43s3hvs4hvf14sds";

app.listen( 5000, (err) => {
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
  const { username, sec_token } = req.body;
  var user = await userInfo.findOne({ username, sec_token });
  if (user) {
    next();
  } else {
    res.json({ status: 403 });
  }
});

app.post("/api/getUserInfo", async (req, res) => {
  const { sec_token } = req.body;
  var user = await userInfo.findOne({ sec_token });
  console.log("here", user);
  return res.json({ data: user });
});

var expenseInfo = mongoose.model("expenseInfo");
app.post("/api/getExpenseDetail", async (req, res) => {
  const { username } = req.body;
  var expense = await expenseInfo.find({ username });
  return res.json({ data: expense });
});

//Demo APIs
app.get("/getuserInfoDemo", async (req, res) => {
  var user = await userInfo.find({});
  return res.json({ data: user });
});

app.get("/getExpenseDetailDemo", async (req, res) => {
  var expense = await expenseInfo.find({}).sort({ date: -1 }).exec();
  return res.json({ data: expense });
});

app.post("/addExpenseDemo", async (req, res) => {
  const { username, date, time, month, title, amount, mode, category, remark } =
    req.body;

  var newExpense = await expenseInfo.create({
    date,
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

app.get("/getuserInfoDemo", async (req, res) => {
  var user = await userInfo.find({});
  return res.json({ data: user });
});

app.get("/getExpenseDetailDemo", async (req, res) => {
  var expense = await expenseInfo.find({});
  return res.json({ data: expense });
});

app.post("/api/addExpense", async (req, res) => {
  const { username, date, month, title, amount, mode, category, remark } =
    req.body;

  // const schema = {
  //   username: Joi.string().min(4).required(),
  //   month: Joi.string().min(2).required(),
  //   title: Joi.string().min(4).required(),
  //   amount: Joi.number().min(2).required(),
  //   mode: Joi.string().min(2).required(),
  //   category: Joi.string().min(2).required(),
  // };
  // const joiResult = Joi.valid(req.body, schema);
  // console.log(joiResult);
  // if (joiResult.error) {
  //   res.status(400).send(joiResult.error);
  //   return;
  // }

  var newExpense = await expenseInfo.create({
    date,
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
      return res.send({ status: "Login Success", data: user.sec_token });
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
  const { username, password, email } = req.body;
  var user = await userInfo.findOne({ username });
  if (user) {
    return res.json({ status: "User Exists" });
  }
  var token = jwt.sign({ username }, jwt_secret);
  var hashedpassword = await bcrypt.hash(password, 15);
  var newUser = await userInfo.create({
    username,
    password: hashedpassword,
    sec_token: token,
    email,
  });
  res.json({ status: "User Created" });
});

app.put("/createUserDemo", async (req, res) => {
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

app.put("/api/updateUser", (req, res) => {
  const username = req.body.username;
  const { cashAvailable, balanceAvailable, avgExpenseLimit } = req.body;
  console.log(cashAvailable, balanceAvailable, avgExpenseLimit);
  // const updatedProfile = {
  //   cashAvailable: cashAvailable,
  //   balanceAvailable: balanceAvailable,
  //   avgExpenseLimit: avgExpenseLimit,
  // };
  // console.log("put api ");
  userInfo
    .findOneAndUpdate(
      { username },
      {
        cashAvailable: cashAvailable,
        balanceAvailable: balanceAvailable,
        avgExpenseLimit: avgExpenseLimit,
      }
    )
    .then(() => res.send("User profile updated successfully."))
    .catch((err) => {
      console.error("Failed to update user profile:", err);
      res.status(500).send("An error occurred while updating user profile.");
    });
});

// app.put("/updateUserDemo", (req, res) => {
//   const username = req.body.username;
//   const updatedProfile = req.body;
//   console.log(updatedProfile + username);

//   userInfo
//     .findOneAndUpdate({ username }, updatedProfile)
//     .then(() => res.send("User profile updated successfully."))
//     .catch((err) => {
//       console.error("Failed to update user profile:", err);
//       res.status(500).send("An error occurred while updating user profile.");
//     });
// });

app.post("/api/getFilteredTransaction", async (req, res) => {
  const { modeFilter, categoryFilter } = req.body;
  var filteredTransaction = await expenseInfo.find({
    category: categoryFilter,
    mode: modeFilter,
  });
});
