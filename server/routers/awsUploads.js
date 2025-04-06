const uploadRouter = require('express').Router()
const mongoose = require('mongoose')
const {
    awsClientUpload,
    awsProUpload,
    awsChatUpload,
    awsAvatarUpload,
    s3,
    DeleteObjectCommand,
    ListObjectsV2Command,
    getSignedUrl }  = require('../config/uploadConfig')
const Upload = require('../models/awsUploads')
const {GetObjectCommand} = require("@aws-sdk/client-s3");

uploadRouter.get('/images/:userId', async (req, res) => {
    const images = await Upload.find({ userId: req.params.userId });
    res.json(images);
});
// Post client image
uploadRouter.post('/upload-client', awsClientUpload.single('file'), async (req, res) => {
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
        res.json({ message: 'Image uploaded successfully', id: newImage._id, key: req.file.key,  imageUrl: req.file.location });
    } catch (err) {
        console.log("Error: " + err.message);
    }
});

// 📌 Get Signed URLs for Images
uploadRouter.get('/images', async (req, res) => {
    try {
        const command = new ListObjectsV2Command({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Prefix: 'uploads/',
        });

        const data = await s3.send(command);
        const images = await Promise.all(
            data.Contents.map(async (item) => ({
                key: item.Key,
                url: await getSignedUrl(s3, new GetObjectCommand({ Bucket: process.env.AWS_S3_BUCKET_NAME, Key: item.Key }), { expiresIn: 3600 }),
            }))
        );

        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images', details: error.message });
    }
});

// 📌 Update  client Image (Delete Old & Upload New)
uploadRouter.put('/update_client/:id/*', awsClientUpload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const id = req.params.id;
    const key = req.params[0];
    try {
        // Delete old image
        const deleteCommand = new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: key,
        });
        await s3.send(deleteCommand);

        // console.log("HHHHH " + key + " --- " + req.file.key);
        // console.log("ID " + id);

        // Update DB record with new image URL and key
        const updatedImage = await Upload.findOneAndUpdate(
            { _id: id },
            { imageUrl: req.file.location, key: req.file.key },
            { new: true }
        );

        res.json({ message: 'Image updated', key: updatedImage.key,  imageUrl: updatedImage.imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Error updating image', details: error.message });
    }
});







// 📌 Delete Image
uploadRouter.delete('/delete-image/:id/*', async (req, res) => {
    const id = req.params.id;
    const key = req.params[0]
    console.log("Deleting key: " + req.params.key);
    try {
        const command = new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: key,
        });

        await Upload.findOneAndDelete({ _id: id });
        res.status(204).end();

        await s3.send(command);

        //res.json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting image', details: error.message });
    }
});







// Upload provider image

uploadRouter.post('/upload-pro', awsProUpload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    try {
        console.log("Server test " + req.file.location);
        const newImage = new Upload({
            //userId: "12345", // Optional: Store which user uploaded it
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

// 📌 Update provider Image (Delete Old & Upload New)
uploadRouter.put('/update_pro/:id/*', awsProUpload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const id = req.params.id;
    const key = req.params[0];
    try {
        // Delete old image
        const deleteCommand = new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: key,
        });
        await s3.send(deleteCommand);

        // console.log("HHHHH " + key + " --- " + req.file.key);
        // console.log("ID " + id);

        // Update DB record with new image URL and key
        const updatedImage = await Upload.findOneAndUpdate(
            { _id: id },
            { imageUrl: req.file.location, key: req.file.key },
            { new: true }
        );

        res.json({ message: 'Image updated', key: updatedImage.key,  imageUrl: updatedImage.imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Error updating image', details: error.message });
    }
});




uploadRouter.post('/upload', awsChatUpload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    try {
        console.log("Server test " + req.file.location);
        const newImage = new Upload({
            //userId: "12345", // Optional: Store which user uploaded it
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

uploadRouter.post('/upload', awsAvatarUpload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    try {
        console.log("Server test " + req.file.location);
        const newImage = new Upload({
            //userId: "12345", // Optional: Store which user uploaded it
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