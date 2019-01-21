import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';

import { join } from 'path';
const parentDir = join(__dirname, '..');

const connectionOpts: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'ec2-107-22-162-8.compute-1.amazonaws.com',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'cymyvlgwxhslqc',
  password: process.env.DB_PASSWORD || '6bd1917d4cedd88937be3812f3495ee452aaafe7a3f6dfa77c9cd1c98b4ae7b7',
  database: process.env.DB_NAME || 'd5d5rmet15kpv0',
  entities: [
    `${parentDir}/**/*.entity.ts`,
  ],
  synchronize: true,
};

const connection:Promise<Connection> = createConnection(connectionOpts);

export default connection;
