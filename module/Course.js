const mongoose = require("mongoose")
const schema = new mongoose.Schema({
CourseId:{
    type : String,
    require : true,
    unique :true
},
CourseName:{
    type : String,
    require :true
},

CourseFee:{
    type : String,
    require :true
},
CourseDuration:{
    type:String,
    require:true,
}

});
const Document = mongoose.model("course" ,schema);
module.exports = Document;