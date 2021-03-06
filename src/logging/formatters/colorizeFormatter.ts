import winston, { addColors } from 'winston';
import { LoggerFormatter } from './loggerFormatter';

addColors({
    info: 'cyan',
    warn: 'yellow',
    error: 'bold red',
    debug: 'green',
});

const colorizeLoggerFormatter: LoggerFormatter = {
    apply(): winston.Logform.Format {
        return winston.format.colorize({
            all: true
        });
    }
};

export default colorizeLoggerFormatter;