-- CreateTable
CREATE TABLE `Telefone` (
    `id` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `id_pessoa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trabalho` (
    `id` VARCHAR(191) NOT NULL,
    `tema` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoa` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL,
    `pontuacao` INTEGER NOT NULL,
    `imagemCaminho` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrabalhoPessoa` (
    `id` VARCHAR(191) NOT NULL,
    `id_trabalhoOrientador` VARCHAR(191) NOT NULL,
    `id_trabalhoAluno` VARCHAR(191) NOT NULL,
    `id_trabalhoCoorientador` VARCHAR(191) NULL,
    `id_trabalho` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `RA` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `id_pessoa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permissao` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cargo` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_cargo` (
    `id` VARCHAR(191) NOT NULL,
    `id_usuario` VARCHAR(191) NOT NULL,
    `id_cargo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cargo_permissao` (
    `id` VARCHAR(191) NOT NULL,
    `id_cargo` VARCHAR(191) NOT NULL,
    `id_permissao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refresh_token` (
    `id` VARCHAR(191) NOT NULL,
    `tempoDeExpiracao` INTEGER NOT NULL,
    `id_usuario` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `refresh_token_id_usuario_key`(`id_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrabalhoPessoa` ADD CONSTRAINT `TrabalhoPessoa_id_trabalhoOrientador_fkey` FOREIGN KEY (`id_trabalhoOrientador`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrabalhoPessoa` ADD CONSTRAINT `TrabalhoPessoa_id_trabalhoAluno_fkey` FOREIGN KEY (`id_trabalhoAluno`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrabalhoPessoa` ADD CONSTRAINT `TrabalhoPessoa_id_trabalhoCoorientador_fkey` FOREIGN KEY (`id_trabalhoCoorientador`) REFERENCES `Pessoa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrabalhoPessoa` ADD CONSTRAINT `TrabalhoPessoa_id_trabalho_fkey` FOREIGN KEY (`id_trabalho`) REFERENCES `trabalho`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuario_cargo` ADD CONSTRAINT `usuario_cargo_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuario_cargo` ADD CONSTRAINT `usuario_cargo_id_cargo_fkey` FOREIGN KEY (`id_cargo`) REFERENCES `Cargo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cargo_permissao` ADD CONSTRAINT `cargo_permissao_id_cargo_fkey` FOREIGN KEY (`id_cargo`) REFERENCES `Cargo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cargo_permissao` ADD CONSTRAINT `cargo_permissao_id_permissao_fkey` FOREIGN KEY (`id_permissao`) REFERENCES `Permissao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `refresh_token` ADD CONSTRAINT `refresh_token_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
