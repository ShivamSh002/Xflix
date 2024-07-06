const { Video } = require("../Model/video.model");


const getAllVideo=async(query)=>{
   
    console.log(query);
    let filter = {};
    let sort = {};

  
    if (query.title) {
        
        filter.title = { $regex: query.title, $options: 'i' };
      
    }
    if (query.genres) {
        const genresArray = query.genres.split(',');
        if (!genresArray.includes("All")) {
            filter.genre = { $in: genresArray };
        }
    }
    if (query.contentRating) {
        const ratingsOrder = ["Anyone", "7+", "12+", "16+", "18+"];
        const minRatingIndex = ratingsOrder.indexOf(decodeURIComponent(query.contentRating));
        
        if (minRatingIndex !== -1) {
            filter.contentRating = { $in: ratingsOrder.slice(minRatingIndex) };
        }
    }
    
    if (query.sortBy === 'viewCount') {
        sort = { viewCount: -1 };
    } else {
        sort = { releaseDate: -1 };
    }

    let data;
    if (Object.keys(filter).length > 0) {
        data = await Video.find(filter).sort(sort);
    } else {
        data = await Video.find({}).sort(sort);
    }
   return data;
}





const postVideo = async(data)=>{
   
    const result = await Video.create(data)
        return  result;
}



const searchById = async (id) => {
    console.log("services", id);
       
            id = id.videoId; 
        
        const result = await Video.findById(id);
        return result;
   
};

const updateVotes = async({videoId,votes})=>{
     console.log(videoId)
        console.log(votes)
      
    let update = {};

    if (votes.vote === "upVote" && votes.change === "increase") {
        update = { $inc: { 'votes.upVotes': 1 } };
    } else if (votes.vote === "upVote" && votes.change === "decrease") {
        update = { $inc: { 'votes.upVotes': -1 } };
    } else if (votes.vote === "downVote" && votes.change === "increase") {
        update = { $inc: { 'votes.downVotes': 1 } };
    } else if (votes.vote === "downVote" && votes.change === "decrease") {
        update = { $inc: { 'votes.downVotes': -1 } };
    } else {
        throw new Error("Invalid vote or change parameter");
    }

    try {
        const data = await Video.findOneAndUpdate({ _id: videoId }, update, { new: true });
        return data;
    } catch (error) {
        console.error("Error updating votes:", error);
        throw error;
    }
    
}

const updateViews = async({videoId}) =>{
console.log(videoId)
const data = await Video.findOneAndUpdate({ _id: videoId }, { $inc: { 'viewCount': 1 } } , { new: true });
return data;
}



const VideoService = {getAllVideo,postVideo,searchById,updateVotes,updateViews}



module.exports = {
    VideoService

}