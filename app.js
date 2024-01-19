const express = require("express");
const mongoose = require("mongoose");



const dataPlant = require("./controllers/dataPlant")

const app = express();
app.use(express.json());

const PORT = 8000;

const MONGODB_URI = "mongodb://localhost:27017/schedule"


mongoose.connect(MONGODB_URI);


app.get("/", dataPlant.getAllSchedules);
app.post("/create", dataPlant.createNewSchedule);

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})