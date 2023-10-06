const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama cars harus ada"],
      unique: true,
    },
    category: {
      type: String,
      default: "small",
    },
    price: {
      type: Number,
      required: [true, "Harga nya harus ada"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
