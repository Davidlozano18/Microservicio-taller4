import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'thelast23',
    database: 'service',
    synchronize: true,
    entities: ['dist/**/**/*.entity.js'],

}