import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAddressTable1695893910681 implements MigrationInterface {
  name = 'CreateAddressTable1695893910681';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`addresses\` (
        \`id\` int NOT NULL AUTO_INCREMENT, 
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, 
        \`country\` varchar(255) NOT NULL, 
        \`province\` varchar(255) NOT NULL, 
        \`district\` varchar(255) NOT NULL, 
        \`user_id\` int NOT NULL, PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_16aac8a9f6f9c1dd6bcb75ec023\` 
      FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) 
      ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_16aac8a9f6f9c1dd6bcb75ec023\``,
    );
    await queryRunner.query(`DROP TABLE \`addresses\``);
  }
}
