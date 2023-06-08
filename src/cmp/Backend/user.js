const string = require("joi/lib/types/string");
const { default: mongoose } = require("mongoose");
// User Schema
//just to check

//againg
var userInfoSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    sec_token: String,
    avgExpenseLimit: String,
    cashAvailable: String,
    balanceAvailable: String,
    avatarPath: String,
    email: String,
  },
  {
    collection: "userInfo",
  }
);

var userInfo = mongoose.model("userInfo", userInfoSchema);
//expense Schema
var expenseSchema = mongoose.Schema(
  {
    username: String,
    date: String,
    time: String,
    title: String,
    amount: Number,
    mode: String,
    category: String,
    remark: String,
  },
  {
    collection: "expenseInfo",
  }
);

var expenseInfo = mongoose.model("expenseInfo", expenseSchema);
