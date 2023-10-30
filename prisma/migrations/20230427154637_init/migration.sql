-- CreateTable
CREATE TABLE `Noticias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,
    `titulo` VARCHAR(255) NOT NULL,
    `subtitulo` VARCHAR(255) NOT NULL,
    `conteudo` VARCHAR(191) NULL,
    `publicado` BOOLEAN NOT NULL DEFAULT false,
    `autor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
