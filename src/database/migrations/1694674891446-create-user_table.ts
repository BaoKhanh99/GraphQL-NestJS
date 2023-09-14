import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1694674891446 implements MigrationInterface {
  name = 'CreateUserTable1694674891446';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (
        \`id\` int NOT NULL AUTO_INCREMENT, 
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
        \`deleted_at\` datetime(6) NULL, 
        \`name\` varchar(255) NOT NULL, 
        \`user_name\` varchar(255) NOT NULL, 
        \`password\` varchar(255) NOT NULL, 
        UNIQUE INDEX \`IDX_074a1f262efaca6aba16f7ed92\` (\`user_name\`), 
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_074a1f262efaca6aba16f7ed92\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
