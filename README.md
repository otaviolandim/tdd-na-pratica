Criando o diretório e acessando
    $ mkdir `<nome_repositorio>` && cd `<nome_repositorio>`

Inicia o diretório do projeto com um repo git
    $ git init

Add as configurações nome, e-mail, url no arquivo package.json ou coloca o padrado com a opção `-y`
    $ npm set { name, email, url } ou npm init -y
    $ npm adduser { user, pass }

Add globalmente o `gitignore` para não ficar adicionando as extensões de arquivo e pasta que não quer versionar
    $ npm install -g gitignore
    $ cat .gitignore

Add ESlint para o projeto no arquivo `package.json`
    $ npm install eslint --save-dev
    $ ./node_modules/.bin/eslint --init
    $ ./node_modules/.bin/eslint src/*.js

Add Husky para o projeto no arquivo `package.json`
    $ npm install husky --save-dev
        scripts: { "prepush": npm run lint } //para evitar de fazer `git push` subindo algo fora do padrao.
