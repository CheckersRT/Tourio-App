import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
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

export default mongoose?.models?.Place || mongoose.model("Place", PlaceSchema)