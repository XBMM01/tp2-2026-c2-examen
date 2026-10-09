import express from "express";
import { getAllListings, getListingId, getListingsByType } from "../controllers/listingsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", authMiddleware, getAllListings);
router.get("/property-type/:type", authMiddleware, getListingsByType);
router.get("/:id", getListingId);

//api/listings/property-type/:type

export default router;
