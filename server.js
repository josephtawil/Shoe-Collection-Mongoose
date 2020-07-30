const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting to mongodb database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shoes_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

//connecting to shoes routes
const shoeRoutes = require("./routes/shoe-routes");
const userRoutes = require("./routes/user-routes");

app.use(shoeRoutes, userRoutes);

//connecting to user routes
const userRoutes = require("./routes/user-routes");
app.use(userRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
