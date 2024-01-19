const schedule = require("../models/model")

exports.getAllSchedules = async(req,res)=>{

    try{

        const {title} = req.query;
        if(title)
        {
            console.log(title,"tile from query");
            let data  = await schedule.findOne({Title:title})
            console.log(data,"data by query");
            res.json(data); 
        }
        else{

            let data  = await schedule.find();
            res.status(200).json(data);
        }
    }catch(err){
        res.json(err);
    }
   

//return all shedules from DB


}

exports.getScheduleByTitle = async(req,res)=>{

    try{

    const {title} = req.query;
    console.log(req.query)
    console.log(title);
    let data  = await schedule.find({title:title})
    res.json(data);
    // return a specific schedule based on the Title passed through URL
    }catch(err){
        res.json(err);
    }




}


exports.getScheduleById = async(req,res)=>{


    try{

    const {id}  = req.params;
    console.log(id);

    const data  = await schedule.findById(id);

    console.log(data,"data")

    res.status(200).json(data);
    }catch(err)
    {
        res.json(err);
    }

    // res.send("hello");

}

exports.updateScheduleById = async(req,res)=>{

    try{

const {Title, Description, Subject,Frequency,Repeat,Time} = req.body;

const {id} = req.params;

const data  = await schedule.findById(id);

console.log(data);

const ans = await schedule.findOneAndUpdate({_id:id},{$set:
    {
    Title:Title?Title:data.Title,
    Description:Description?Description:data.Description,
    Subject:Subject?Subject:data.Subject,
    Frequency:Frequency?Frequency:data.Frequency,
    Repeat:Repeat?Repeat:data.Repeat,
    Time:Time?Time:data.Time
   }
    },{new:true});

  
res.json(ans);
    }catch(err)
    {
        res.json(err);
    }

// const updatedTitle = Title?





}


exports.deleteScheduleById = async(req,res)=>{

    try{

    const {id} = req.params;

    const data   = await schedule.findByIdAndDelete(id);

    res.json({message:"Deleted Successfully"})

    }catch(err)
    {
        res.json(err);
    }

   




}


exports.createNewSchedule = async(req,res)=>{

    try{

    const newSchedule = req.body;

    const data  = await schedule.create(newSchedule);

    console.log(data,"data");

    res.json(data);

    }catch(err)
    {
        res.json(err);
    }



}