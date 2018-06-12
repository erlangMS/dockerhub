# Proxy Ldap v3 com ErlangMS

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



## O que é o projeto erlangms_ldap_server ?

A proposta deste projeto é criar uma imagem docker com uma instância do 
barramento agindo como um servidor LDAP v3 para autenticar usuários na base de dados do sistema de controle de acesso (SCA).

> O barramento autentica por padrão no banco de desenvolvimento mas pode ser alterado no arquivo *odbc.ini*



## 3 passos simples para colocar em uso


<b> 1) Fazer git clone do projeto do erlangms_ldap_server</b>


- Windows
```bash
   cd \
   cd Desenvolvimento
   git clone http://www.servicosssi.unb.br/ssi/erlangms_ldap_server
```

> No Windows, é importante colocar dentro da pasta C:\Desenvolvimento para que o Antivírus não prejudique a performance.

- Linux
```bash
   cd /var/opt
   git clone http://www.servicosssi.unb.br/ssi/erlangms_ldap_server
```


<b>2) Antes de usar o servidor, é preciso fazer *build* para criar a imagem Docker</b>


- Windows
```bash
   cd erlangms_ldap_server
   docker-compose build 
```

- Linux
```bash
   cd erlangms_frontend
   sudo docker-compose build 
```


<b>3) Por último, subir o servidor **erlangms_ldap_server** </b>


- Windows
```bash
    cd erlangms_ldap_server
    docker-compose up
```

- Linux
```bash
    cd erlangms_ldap_server
    sudo docker-compose up
```


<b>3) Aguarde alguns segundos e digite o seguinte comando para testar uma requisição LDAP</b>


- Windows - Usar uma ferramente gráfica de administração LDAP de sua preferência

- Linux
```bash
    ldapsearch -xLLL -h 127.0.0.1:2389 -b dc=unb,dc=br -D cn=admin,dc=unb,dc=br uid=geral -w 123456
```

> Para usar comando ldapsearch no Linux é preciso instalar o pacote do cliente OpenLDAP


## Notas

<br>

Este ambiente possui:
 

* Uma instância do *ErlangMS* como servidor LDAP para *autenticação* de usuário no SCA

* Os arquivos de configuração e os *datasources* configurados para acessar o banco de desenvolvimento (desenvbd3.ad-fub.unb.br)

* A lista de *data loaders* definidos no emsbus.conf para carregar dados de usuários do banco de dados para o barramento

* As bibliotecas ODBC para acesso ao banco de dados


## Perguntas e respostas

<b> 1) Como fazer com que o barramento acesse outro banco de dados para buscar os dados de usuários para autenticação</b>

Para isso, primeiro edite o arquivo odbc.ini e altere o ip do banco de dados que será utilizado para conexão. Depois, edite o arquivo config/emsbus.conf e
na seção *datasources*, altere o usuário/senha de conexão do banco de dados.


<b> 2) Como eu posso alterar o usuário ou senha do usuário de administração do servidor LDAP.</b>

Para isso, edite o arquivo config/emsbus.cof e altere o parâmetro *ldap_admin* e *ldap_password_admin*.



---

*Link oficial do projeto: https://github.com/erlangMS*

**(`︿´)   ErlangMS Team**
