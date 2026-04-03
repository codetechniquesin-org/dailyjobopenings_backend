import Resource from "../models/resources.js";


// ✅ GET all resources
export const getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ CREATE resource
export const createResource = async (req, res) => {
  try {
    const newResource = new Resource(req.body);
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// ✅ DELETE resource
export const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    await Resource.findByIdAndDelete(id);
    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// used to update resources
export const updateResource = async (req, res) => {
  try {
    const updated = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};