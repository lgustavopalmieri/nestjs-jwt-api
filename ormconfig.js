const env = {
  localhost: {
    type: 'postgres',
    host: '172.19.0.2',
    port: 5432,
    username: 'nestjs-jwt-api-user',
    password: 'nestjs-jwt',
    database: 'nestjs-jwt-api-database',
  },
};

const cli = {
  migrationsDir: 'src/database/migrations',
  entitiesDir: 'src',
};

module.exports = {
  cli,
  entities: ['dist/src/modules/**/*.entity.js'],
  migrations: ['dist/src/database/migrations/**/*.js'],
  migrationsTableName: 'migrations_nestjs-jwt-api',
  synchronize: false,
  ...(env[process.env.NODE_ENV] || {}),
};
