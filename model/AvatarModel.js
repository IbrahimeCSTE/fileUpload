const mongoose = require('mongoose');

const avatarschema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
});

AvatarModel = mongoose.model("Avatar", avatarschema);
module.exports=AvatarModel
