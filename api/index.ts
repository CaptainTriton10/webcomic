"use client";

import Redis from "ioredis";
import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});

// Get all chapters
app.get("/chapters/all", async (_req, res) => {

    console.log("attempting to access /chapters/all\n", res);

    try {
        const keys = await client.keys("*");

        res.json(keys);

    } catch (err) {

        res.json(err);
    }
})

// Get chapters
app.get("/chapters/:key", async (req, res) => {
    const key = req.params.key; // Gets the :key from the url

    try {
        const value = await client.lrange(key, 0, -1); // Gets the full range of the elements

        res.json(value);
        console.log(value);

    } catch (err) {

        res.json(err);
    }

})

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

export default serverless(app);