import dotenv from 'dotenv';
import { z, ZodError } from 'zod';

dotenv.config();

const portSchema = z.coerce.number();

try {
    const parsedPort = portSchema.parse(process.env.PORT);
    console.log(parsedPort);
} catch (error) {
    if (error instanceof ZodError) {
        console.log(error.issues[0].message);
    } else {
        console.log("Unexpected Error", error);
    }
}