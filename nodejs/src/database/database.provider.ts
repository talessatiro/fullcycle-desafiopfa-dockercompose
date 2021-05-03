import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../configuration/constants';

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: process.env.DATABASE_HOST || 'db',
            port: Number(process.env.DATABASE_PORT) || 3306,
            username: process.env.DATABASE_USER || 'root',
            password: process.env.DATABASE_PASS || 'root',
            database: process.env.DATABASE_NAME || 'fpadb',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ]
        }),
    },
];