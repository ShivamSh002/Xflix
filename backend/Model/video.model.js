const mongoose = require("mongoose");



const videoSchema =  mongoose.Schema({
videoLink:{
    type: String,
    required: true,
    trim: true,
},
title:{
    type: String,
    required: true,
    trim: true,
},
genre:{
    type: String,
    required: true,
    enum :  ["Education", "Sports", "Movies", "Comedy", "Lifestyle", "All" ],
    trim: true,
},
contentRating:{
    type: String,
    required: true,
    enum : ["Anyone", "7+", "12+", "16+", "18+"],
    trim: true,
},
releaseDate:{
    type: Date,
    required: true,
    trim: true,
},
previewImage:{
    type: String,
    required: true,
    trim: true,
},
votes:{
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    }
},
viewCount: {
    type: Number,
    default: 0
}
},
{
    timestamps: false
})

const Video = mongoose.model("Video", videoSchema);

module.exports = { Video } ;