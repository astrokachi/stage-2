import express from "express";
import prisma from "./prisma/connection";
import userRoutes from "./routes/user.route";
import { errorHandler } from "./errors/errorHandler";

const port = process.env.PORT || 3006;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
	console.log("Hello World");
});

app.listen(port, async () => {
	await prisma.$connect();
	console.log("Server is running on port ", port);
});
