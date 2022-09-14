import config from './ormconfig';

const ormseedconfig = {
  ...config,
  migrations: [__dirname + 'src/seeds/*.ts'],
  cli: {
    migrarionDir: 'src/seeds',
  },
};

export default ormseedconfig;
