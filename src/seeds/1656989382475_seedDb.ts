import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1656989382475 implements MigrationInterface {
  name = 'SeedDb1656989382475';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) ('draagons),('coffee),'(nestjs)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
