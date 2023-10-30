-- CreateTable
CREATE TABLE `ramal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `setor` VARCHAR(255) NOT NULL,
    `ramal` VARCHAR(4) NOT NULL,
    `ddr` BOOLEAN NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
