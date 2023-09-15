"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let prisma;
if (process.env.NODE_ENV === "production") {
    prisma = new client_1.PrismaClient();
}
else {
    if (!global.__db__) {
        global.__db__ = new client_1.PrismaClient();
    }
    prisma = global.__db__;
}
exports.default = prisma;
