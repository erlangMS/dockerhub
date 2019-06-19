# Servidor de autenticação OAuth2 com ErlangMS

<br>

## Pré-requisitos com links para instalação

- *Docker* para usar a ferramenta *docker* e *docker-compose* **(https://docs.docker.com/install/)**

    * Windows  - Baixar o setup do link acima e instalar

    * Linux
    ```bash
         sudo apt-get install -y docker.io
         sudo apt-get install -y docker-compose
         sudo systemctl restart docker
    ```



- *git* para usar a ferramenta *git*  **(https://git-scm.com/)**

    * Windows  - Baixar o setup do link acima e instalar

    * Linux
         ```bash
           sudo apt-get install -y git
        ```


> No Windows, a performance do Docker é bastante prejudicada se o Antivírus está ativo.



## O que é o projeto erlangms_oauth2_server ?

A proposta deste projeto é criar uma imagem docker com uma instância do 
barramento agindo como um servidor de autenticação OAuth2.

> O barramento autentica por padrão no banco de desenvolvimento mas pode ser alterado no arquivo *odbc.ini*


Este ambiente possui:
 

* Uma instância do *ErlangMS* como servidor OAuth2 rodando na porta 2301

* Os arquivos de configuração e os *datasources* configurados para acessar o banco de desenvolvimento

* A lista de *data loaders* definidos no emsbus.conf para carregar dados de usuários do banco de dados para o barramento

* As bibliotecas ODBC para acesso ao banco de dados


---

*Link oficial do projeto: https://github.com/erlangMS*

