import winston from 'winston';

export interface LoggerFormatter {
    apply(): winston.Logform.Format
};