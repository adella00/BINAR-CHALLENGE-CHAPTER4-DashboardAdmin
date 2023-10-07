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
    imageUrl: {
      type: String,
      default: "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
