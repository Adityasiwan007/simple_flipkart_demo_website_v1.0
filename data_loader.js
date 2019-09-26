let mongoose = require("mongoose");
let Product = require("./models/product_structure");
let pro_data = require("./product.json");
async function loadData() {
  await Product.deleteMany({});

  pro_data.products.forEach(async data => {
    let doc = new Product(data);
    await doc.save();
    console.log(`saved video detail ${data.name}`);
  });
}
mongoose.connect(
  "mongodb://localhost:27017/rq",
  { server: { reconnectTries: Number.MAX_VALUE } },
  function(err) {
    if (err) {
      console.log("info", "Couldnt connect to MongoDB:", err);
    } else {
      console.log("info", "Connected to MongoDB");
      loadData();
    }
  }
);
