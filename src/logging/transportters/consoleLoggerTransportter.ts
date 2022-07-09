import winston from 'winston';
import * as Transport from 'winston-transport';
import { colorizeFormatter, messageFormatter, timestampFormatter, uppercasedLevelFormatter } from '../formatters';
import { LoggerTransportter } from './loggerTransportter'

const consoleLoggerTransportter: LoggerTransportter = {
    create(): Transport {
        return new winston.transports.Console({
            format: winston.format.combine(
                uppercasedLevelFormatter.apply(),
                timestampFormatter.apply(),
                colorizeFormatter.apply(),
                messageFormatter.apply()
            )
        });
    }
};

export default consoleLoggerTransportter;