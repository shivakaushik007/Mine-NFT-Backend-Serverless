import { Router } from "express";

import {
  createAdmin,
  editAdmin,
  getAdminInfo,
  getAllStoreInfo,
  getStoreInfo,
  getStoreInfoByEmail,
  getStoreInfoByName,
  getStoreInfoByUrlStoreName,
} from "../controllers/admin.js";

const router = Router();

// post apis
router.post("/createAdmin", createAdmin);

//put apis
router.put("/editAdmin", editAdmin);

//get apis
router.get("/getAdminInfo", getAdminInfo);
router.get("/getStoreInfo", getStoreInfo);
router.get("/getStoreInfoByName", getStoreInfoByName);
router.get("/getStoreInfoByUrlStoreName", getStoreInfoByUrlStoreName);
router.get("/getStoreInfoByEmail", getStoreInfoByEmail);

router.get("/getAllStoreInfo", getAllStoreInfo);

export default router;
