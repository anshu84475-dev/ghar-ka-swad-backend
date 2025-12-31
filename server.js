const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let orders = [];

// website se order
app.post("/orders", (req, res) => {
  const order = req.body;
  orders.push(order);

  res.json({
    success: true,
    message: "Order received",
    order
  });
});

// admin ke liye
app.get("/orders", (req, res) => {
  res.json({
    success: true,
    orders
  });
});

app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});
