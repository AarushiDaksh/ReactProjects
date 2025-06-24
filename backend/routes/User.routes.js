const express = require("express");
const { verifyUser } = require("../utlis/verifyUser");
const { changeUsername , deleteUser} = require("../controllers/User.controller");

const router = express.Router();

router.patch("/editusername", verifyUser, changeUsername);
router.delete("/delete", verifyUser, deleteUser);

module.exports = router;
