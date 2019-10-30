## iniciar node e instalar paquetes

iniciar node `npm init --yes`
instalar archivo .json `npm install`
express `npm install express`
cors `npm install cors`
postgresql-https://node-postgres.com `npm install pg`

jwt-simple `npm install jwt-simple`
dayjs `npm install dayjs`
bcryptjs `npm i bcryptjs`
uniqid `npm install uniqid`
express-fileupload `npm install --save express-fileupload`
cloudinary `npm install cloudinary`
socket.io `npm install socket.io`

para desintalar un paquete `npm uninstall express-fileupload`
para instalar una version `npm install express@2.21.2`

git apoyo https://github.com/AEMLoviji/node-rest-api

## correr app

||||||||||||||||||||||
node src/index

# modo local

http://localhost:4200/api/buscar

# modo remoto

0 descargamos heroku desde pagina oficial
1 instalamos heroku
2 ver version de heroku `heroku -v`
||||||||||||||||||||||
1 ir a package.json poner en script `"start": "node src/index"`
2 en el comando poner `npm start` para ejecutar la app
otra opcion
1 1 ir a package.json poner en script `"correr": "node src/index"`
2 en el comando poner `npm run correr` para ejecutar la app
continuamos
3 crear un archivo `.gitignore`
4 colocamos `node_modules/` para ignorar paquetes de node
5 `git init`
6 `git status`
7 `git add .`
8 `git status`
9 `git commit -m "primer commit"`
11 ya esta listo con esto, ahora toca subir a heroku
12 en la terminal git `heroku login` para loguearse
13 `heroku git:remote -a sage-back`
14 `git push heroku master`
15 `heroku open`
