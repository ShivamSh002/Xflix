
const { VideoService } = require("../Service/video.service");

const getAllVideos = async (req, res) => {
    const query = req.query;
    let data =await VideoService.getAllVideo(query)
 
    res.status(200).send({
        'videos': data,
    });
};


const addNewVideo = async(req,res)=>{
   const data = req.body
   const result = await VideoService.postVideo(data)
   res.send(result) 
}

const getVideoById = async(req,res)=>{
    const id = req.params;
    console.log("controller")
    const result = await VideoService.searchById(id)
    res.send(result) 
 }


const updateVotesById = async(req,res)=>{
    const {videoId} = req.params;
    const votes = req.body;
    const result = await VideoService.updateVotes({videoId,votes})
    res.send(result)


}

const updateViewsById = async(req,res)=>{
    const {videoId} = req.params;
    const result = await VideoService.updateViews({videoId})
    res.status(204).send(result);

}

module.exports = {getAllVideos,addNewVideo,getVideoById ,updateVotesById,updateViewsById}