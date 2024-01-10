import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  location: { 
    type: String, 
    required: true 
},
name:{ type: String, required: true },
img:{ type: String },
name:{ type: String, required: true },
description:{ type: String, required: true },
mapUrl:{ type: String  },



});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
