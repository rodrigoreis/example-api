import winston from 'winston';
import { LoggerFormatter } from './loggerFormatter';

const uppercasedLevelFormatter: LoggerFormatter = {
    apply(): winston.Logform.Format {
        return winston.format(info => {
            info.level = info.level.toUpperCase()
            return info;
        })();
    }
};

export default uppercasedLevelFormatter;