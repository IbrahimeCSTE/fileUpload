const upload = require('./middleWare')
const express = require('express')
const router = express.Router();
const AvatarModel=require("../model/AvatarModel")


router.post('/', upload.single('file'), async (req, res) => {
    console.log(`POST request upload avatar ${req.file.originalname}`);
    console.log(req.file)

    const newAvatar = req.file;

    await AvatarModel.create(newAvatar)
        .then((resolve) => {
            console.log(`STATUS :: Success`);
            res.status(201).send({name: newAvatar.originalname,
                                mimetype: newAvatar.mimetype,
                                buffer: newAvatar.buffer
            });
        })
        .catch((e) => {
        console.error(`STATUS :: Ops.Something went wrong.`);
            res.status(500).json({
                error: true,
                message: e.toString()
            });
    });
});

module.exports = router;