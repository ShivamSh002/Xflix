const express = require("express");
const { mongoose } = require("mongoose");
const config = require("./config/config");
const appRouter = require("./routes/video.route")
const cors = require("cors");
const { errorHandler } = require("./Middlewares/error");


const app = express();

app.use(express.json());

app.use(cors());
console.log(config.port);

app.use("/v1",appRouter)

app.use(errorHandler)

mongoose.connect(`mongodb+srv://xflixdb:xflix123@xflix.9zyzike.mongodb.net/xflix`)
.then(()=>{
    console.log("connected to db");
    app.listen(config.port, ()=>{
        console.log("server started");
    })
})
.catch((err)=>{
    console.log(err);
})




