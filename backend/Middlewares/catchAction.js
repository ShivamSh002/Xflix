const catchAction = (route) => (req,res,next) =>{
 if(route){
    console.log(`${route} route hit`)
    return next()
 }
}

module.exports=catchAction