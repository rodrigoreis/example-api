import winston from 'winston';
import { LoggerFormatter } from './loggerFormatter';

const timestampLoggerFormatter: LoggerFormatter = {
    apply(): winston.Logform.Format {
        return winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        });
    }
};

export default timestampLoggerFormatter;