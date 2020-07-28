const User = require("../models/user");


module.exports = {
    
    //get user either all users or a specific user based on id
    getUser : (req,res)=>{
        !req.query.id ? User.find({}).then((user)=>res.send(user))
        .catch((err)=>res.send(err)) : User.findById(req.query.id).then((user)=>res.send(user))
        .catch((err)=>res.send(err))
    },

    // allow to add user
    addUser: (req,res) => {
        User.create({ email: req.body.email, password: req.body.password}).then((user)=>res.send(user))
        .catch((err)=>res.send(err));
    },
    

};