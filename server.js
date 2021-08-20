const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

var port = process.env.PORT || 8000;
const url = "mongodb+srv://EagleLamle:eaglelamle@cluster0.nwthj.mongodb.net/workout?retryWrites=true&w=majority";


const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose
.connect(url, {
useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: false
})
.then(() => console.log('Database connected.'))
.catch(err => console.log(err));

// routes
app.use(require("./routes/api.js"));

app.listen(port, () => {
console.log(`App running on port ${port}!`);
});

