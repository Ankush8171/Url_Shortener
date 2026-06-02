
const express = require("express")
const router = express.Router();
const {handleGenerateNewShortURL,findShortId,handleGetAnalytics} = require("../controller/url")

router.post('/',handleGenerateNewShortURL);
router.get("/:shortId", findShortId)
router.get("/analytics/:shortId",handleGetAnalytics);

module.exports = router;
