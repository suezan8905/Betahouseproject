import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Property from "../models/property.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    // Destructure property details from request body
    const { title, description, price, location, images, bedrooms, bathrooms } =
      req.body;

    // Create a new property object
    const property = new Property({
      title,
      description,
      price,
      location,
      images: images || [], // ensure it is an array
      bedrooms: bedrooms || 0,
      bathrooms: bathrooms || 0,
      createdBy: req.user.id, // The logged in user who created this property
    });

    // Save property to database
    const savedProperty = await property.save();

    // Send back the saved property as response
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

//Get all properties
router.get("/", async (req, res) => {
  try {
    // Fetch all properties and also populate the "createdBy" user info
    const properties = await Property.find().populate(
      "createdBy",
      "firstName lastName email"
    );

    // Send back all properties
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Find property by ID
router.get("/:id", async (req, res) => {
  try {
    const propertyId = req.params.id.trim(); //Trim any spaces/Newlines

    // Check if ID is valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(propertyId)) {
      return res.status(400).json({ message: "Invalid property ID" });
    }

    // Find property by ID and populate creator info
    const property = await Property.findById(propertyId).populate(
      "createdBy",
      "firstName lastName email"
    );

      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }

    // Send back the property
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// UPDATE a property (only the owner can update)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const propertyId = req.params.id.trim(); // Trim spaces

    if (!mongoose.Types.ObjectId.isValid(propertyId)) {
      return res.status(400).json({ message: "Invalid property ID" });
    }

    // Find the property
    const property = await Property.findById(propertyId);
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    // Only the user who created it can update
    if (property.createdBy.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Not authorized to update this property" });
    }

    // Update the property fields
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      req.body,
      { new: true }
    );

    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// DELETE a property (only the owner can delete)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const propertyId = req.params.id.trim(); // Trim spaces

    if (!mongoose.Types.ObjectId.isValid(propertyId)) {
      return res.status(400).json({ message: "Invalid property ID" });
    }

    // Find the property
    const property = await Property.findById(propertyId);
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    // Only the user who created it can delete
    if (property.createdBy.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Not authorized to delete this property" });
    }

    // Delete property from DB
    await property.deleteOne();
    res.json({ message: "Property removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;
