import express from "express";
import {
  getResources,
  createResource,
  deleteResource,
  updateResource
} from "../controllers/resourceController.js";

const router = express.Router();


// GET all resources
router.get("/get-all-resources", getResources);

// CREATE resource
router.post("/create-resource", createResource);

// DELETE resource
router.delete("/delete-resource/:id", deleteResource);

//update resource
router.put("/update-resource/:id", updateResource);

export default router;