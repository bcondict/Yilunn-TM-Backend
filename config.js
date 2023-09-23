import { createRequire } from "module";
const require = createRequire(import.meta.url);

const config = require('dotenv').config()

export const PORT = 5555;

export const MONGODBURL = process.env.MONGODB_KEY;
