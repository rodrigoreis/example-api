import dotenv from 'dotenv';

dotenv.config();

export interface Environment {
    getPort(): number;
}

const environment: Environment = {
    getPort(): number {
        if (process.env.PORT === undefined || process.env.PORT === null) {
            throw new Error("Environment PORT could not be 'undefined' or 'null'. Have you created the '.env' file for this?");
        }

        let port: number = parseInt(process.env.PORT as string);

        if (port < 0 || port > 65535) {
            throw new Error("Environment PORT must be between 0 and 65535");
        }

        return port;
    },
};

export default environment;