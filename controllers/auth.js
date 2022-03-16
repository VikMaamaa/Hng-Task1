const User = require("../models/User")
const bcrypt = require("bcrypt")

exports.createUser = async(req,res)=>{
try {
    //generate password
    console.log("working",req.body)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //create new user
    const newUser = await new User({
       name: req.body.name,
       password: hashedPassword,
       age: req.body.age,
       createDate: Date.now()
    }).save()

    //return user details upon creation
    res.status(200).json(newUser)
} catch (error) {
    //catch error
    console.log(error)
    res.status(500).json(error)
}

}




exports.updateMessage = async(req,res)=>{
try {

     //check if user exist in database
     const user = await User.findOne({name: req.body?.name}).exec()
     //if user do not exist return "user not found"
     if(!user) return res.status(404).json("user not found")
 
     //if user exist
    
     //check if there is password
     if(!req.body.password) return res.status(404).json("put in password");

     //check if password is valid
     const validPassword = await bcrypt.compare(req.body?.password, user?.password)
     if(!validPassword) return res.status(400).json("wrong password")

    //check if message exists on request, anything else return "invalid request"
    if(!req.body.message) return res.status(404).json("invalid request, no message");



    //find user and update user message
    const updatedMessage = await User.findOneAndUpdate({name:req.body.name},{message: req.body.message}, {new:true})
    .select('name message -_id').exec()

    res.status(200).json(updatedMessage)
} catch (error) {
    //catch error
    res.status(500).json(error)
}
    
}