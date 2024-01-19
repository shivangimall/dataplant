const mongoose = require("mongoose");

const scheduleSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true,
        trim: true,

    },

    Description:{
        type: String,
        required:true,
        trim:true
    },
    Subject:{
        type:String,
        required:true,
        trim:true
    },


        Frequency:{
            type:String,
            enum:["Daily","Weekly","Monthly"],
            default:"Daily",

        },
        Repeat:{
            type:[],
            //default is daily if not provided
        },
        Time:{
            type:Date,


        }
})

const schedule = new mongoose.model("schedule", scheduleSchema);

module.exports = schedule;

