import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // property title
    description: { type: String }, // description of property
    price: { type: Number, required: true }, // price
    location: { type: String, required: true }, // e.g. Lagos, Abuja
    bedrooms: { type: Number, default: 0 }, // The numb of bedrooms
    bathrooms: { type: Number, default: 0 }, // The numb of bathrooms
    images: [{ type: String }], // image 

    
    createdBy: {
      // link property to user
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
