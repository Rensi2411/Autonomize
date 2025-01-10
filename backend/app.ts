import express from 'express';

const app = express();

// Middleware setup, routes, etc.
app.use(express.json());

export default app;
