import winston from 'winston';
import { LoggerFormatter } from './loggerFormatter';

const messageLoggerFormatter: LoggerFormatter = {
    apply(): winston.Logform.Format {
        return winston.format.printf(
            info => `[${info.level}] ${info.timestamp} ${info.message}`
        );
    }
};

export default messageLoggerFormatter;