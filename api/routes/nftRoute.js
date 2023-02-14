import { Router } from "express";

import {
  // addToFavorites,
  createNft,
  createNftListing,
  deleteNft,
  getAllNfts,
  getNftMetadata,
  getNftsByCollectionAddress,
  getNftsByCollectionSlug,
  getNftsByWalletAddress,
  getVisibleNftsByCollectionAddress,
  transferNft,
} from "../controllers/nft.js";

const router = Router();

// post apis
router.post("/create", createNft);

// get apis
router.get("/getNftsByCollectionSlug", getNftsByCollectionSlug);
router.get("/getAllNfts", getAllNfts);
router.get("/getNftsByCollectionAddress", getNftsByCollectionAddress);
router.get("/getNftMetadata", getNftMetadata);
router.get("/getNftsByWalletAddress", getNftsByWalletAddress);
router.get(
  "/getVisibleNftsByCollectionAddress",
  getVisibleNftsByCollectionAddress
);

//put apis
router.put("/createNftListing", createNftListing);
router.put("/transferNft", transferNft);
// router.put("/addToFavorites", addToFavorites);

//delete apis
router.delete("/deleteNft", deleteNft);

export default router;
