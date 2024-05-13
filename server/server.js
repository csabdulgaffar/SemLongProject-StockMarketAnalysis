const express = require("express");
const cors = require("cors");

const app = express();

require('dotenv').config({ path: '../.env' });
app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 5000;


const mongoose = require("mongoose");


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))