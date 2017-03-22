# Web service usando express.js y bookshelf.js

##Motivación

Este proyecto es un ejemplo de web service de acceso a una base de datos utilizando
los framework node.js, express.js, el ORM bookshelf.js y una base de datos en MySQL.

Para motivos de este ejemplo la DBMS MySQL deberá estar instalado en el equipo de 
cómputo donde se desea ejecutar la aplicación. Para poder realizar de forma correcta
la conexión a la base de datos, se deberá modificar los parámetros dentro del archivo
__bookshelf.js__ que se encuentra en la raíz del proyecto.

El script de construcción de la base de datos forma parte del proyecto y se encuentra
en el archivo __bdTest.sql__, este se deberá ejecutar a fin de asegurar la existencia
del esquema, tablas e información con la cual la aplicación estará trabajando.

##Instalación

Para ejecutar la aplicacion se debe clonar el repositorio a una ubicación de tu equipo 
de cómputo usando el siguiente comando desde la terminal.
El directorio donde se realizará la copia del repositorio, sera la ubicación en que se
 encuentre actualmente.
```
> git clone https://github.com/Y0uhe1m1t0/CrezeTest.git
```

Al finalizar la obtención del repositorio, se deberá obtener los módulos en los cuales
tiene dependencias la aplicación, ejecutando el siguiente comando.
```
> npm install
```

##Ejecución

Para iniciar la ejecución del programa se debe ejecutar el comando

```
$ node app.js
```
La consola mostrará un mensaje como el siguiente:

```
$ Examen Creze escuchando a través del puerto 3000
```
El servicio web se encuentra en ejecución. 

## API de los servicios disponibles.

Para realizar pruebas se puede utilizar un navegador web o preferentemente una 
aplicación como Postman la cual permite enviar solicitudes modificando el método
HTTP y especificando los parámetros de la solicitud.

###Listado de dispensarios

Al envíar una solicitud GET hacia la siguiente URL.

```
> http://localhost:3000/dispensarios
```
Obtendremos como resultado un objeto que contiene una colección de los registros
almacenados en la tabla _dispensario_ dentro de la base de datos.

###Listado de mangueras de un dispensario

Realizando una solicitud GET a la siguiente URL

```
> http://localhost:3000/dispensarios/__id__
```
donde __id__ es un número entero el cual corresponde al identificador asociado
a un dispensario en particular.
Como resultado obtendremos arreglo con las mangueras asociadas a ese dispensario.

###Datos de una manguera

Al hacer una soliciud GET hacia la siguiente URL

```
> http://localhost:3000/dispensarios/__id__/__lado__
```
donde __id__ es un número entero el cual corresponde al identificador asociado
a un dispensario en particular y __lado__ es un caractér que corresponde a un 
identificador asociado a la manguera dentro de un dispensario.
Como resultado obtendremos un objeto JSON con la descripción de la manguera
solicitada.

###Inserción de un nuevo dispensario

Si realizamos una solicitud de tipo POST hacia la siguiente URL 
```
> http://localhost:3000/dispensarios
```
y anexando los parámetros:

*marca - Nombre del fabricante del dispensario _Máximo 50 caracteres_
*modelo - Nombre del modelo de dispensario _Máximo 50 caracteres_
*serie - Número de serie del dispensario _Máximo 50 caracteres_
*aprobacion - Número del oficio que autoriza el uso del modelo de dispensario en el mercado mexicano _Máximo 25 caracteres_

en formato __form-urlencoded__, iniciamos la operación de inserción de un
registro dentro de la tabla _dispensario_ en nuestra base de datos.

Como resultado podemos obtener dos mensajes descriptivos.
__*Se ha insertado un nuevo registro.*__
O
__*No se logró insertar el registro.*__

###Actualización de un dispensario

Al realizar una petición de tipo PUT a la URL

```
> http://localhost:3000/dispensarios/__id__
```
y anexando uno o más de los siguientes parámetros:

*marca - Nombre del fabricante del dispensario _Máximo 50 caracteres_
*modelo - Nombre del modelo de dispensario _Máximo 50 caracteres_
*serie - Número de serie del dispensario _Máximo 50 caracteres_
*aprobacion - Número del oficio que autoriza el uso del modelo de dispensario en el mercado mexicano _Máximo 25 caracteres_

en formato __form-urlencoded__, iniciamos la operación de actualización para el
registro dentro de la tabla _dispensario_ al cual corresponde el identificador
__id__.

Como resultado podemos obtener dos mensajes descriptivos.
__*Se ha actualizado el registro.*__
O
__*No se logró actualizar el registro.*__

###Borrado de un dispensario

Al enviar una petición de tipo DELETE a la URL

```
> http://localhost:3000/dispensarios/__id__
```

solicitamos la operación de eliminación del registro dentro de la tabla 
_dispensario_ al cual corresponde el identificador __id__.

Como resultado podemos obtener dos mensajes descriptivos.
__*Se eliminó el registro de la base de datos.*__
O
__*No se logró eliminar el registro.*__