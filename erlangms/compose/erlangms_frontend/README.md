# Ambiente de desenvolvimento para frontends Angular com ErlangMS

<br>

## Pré-requisitos com links para instalação

- *Docker* para usar a ferramenta *docker* e *docker-compose* **(https://docs.docker.com/install/)**

    * Windows  - Baixar o setup do link acima e instalar

    * Linux
         <code>
           sudo apt-get install -y docker.io
           sudo apt-get install -y docker-compose
           sudo systemctl restart docker
        </code>


- *NPM* para usar a aferramenta *npm*  **(https://www.npmjs.com/get-npm)**

    * Windows  - Baixar o setup do link acima e instalar

    * Linux
         <code>
           sudo apt-get install -y npm
        </code>
 

- *git* para usar a ferramenta *git*  **(https://git-scm.com/)**

    * Windows  - Baixar o setup do link acima e instalar

    * Linux
         <code>
           sudo apt-get install -y git
        </code>


> No Windows, a performance do Docker é bastante prejudicada se o Antivírus está ativo.



## O que é o projeto erlangms_frontend ?

A proposta deste projeto é criar um ambiente de desenvolvimento com o barramento ErlangmMS através da criação de uma imagem docker com uma instância do 
barramento agindo como um servidor HTTP para deployment das aplicações Angular que estão na subpasta *projects* consumindo serviços REST em desenvservicos.unb.br.



## 5 passos simples para colocar em uso


<b> 1) Fazer git clone do projeto do ambiente erlangms_frontend</b>


- Windows
<code>
   cd \
   mkdir Desenvolvimento
   cd Desenvolvimento
   git clone http://www.servicosssi.unb.br/ssi/erlangms_frontend
</code>

> No Windows, é importante colocar dentro da pasta C:\Desenvolvimento para que o Antivírus não prejudique a performance.

- Linux
<code>
   git clone http://www.servicosssi.unb.br/ssi/erlangms_frontend
</code>

<b>2) Antes de usar o ambiente, é preciso fazer *build* para criar a imagem Docker</b>


- Windows
<code>
   cd erlangms_frontend
   docker-compose build 
</code>

- Linux
<code>
   cd erlangms_frontend
   sudo docker-compose build 
</code>


<b>3) Depois, baixe os projetos Angular que deseja trabalhar dentro da pasta **erlangms_frontend/projects** com *git clone* de acordo com o exemplo abaixo</b>


- Windows ou Linux
<code>
   cd projects
   git clone http://www.servicosssi.unb.br/ssi/sae_frontend 
</code>

> Lembre-se que a pasta **projects** é a pasta onde devem ficar o código fonte dos projetos Angular. Repita o *passo 2* para cada projeto que deseja trabalhar.


<b>4) Compile os projetos baixados em **erlangms_frontend/projects** com o compilador *npm*</b>


- Windows ou Linux
<code>
    cd sae_frontend
    npm install
    npm run build
</code>

> Lembre-se que a compilação dos projetos Angular do CPD/UnB gera a pasta dist.


<b>5) Por último, subir a instância da imagem **erlangms_frontend** criada no *passo 2* </b>. 


- Windows
<code>
    cd erlangms_frontend
    docker-compose up
</code>

- Linux
<code>
    cd erlangms_frontend
    sudo docker-compose up
</code>


> Aguarde alguns segundos para carregar a instância do barramento e os data loaders e vá no browser e digite 127.0.0.1:2301/nome_do_seu_projeto.




## Notas

<br>

Este ambiente possui:
 

* Uma instância do *ErlangMS* como servidor HTTP para *deploy* dos *apps*

* Os arquivos de configuração e os *datasources* configurados para acessar o banco de desenvolvimento

* A lista de *data loaders* definidos para autenticação *oauth2*

* As bibliotecas ODBC para acesso ao banco de dados


<br>

Este ambiente não possui:

* A IDE ou qualquer editor de texto

* O compilador *npm*

* O *backend*


---

*Link oficial do projeto: https://github.com/erlangMS*

**(`︿´)   ErlangMS Team**
