const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const Mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(Mongo_URL);
}

main()
  .then(() => {
    console.log("Connected DB successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6778030bd2f37e73666b824f",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
