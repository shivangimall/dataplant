const schedule = require("../models/model")

exports.getAllSchedules = (req,res)=>{
   

//return all shedules from DB
res.send("Hello");

}

exports.getScheduleByTitle = (req,res)=>{




}


exports.getScheduleById = (req,res)=>{



}

exports.updateScheduleById = (req,res)=>{





}


exports.deleteScheduleById = (req,res)=>{





}


exports.createNewSchedule = async(req,res)=>{

    const newSchedule = req.body;

    const data  = await schedule.create(newSchedule);

    console.log(data,"data");

    res.json(data);



}