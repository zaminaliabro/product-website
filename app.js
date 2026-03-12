const express = require("express");
const connectDB = require("./db");
const { PORT } = require("./config");
const authRoutes = require("./router/auth");
const userAuthRoutes = require("./router/userauth");

const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", userAuthRoutes); // 👈 ye add karo

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
