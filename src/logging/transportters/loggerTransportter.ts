import * as Transport from 'winston-transport';

export interface LoggerTransportter {
    create(): Transport
};