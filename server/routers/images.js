const imageRouter = require('express').Router()
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const SharpMulter = require('sharp-multer')
const Image = require('../models/image')
const User = require('../models/users')
const ChatUser = require('../models/chatUsers')
const Recipient = require('../models/recipients')
const fs = require("fs");



// Set Storage Engine
const storage = multer.diskStorage({
    //destination: './public/uploads/',
    destination: (req, file, cb) => {
        cb (null, './uploads')
    },
    filename: (req, file, cb) => {
        //const fileName = file.originalname.toLowerCase().split(' ').join('-')
        //cb(null, file.fieldname + '-' + Date.now() +
        //path.extname(file.originalname))
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }

})

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb)
    }
}) //.single('file')

// optional function to return new File Name (need to learn how i'ts working)
const newFilenameFunction = (og_filename, options) => {
    const newname =
        og_filename.split(".").slice(0, -1).join(".") +
        Date.now();
    return newname;
};



// const bookingStorage = SharpMulter({
//     destination: (req, file, cb) => {
//         cb (null, './uploads')
//     },
//     imageOptions: {
//         fileFormat: 'png',
//         quality: 80,
//         resize: {width: 300, height: 300}
//     },
// })
//
// const bookingUpload = multer({
//     storage: bookingStorage,
//     limits: { fileSize: 1000000},
//     fileFilter: ( req, file, cb ) => {
//         checkFileType(file, cb)
//     },
//
// })

const bookingStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, './uploads')
    },
    filename: (req, file, cb) => {
        //const fileName = file.originalname.toLowerCase().split(' ').join('-')
        //cb(null, file.fieldname + '-' + Date.now() +
        //path.extname(file.originalname))
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
    // imageOptions: {
    //     fileFormat: 'png',
    //     quality: 80,
    //     resize: {width: 300, height: 300}
    // },
})

const bookingUpload = multer({
    storage: bookingStorage,
    limits: { fileSize: 1000000},
    fileFilter: ( req, file, cb ) => {
        checkFileType(file, cb)
    },

})

const avatarStorage = SharpMulter({
    destination: (req, file, cb) => {
        cb (null, './uploads/avatar')
    },


    imageOptions: {
        fileFormat: 'png',
        quality: 80,
        resize: {width: 200, height: 200}
    },

    //filename: newFilenameFunction
})



const avatarUpload = multer({
    storage: avatarStorage,
    limits: { fileSize: 1000000},
    fileFilter: ( req, file, cb ) => {
        checkFileType(file, cb)
    },

})



// Check File Type
const checkFileType = (file, cb) => {
    // Allowed extencion
    const filetypes = /jpeg|jpg|png|gif/
    // Check ext
    const extname = filetypes.test(path.extname( file.originalname).toLowerCase() )
    // Check mime
    const mimetype = filetypes.test(file.mimetype)

    if (mimetype && extname) {
        return cb(null, true)
    }else {
        cb('Error: Images Only!')
    }
}

imageRouter.post('/', bookingUpload.single('file'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    console.log('filename:', req.file.filename)
    //res.json({file: req.file})

    const img = new Image({
        _id: new mongoose.Types.ObjectId(),
        name: req.file.filename,  //req.body.name,
        image: url + '/uploads/' + req.file.filename
    })

    img.save().then(result => {

        res.status(201).json({
            message: 'Img added successfully',
            imgCreated: {
                _id: result._id,
                image: result.image,
                name: result.name
            }
        })
    }).catch (err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})
//
imageRouter.put('/:id', bookingUpload.single('file'), async (req, res) => {
    const body = req.body
    const url = req.protocol + '://' + req.get('host');
    const image = await Image.findOne({_id: req.params.id});
    try {
        const newImage = {
            name: req.file.filename,
            image: url + '/uploads/' + req.file.filename
        }

        const updatedImage = await Image.findByIdAndUpdate(
            req.params.id, newImage, { new: true }
        )
        fs.unlinkSync('./uploads/' + image.name);
        res.status(200).json(updatedImage.toJSON())
    }catch (err) {
        console.log('error: ', err)
    }
})


imageRouter.post('/:id/avatar', avatarUpload.single('file'), async (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const user = await User.findById(req.params.id);
    //const chatuser = await ChatUser.findOne({username: user.username})

    //const cu = await ChatUser.

    try {

        const img = {
            name: req.file.filename,  //req.body.name,
            image: url + '/uploads/avatar/' + req.file.filename
        }

        //fs.unlinkSync("file" + '-' + Date.now() + '-' + req.file.filename)

        user.avatar = img;
        // chatuser.avatar = req.file.filename;
        // await chatuser.save();
        await ChatUser.updateMany({ username: user.username }, { $set: { avatar: req.file.filename } });
        await user.save();

        //res.send("User avatar is added successfully!")
        res.send("User avatar is added successfully!")
    } catch (err) {
        console.log("Error to load avatar! " + err);
        //res.status(500).send({Error: err.message});
        res.send({error: err.message});
    }

})

imageRouter.post('/:userId/update_avatar', avatarUpload.single('file'), async (req, res) => {
    const url = req.protocol + '://' + req.get('host')
    const user = await User.findById(req.params.userId);
    //const body = req.body;
    let name = "";
    try {
        if (user.avatar) {
            name = user.avatar.name;

        }

        console.log("User avatar name " + name);
        const newImg = {
            name: req.file.filename,  //req.body.name,
            image: url + '/uploads/avatar/' + req.file.filename
        }

        user.avatar = newImg;

        fs.unlinkSync('./uploads/avatar/' + name);
        await user.save();


        //res.send("User avatar is updated successfully!")
    } catch (err) {
        //res.status(500).send("Error to update avatar");
        res.send({error: err.message});
    }
})


imageRouter.get('/', async (req, res) => {
    const images = await Image.find({})
    res.send(images)

})

imageRouter.delete('/:id/:recipientId', async (req, res) => {
    //const fs = require("fs");
    const image = await Image.findOne({_id: req.params.id});
    try {

        console.log("Recipient id:: " + req.params.recipientId)
        fs.unlinkSync('./uploads/' + image.name);

        await Recipient.findOneAndUpdate(
            { _id: req.params.recipientId },
            { $pull: { image: req.params.id } }
        )
        await Image.findByIdAndDelete(req.params.id)
        res.status(204).end()
    } catch (err) {
        res.status(500).send({
            message: "No file deleted!!" + err.message
        })
        console.log("Error: " + err.message)
    }


})

module.exports = imageRouter