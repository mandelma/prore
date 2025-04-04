const uploadRouter = require('express').Router()
const mongoose = require('mongoose')
const { awsUpload, s3, DeleteObjectCommand, ListObjectsV2Command, getSignedUrl }  = require('../config/uploadConfig')
const Upload = require('../models/awsUploads')

uploadRouter.get('/images/:userId', async (req, res) => {
    const images = await Upload.find({ userId: req.params.userId });
    res.json(images);
});

uploadRouter.post('/upload', awsUpload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    try {
        console.log("Server test " + req.file.location);
        const newImage = new Upload({
            userId: "12345", // Optional: Store which user uploaded it
            imageUrl: req.file.location,
            key: req.file.key, // Store file key for deletion
            // title: req.body.title // Optional: Custom title
        });

        await newImage.save();
        res.json({ message: 'Image uploaded successfully', id: newImage._id,  imageUrl: req.file.location });
    } catch (err) {
        console.log("Error: " + err.message);
    }
});

module.exports = uploadRouter;