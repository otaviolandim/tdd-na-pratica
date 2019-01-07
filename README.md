# tdd-na-pratica

1) Criando o diretório e acessando
    
    $ `mkdir <nome_repositorio> && cd <nome_repositorio>`

2) Inicia o diretório do projeto com um repo git
    
    $ `git init`

3) Add as configurações nome, e-mail, url no arquivo package.json ou coloca o padrado com a opção `-y`
    
    $ `npm set { name, email, url } ou npm init -y`
    $ `npm adduser { user, pass }`

4) Add globalmente o `gitignore` para não ficar adicionando as extensões de arquivo e pasta que não quer versionar

    $ `npm install -g gitignore`
    
    $ `cat .gitignore`

5) Add ESlint para o projeto no arquivo `package.json`

    $ `npm install eslint --save-dev`
    
    $ `./node_modules/.bin/eslint --init`
    
    $ `./node_modules/.bin/eslint src/*.js`

6) Add Husky para o projeto no arquivo `package.json`

    $ `npm install husky --save-dev` scripts: { "prepush": npm run lint }
