// CORE PACKAGE/MODULE

// THIRD PARTY PACKAGE/MODULE
const express = require("express");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");

// OUR OWN PACKAGE/MODULE

const adminRouter = require("./routes/adminRoutes");

const app = express();

// middleware dari express
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// biar bisa baca static file
app.use(express.static(`${__dirname}/public`));

// setting view engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// flash and express session for notification
app.use(
  session({
    secret: "isskepoobanng",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());

// our middleware example
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

app.use("/", adminRouter);

module.exports = app;
