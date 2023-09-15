"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const connection_1 = __importDefault(require("../prisma/connection"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const user = yield connection_1.default.user.create({
            data: {
                name: name,
            },
            select: {
                name: true,
                id: true,
            },
        });
        return res.json({ message: "successfully created user", user });
    }
    catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield connection_1.default.user.findMany();
        return res.json({ message: "successfully retrieved all users", users });
    }
    catch (error) {
        console.error("Error retrieving all users:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield connection_1.default.user.findUnique({
            where: {
                id: id,
            },
            select: {
                name: true,
                id: true,
            },
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        else {
            return res.json({ message: "successfully retrieved user", user });
        }
    }
    catch (error) {
        console.error("Error retrieving user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = yield connection_1.default.user.update({
            where: {
                id: id,
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
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield connection_1.default.user.delete({
            where: {
                id: id,
            },
            select: {
                name: true,
                id: true,
            },
        });
        return res.json({ message: "successfully deleted user", user });
    }
    catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.deleteUser = deleteUser;
