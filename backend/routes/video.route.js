const catchAction = require("../Middlewares/catchAction");
const validate = require("../Middlewares/validate");
const { Video } = require("../Model/video.model");
const { getAllVideos,addNewVideo,getVideoById ,updateVotesById,updateViewsById } = require("../controller/videos.controller");

const router = require("express").Router();


router.get("/videos",catchAction("get-videos"),getAllVideos);

router.post("/videos",catchAction("post-videos"),validate(Video),addNewVideo )

router.get("/videos/:videoId",catchAction("get-/videos/:videoId"),getVideoById )

router.patch("/videos/:videoId/votes",catchAction("patch-/videos/:videoId/votes"),updateVotesById)


router.patch("/videos/:videoId/views",catchAction("patch-/videos/:videoId/views"),updateViewsById)


module.exports=router