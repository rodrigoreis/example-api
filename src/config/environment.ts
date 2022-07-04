import dotenv, { DotenvConfigOutput } from 'dotenv';

dotenv.config();

const Port = process.env.PORT;

export { Port };