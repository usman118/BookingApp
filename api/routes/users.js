import express from "express";

import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Authenticated Hello User");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello You are logged in and Can Update");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL

router.get("/", verifyAdmin, getAllUser);

export default router;
