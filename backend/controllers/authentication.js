let auth = require('express').Router()
let db = require('../models')
let bcrypt = require('bcryptjs')

let { User } = db

auth.post('/signup', async (req,res)=>{
    let {password, ...rest} = req.body;
    const newUser = await User.create({
        ...rest,
        password: await bcrypt.hash(password, 10)
    })
    res.json(newUser)
})

auth.post('/login/:username', async (req,res)=>{
    console.log(req.body)
    let user = await User.findOne({
        where: {username: req.body.username}
    })
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({
            message: `Incorrect username or password.`
        })
    } else {
        res.status(200).json({user})
    }
})

module.exports = auth