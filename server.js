const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shoes_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const shoeRoutes = require("./routes/shoe-routes");
app.use(shoeRoutes);

const userRoutes = require("./routes/user-routes");
app.use(userRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
