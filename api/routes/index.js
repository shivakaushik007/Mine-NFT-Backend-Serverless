import { Router } from "express";

import adminRouter from "./adminRoute.js";
// import collectionRoute from "./collectionRoute.js";
import nftRouter from "./nftRoute.js";
import userRoute from "./userRoute.js";

const router = Router();
router.use("/user", userRoute);
// router.use("/collection", collectionRoute);
router.use("/nft", nftRouter);
router.use("/admin", adminRouter);

export default router;
