/** package */

// Use the mongoose package because it has the schemas internally
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const ownerSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    },
    lastname:{
        type: "String",
        required: true
    },
    document:{
        type: "String",
        required: true,
        unique: true
    },
    phone:{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        required: true,
        unique: true
    }
});

// unique-validation plugin
ownerSchema.plugin(validator);
/** schema exportation */
module.exports = ownerSchema;