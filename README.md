<h1 align="center">TDSAPI</h1>
<p align="center">Projeto de Tecnologia em desenvolvimento de sistemas</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#sobre)
   * [Tecnologias](#tecnologias)
   * [Pre Requisitos](#pré-requisitos)
<!--te-->

### Sobre
<div align="center">
	<p>Em desenvolvimento</p>
</div>


### Tecnologias

No projeto será aplicado:
- JavaScript
- TypeScript
- Angular (FrontEnd)
- Node (BackEnd)
- MySQL (Banco de dados)
- Prima (Biblioteca para ORM)
- Express (Framework backend)


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:<br>
- [Git](https://git-scm.com)<br>
- [VSCode](https://code.visualstudio.com/) ou algum outro programa para realizar a edição de código.<br>
- [Node](https://nodejs.org/)<br>

Cria projeto:
``npm init -y``

Instala o Typescript:
``npm add typescript``

Cria o documento de configuração de compilação do Typescript:
``npm tsc --init``

Adiciona o pacote Express:
``npm add express``

Adicionar as tipagens do express:
``npm add @types/express -D``

Adiciona o pacote Bbody-parserody-parser:
``npm add body-parser``

Adiciona o pacote Cors:
``npm add cors``

Adiciona o pacote Mongoose para uso do MongoDB:
``npm add mongoose``

Dependecias que fazem a conversão do typescript pra javascript(tsc), execução(node) e observação do codigo(nodemon):
``npm add ts-node-dev -D``

Adicione o ``"dev":"ts-node-dev --respawn src/server.ts"`` na parte ``scripts`` da pasta ``package.json``.


Para executar o projeto:
``npm dev``
