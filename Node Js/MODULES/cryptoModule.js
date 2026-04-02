const crypto = require("crypto");


const randomVal = crypto.randomBytes(8).toString("hex");

const hashedVal = crypto.createHash("sha256").update("Rohit@5518").digest("hex");


console.table({randomVal , hashedVal});