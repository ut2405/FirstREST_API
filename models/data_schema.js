const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data_at = new Schema({
    //data of sensor schema: VOC, Light, temprature, water lever,...
  voc: {
    type: Number,
    required: true
  },
  light: {
    type: Number,
    required: true
  },
  temp:{
    type: Number,
    required:true
  },
  water:{
    type:Number,
    required:true
  },
  fan:{
    type:Number,
    required:true
  },
  hum:{
    type:Number,
    required:true
  },
  childnode_id:{
    type:String,
    required:true
  },
  time:{
    type:Date,
    default:Date.now,
  }
});

module.exports = mongoose.model("data_at", data_at);