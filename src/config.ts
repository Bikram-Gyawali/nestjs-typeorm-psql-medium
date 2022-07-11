import { UserEntity } from './user/user.entity';
import { TagEntity } from './tag/tag.entity';
import { ConnectionOptions } from 'typeorm';
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: 'bikram',
  database: 'mediumclone',
  entities: [TagEntity, UserEntity],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
