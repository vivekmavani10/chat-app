const mongoose = require("mongoose");

const url = `mongodb+srv://vivekmavani10:vivekmavani10@cluster0.ngpye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log("Error>>", error));
