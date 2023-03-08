const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

// app.get("/", (req, res) => {
//   res.send("welcome home");
// });
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Serveur is listening on port  ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
