import express from "express";
import prisma from "./prisma/connection";
import userRoutes from "./routes/user.route";
import { errorHandler } from "./errors/errorHandler";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
	console.log("Hello World");
});

app.listen(3000, async () => {
	await prisma.$connect();
	console.log("Server is running on port 3000");
});
