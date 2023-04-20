import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import getConfig from './config';

const config = getConfig();

const DATABASE_SETUP = [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
    ...(config.database as TypeOrmModuleOptions),
    entities: ['dist/src/modules/**/entities/**.entity{.ts,.js}'],
    migrations: ['dist/src/database/migrations/**/*{.ts,.js}'],
    migrationsTableName: 'migrations_nestjs-jwt-api',
    migrationsRun: true,
    synchronize: false,
  }),
];

@Module({
  imports: [...DATABASE_SETUP, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
