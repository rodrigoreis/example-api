import winston, { Logger, addColors } from 'winston';

addColors({
    info: 'cyan',
    warn: 'yellow',
    error: 'bold red',
    debug: 'green',
});

const putInfoToupperCase: winston.Logform.FormatWrap = winston.format(info => {
    info.level = info.level.toUpperCase()
    return info;
});

const customFormat = winston.format.combine(
    putInfoToupperCase(),
    winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.colorize({
        all: true
    }),
    winston.format.printf(
        info => `[${info.level}] ${info.timestamp} ${info.message}`
    )
);

const logger: Logger = winston.createLogger({
    level: "debug",
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(customFormat)
        })
    ],
});

export default logger;