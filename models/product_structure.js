const mongoose = require("mongoose");

let schema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  category: String, // shirt,top
  price: {
    value: Number,
    currencyIsoCode: String
  },
  images: [
    {
      url: String
    }
  ]
});

module.exports = mongoose.model("product_structure", schema);
