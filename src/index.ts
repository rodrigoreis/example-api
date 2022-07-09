import express from 'express';
import { Environment } from './config';
import { Logger } from './logging';

const app: express.Express = express();
const port: number = Environment.getPort();

app.listen(port, () => {
    Logger.info(`⚡️[server]: Server is running at :::`, port)
});