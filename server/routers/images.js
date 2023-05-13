const imageRouter = require('express').Router()
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const Image = require('../models/image')
const Recipient = require('../models/recipients')
const fs = require("fs");



// Set Storage Engine
const storage = multer.diskStorage({
    //destination: './public/uploads/',
    destination: (req, file, cb) => {
        cb (null, '../src/assets/client')
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

imageRouter.post('/', upload.single('file'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    console.log('filename:', req.file.filename)
    //res.json({file: req.file})

    const img = new Image({
        _id: new mongoose.Types.ObjectId(),
        name: req.file.filename,  //req.body.name,
        image: url + '/src/assets/client/' + req.file.filename
    })




    img.save().then(result => {

        res.status(201).json({
            message: 'Img added successfully',
            imgCreated: {
                _id: result._id,
                image: result.image
            }
        })
    }).catch (err => {
        console.log(err)
            res.status(500).json({
                error: err
            })
    })
})

imageRouter.put('/:id', upload.single('file'), async (req, res) => {
    const body = req.body
    const url = req.protocol + '://' + req.get('host')
    try {
        const newImage = {
            name: req.file.filename,
            image: url + '/src/assets/client/' + req.file.filename
        }

        const updatedImage = await Image.findByIdAndUpdate(
            req.params.id, newImage, { new: true }
        )

        res.status(200).json(updatedImage.toJSON())
    }catch (err) {
        console.log('error: ', err)
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
        // fs.unlink('../src/assets/client/' + req.body.filename, (err) => {
        //     // if (err) {
        //     //     res.status(500).send({
        //     //         message: "Could not delete the file from folder. " + err,
        //     //     });
        //     // }
        //     //
        //     // res.status(200).send({
        //     //     message: "File is deleted from folder.",
        //     // });
        // });
        //console.log("Filename test: " + image.name)
        console.log("Recipient id:: " + req.params.recipientId)
        fs.unlinkSync('../src/assets/client/' + image.name);

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