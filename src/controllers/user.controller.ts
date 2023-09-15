import { Request, Response } from "express";
import prisma from "../prisma/connection";

const createUser = async (req: Request, res: Response) => {
	try {
		const { name } = req.body;
		const user = await prisma.user.create({
			data: {
				name: name,
			},
			select: {
				name: true,
				id: true,
			},
		});
		return res.json({ message: "successfully created user", user });
	} catch (error) {
		console.error("Error creating user:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();
		return res.json({ message: "successfully retrieved all users", users });
	} catch (error) {
		console.error("Error retrieving all users:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

const getUser = async (req: Request, res: Response) => {
	try {
		const { name, id } = req.params;
		const user = await prisma.user.findUnique({
			where: {
				id,
				name,
			},
			select: {
				name: true,
				id: true,
			},
		});
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		} else {
			return res.json({ message: "successfully retrieved user", user });
		}
	} catch (error) {
		console.error("Error retrieving user:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

const updateUser = async (req: Request, res: Response) => {
	try {
		const { name, id } = req.params;
		const username = req.body.name;
		const user = await prisma.user.update({
			where: {
				name: username,
				id,
			},
			select: {
				name: true,
				id: true,
			},
			data: {
				name: name,
			},
		});
		return res.json({ message: "successfully updated user name", user });
	} catch (error) {
		console.error("Error updating user:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

const deleteUser = async (req: Request, res: Response) => {
	try {
		const { id, name } = req.params;
		const user = await prisma.user.delete({
			where: {
				id: id,
				name,
			},
			select: {
				name: true,
				id: true,
			},
		});
		return res.json({ message: "successfully deleted user", user });
	} catch (error) {
		console.error("Error deleting user:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

export { createUser, getAllUsers, getUser, updateUser, deleteUser };
