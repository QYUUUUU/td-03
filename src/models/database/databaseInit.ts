import { Database } from "bun:sqlite";

// Connect to the SQLite database
export const db = new Database('./src/data/parking.sqlite', { create: true });