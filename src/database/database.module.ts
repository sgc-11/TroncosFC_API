import { Global, Module } from '@nestjs/common';
import config from 'src/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config.KEY],
            useFactory: async (ConfigService: ConfigType<typeof config>) => {
                const { user, host, dbName, password, port } = ConfigService.postgres;
                return {
                    type: 'postgres',
                    host,
                    port,
                    username: user,
                    password,
                    database: dbName,
                };
            },
        }),
    ],
    providers: [
        {
            provide: 'PG',
            useFactory: async (ConfigService: ConfigType<typeof config>) => {
                const { user, host, dbName, password, port } = ConfigService.postgres;
                const client = new Client({
                    user,
                    host,
                    database: dbName,
                    password,
                    port,
                });
                await client.connect();
                return client;
            },
            inject: [config.KEY],
        },
    ],
    exports: ['PG', TypeOrmModule],
})
export class DatabaseModule {}
