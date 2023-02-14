import { Router } from "express";
import { createUser, editUser, getUser } from "../controllers/user.js";

const router = Router();
// post apis
router.post("/create", createUser);

// get apis
router.get("/get", getUser);

//put apis
router.put("/edit", editUser);
// router.put("/addToFavorites", addToFavorites)

export default router;
