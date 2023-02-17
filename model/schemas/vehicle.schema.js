/** package */

// Use the mongoose package because it has the schemas internally
const mongoose = require("mongoose");

/** Schema creation */
const vehicleSchema = new mongoose.Schema({
    owner_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_owner",
        required: true
    },
    plate:{
        type: "String",
        required: true,
        unique: true
    },
    model:{
        type: "String",
        required: true
    },
    color:{
        type: "String",
        required: true
    },
    type:{
        type: "String",
        required: true
    },
    mileage:{
        type: "Number",
        required: true,
        unique: true
    },
    brand:{
        type: "String",
        required: true,
        unique: true
    },
    capacity:{
        type: "Number",
        required: true,
        unique: true
    }
});

// unique-validation plugin
studentSchema.plugin(validator);
/** schema exportation */
module.exports = vehicleSchema;