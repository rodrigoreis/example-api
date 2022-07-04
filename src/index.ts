import express, { Express, ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { Port } from './config/environment';
import logger from './logging/logger';

const app: Express = express();

app.listen(Port, () => {
    logger.info(`⚡️[server]: Server is running at https://localhost:${Port}`)
});