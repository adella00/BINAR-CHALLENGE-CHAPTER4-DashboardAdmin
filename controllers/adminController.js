const Car = require("../models/carModel");

const carsPage = async (req, res) => {
  try {
    const { name, category } = req.query;
    const condition = {};
    if (name)
      condition.name = {
        $regex: ".*" + name + ".*",
        $options: "i",
      };
    if (category)
      condition.category = {
        $regex: category,
        $options: "i",
      };

    const cars = await Car.find().where(condition);

    res.render("index.ejs", {
      cars,
      message: req.flash("message", ""),
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const createPage = async (req, res) => {
  try {
    res.render("create.ejs");
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const createCar = async (req, res) => {
  try {
    await Car.create(req.body);
    req.flash("message", "Ditambah");
    res.redirect(200, "/dashboard");
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const editPage = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.render("edit.ejs", { car });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const editCar = async (req, res) => {
  try {
    const id = req.params.id;

    await Car.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    req.flash("message", "Diupdate");
    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const removeCar = async (req, res) => {
  try {
    const id = req.params.id;

    await Car.findByIdAndRemove(id);
    req.flash("message", "Dihapus");
    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  carsPage,
  createPage,
  createCar,
  editPage,
  editCar,
  removeCar,
};
