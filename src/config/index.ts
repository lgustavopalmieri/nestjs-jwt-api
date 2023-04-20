interface IConfig {
  database: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}
const localhost = {
  database: {
    type: 'postgres',
    host: '172.19.0.2',
    port: 5432,
    username: 'nestjs-jwt-api-user',
    password: 'nestjs-jwt',
    database: 'nestjs-jwt-api-database',
  },
};
export default (): IConfig => {
  const env = { localhost };
  return env[process.env.NODE_ENV] || env.localhost;
};
