## iniciar node e instalar paquetes

iniciar node `npm init --yes`</br>
instalar archivo .json `npm install`</br>
express `npm install express`</br>
cors `npm install cors`</br>
postgresql-https://node-postgres.com `npm install pg`

jwt-simple `npm install jwt-simple`</br>
dayjs `npm install dayjs`</br>
bcryptjs `npm i bcryptjs`</br>
uniqid `npm install uniqid`</br>
express-fileupload `npm install --save express-fileupload`</br>
cloudinary `npm install cloudinary`</br>
socket.io `npm install socket.io`</br>

para desintalar un paquete `npm uninstall express-fileupload`</br>
para instalar una version `npm install express@2.21.2`

git apoyo https://github.com/AEMLoviji/node-rest-api

## correr app

||||||||||||||||||||||</br>
node src/index

# modo local

http://localhost:4200/api/buscar

# modo remoto HEROKU

0 descargamos heroku desde pagina oficial</br>
1 instalamos heroku</br>
2 ver version de heroku `heroku -v`</br>
||||||||||||||||||||||</br>
1 ir a package.json poner en script `"start": "node src/index"`</br>
2 en el comando poner `npm start` para ejecutar la app
otra opcion</br>
1 1 ir a package.json poner en script `"correr": "node src/index"`</br>
2 en el comando poner `npm run correr` para ejecutar la app
continuamos</br>
3 crear un archivo `.gitignore`</br>
4 colocamos `node_modules/` para ignorar paquetes de node</br>
5 `git init`</br>
6 `git status`</br>
7 `git add .`</br>
8 `git status`</br>
9 `git commit -m "primer commit"`</br>
11 ya esta listo con esto, ahora toca subir a heroku</br>
12 en la terminal git `heroku login` para loguearse</br>
13 `heroku git:remote -a sage-prueba`</br>
14 `git push heroku master`</br>
15 `heroku open`

## modo remoto git

git commit -m "first commit"</br>
git remote add origin https://github.com/macc001/sage-back-js.git</br>
git push -u origin master

# tag

agregar tag git tag v1.0.0</br>
publicar tag git push --tags</br>
git remote add origin https://github.com/macc001/erp-back-tsc.git
