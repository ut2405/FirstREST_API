const Data = require("../models/data_schema");
//List all: Data.find
const listAll = (req, res) => {
  Data.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};
//Post
const createNew = (req, res) => {
  console.log("test here!");
  let newdt = new Data(req.body);
  newdt.save((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};
//List one: find by id
const readdt = (req, res) => {
  Data.findById({ _id: req.params.dataId}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};
//List one: find by attribute like : "temp""light""water"...
const readByChildn=(req,res)=>{
  Data.find({childnode_id:req.params.dataChilId},(err,data)=>{
    if(err){
      res.status(500).send(err);
    }
    res.status(200).json(data);
  }).sort({time:-1}).limit(7)
}

const updatedt = (req, res) => {
  Data.findOneAndUpdate(
    { _id: req.params.dataId },
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(data);
    }
  );
};

const deletedt = (req, res) => {
  Data.deleteOne({ _id: req.params.dataId }, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Data successfully deleted" });
  });
};

module.exports = {createNew,readdt,updatedt,deletedt, listAll,readByChildn};