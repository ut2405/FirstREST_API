const express = require("express");
const bodyParser = require("body-parser");
const dtController = require("./controllers/dt_controller");

const Router = require('express').Router;
const router = Router();

// db instance connection  **********
require("./config/db");

// API ENDPOINTS

router.get('/', dtController.listAll);
router.post('/', dtController.createNew);
router.get('/:dataId', dtController.readdt);
router.get('/child/:dataChilId',dtController.readByChildn)
router.put('/:dataId', dtController.updatedt);
router.delete('/:dataId', dtController.deletedt);

/*app
  .route("/data_at2")
  .get(dtController.listAll)
  .post(dtController.createNew);

app
  .route("/data_at/:dataId")
  .get(dtController.readdt)
  .put(dtController.updatedt)
  .delete(dtController.deletedt); */

/*app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/

module.exports = router;