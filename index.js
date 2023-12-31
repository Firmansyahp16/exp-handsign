const express = require("express");
const client = require("./config");

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.json({
    message: "Index API"
  });
});