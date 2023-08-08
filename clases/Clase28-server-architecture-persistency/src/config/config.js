import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "developmnet"}` });

export const { NODE_ENV, PORT, PERSISTENCE } = process.env;
