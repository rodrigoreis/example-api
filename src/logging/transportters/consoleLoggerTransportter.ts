import winston from 'winston';
import * as Transport from 'winston-transport';
import { colorizeLoggerFormatter, messageLoggerFormatter, timestampLoggerFormatter, uppercasedLevelLoggerFormatter } from '../formatters';
import { LoggerTransportter } from './loggerTransportter'

const consoleLoggerTransportter: LoggerTransportter = {
    create(): Transport {
        return new winston.transports.Console({
            format: winston.format.combine(
                uppercasedLevelLoggerFormatter.apply(),
                timestampLoggerFormatter.apply(),
                colorizeLoggerFormatter.apply(),
                messageLoggerFormatter.apply()
            )
        });
    }
};

export default consoleLoggerTransportter;