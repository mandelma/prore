const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/users')

router.get('/', async (req, res) => {
    const users = await User.find({})
    console.log("Users ", users)
    res.send(users)
})

router.post('/', async (req, res) => {
    try {
        const body = req.body
        const saltRounds = 10
        if(body.password === undefined || body.password === ''){
            return res.status(400).json({Error: 'Password field should not to be empty!'}).end()
        }
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            yritys: body.yritys,
            ytunnus: body.ytunnus,
            username: body.username,
            firstName: body.firstName,
            lastName: body.lastName,
            passwordHash
        })

        const existingUser = await User.findOne({username: body.username})

        if (existingUser) {
            res.json({error: "username existing"})
            console.log("Is user existing? " + existingUser)
        } else {
            const savedUser = await user.save()
            console.log('saveduser: ', savedUser)
            res.json(savedUser)
        }




    }catch (exception) {
        console.log('Error: ', exception)
    }

})

module.exports = router