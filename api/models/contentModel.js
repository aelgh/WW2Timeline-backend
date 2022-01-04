"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContentSchema = new Schema({
  name: {
    type: String,
    required: "Kindley enter the name of the content"
  },
  Created_Date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ["pending", "ongoing", "completed"]
    }],
    default: ["pending"]
  }
});

module.exports = mongoose.model("Content", ContentSchema)