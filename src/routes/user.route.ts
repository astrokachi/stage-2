import express from "express";
const router = express.Router();
import {
	createUser,
	getAllUsers,
	getUser,
	updateUser,
	deleteUser,
} from "../controllers/user.controller";

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/:name").get(getUser).put(updateUser).delete(deleteUser);

export default router;
