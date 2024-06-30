const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://chinonsoemmanuel221:<password>@cluster1.mjuceut.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
