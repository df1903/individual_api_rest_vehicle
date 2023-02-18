/** package */

// Use the mongoose package because it has the schemas internally
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const vehicleSchema = new mongoose.Schema({
    owner:{
        type: 'String',
        // ref: "coll_owner",
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
        required: true
    },
    brand:{
        type: "String",
        required: true
    },
    capacity:{
        type: "Number",
        required: true
    }
});

// unique-validation plugin
vehicleSchema.plugin(validator);
/** schema exportation */
module.exports = vehicleSchema;