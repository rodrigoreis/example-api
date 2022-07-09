import winston, { Logger } from 'winston';
import { consoleLoggerTransportter } from './transportters';

const logger: Logger = winston.createLogger({
    level: "debug",
    transports: [
        consoleLoggerTransportter.create()
    ],
});

export default logger;