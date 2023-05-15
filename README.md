# Toolbox Prueba Técnica

Este proyecto tiene como objetivo resolver la prueba técnica de Toolbox, la cual se encuentra disponible en este [enlace](https://tbxnet.applytojob.com/questionnaire/5fb6954bc1c6f/prospect_20230510203136_VO4AIUH7RSTLQ5R2/projob_20230510203136_9FLMWDOF2UX4Z2F3). El proyecto está estructurado como un monorepo, lo que permite ejecutar las dos aplicaciones (Backend y Frontend) con un solo comando.

## Prerequisitos

- Install [**Nodejs**](https://nodejs.org/en/) (Any version)
- Install [**Postman**](https://www.postman.com/)
- Download the repository from [**Github**](https://github.com/elmanza/toolbox-monorepo)

### Installation

- Clone the project

```bash
  git clone https://github.com/elmanza/toolbox-monorepo.git
```

- Install dependencies

```bash
  npm i lerna -D
  npm lerna bootstrap
  npm install
```

- Start the server
  `Es importante esperar que el proyecto de frontend cargue. Puede tomar máximo 30 segundos`

```bash
  npm run start
```

## Backend

El Backend consiste en una API construida con Express y sigue una arquitectura orientada a servicios (SOA) dividida en componentes. En este caso, dado que solo ofrece un servicio, el componente se llama "Files". Este componente consta de un controlador, que gestiona las respuestas a las solicitudes del cliente, y una carpeta llamada "servicio", donde se encuentra toda la lógica de negocio.

El código del Backend utiliza el paradigma de la programación orientada a objetos para la construcción de la lógica de negocio y la creación del servidor.

### Request

- Listar todos los titulos de archivos

```http
  GET http://localhost:4000/files/list
  Payload
    {
        "files": [
            "test1.csv",
            "test2.csv",
            "test3.csv",
            "test18.csv",
            "test4.csv",
            "test5.csv",
            "test6.csv",
            "test9.csv",
            "test15.csv"
        ]
    }
```

- Obtener todos los archivos

```http
  GET http://localhost:4000/files/data
  Payload
    [
        {
            "file": "test1.csv",
            "lines": []
        },
        {
            "file": "test2.csv",
            "lines": [
                {
                    "file": "test2.csv",
                    "text": "ByQPNHRFOQTpctTvRqxoWKwUfwaay",
                    "number": "557123060",
                    "hex": "78fbad6e63af35b0deba1132560285da"
                }
            ]
        },
        {
            "file": "test3.csv",
            "lines": [
                {
                    "file": "test3.csv",
                    "text": "HHdwkCnzJEgUPxWikZ",
                    "number": "399073",
                    "hex": "9c53a193d84aeb71ebd6eeedc4ece54e"
                },
                {
                    "file": "test3.csv",
                    "text": "YTbtKBYbDjmlfNCucgKLFCi",
                    "number": "8487",
                    "hex": "501e74cf2d71df58da7cd492eea22e3b"
                },
                {
                    "file": "test3.csv",
                    "text": "WVlvOld",
                    "number": "37305563",
                    "hex": "ac50f462344ddac8f0dfc087be5c9320"
                }
            ]
        },
        {
            "file": "test18.csv",
            "lines": []
        },
        {
            "file": "test6.csv",
            "lines": []
        },
        {
            "file": "test9.csv",
            "lines": [
                {
                    "file": "test9.csv",
                    "text": "pZcPQvBLmAjktJKHBLdhFhWYgxle",
                    "number": "24513",
                    "hex": "5a7a40495222df26671e9ffb66ea37a3"
                },
                {
                    "file": "test9.csv",
                    "text": "hZkfCbblbCXT",
                    "number": "3",
                    "hex": "4a3ebbb16763c0ba764c04e71e861a82"
                },
                {
                    "file": "test9.csv",
                    "text": "EbiLUSLqcAOWMDllkH",
                    "number": "12390",
                    "hex": "1f40019f2b57deb0ae51e93b6ee139a6"
                },
                {
                    "file": "test9.csv",
                    "text": "b",
                    "number": "7634",
                    "hex": "dbd2d7d1c44363381966aa917b945113"
                },
                {
                    "file": "test9.csv",
                    "text": "QmwWCymErSfjWxesRDrNncYWIbo",
                    "number": "8704233",
                    "hex": "39cf49ad325c294b5c291f3dac4e0482"
                },
                {
                    "file": "test9.csv",
                    "text": "YFn",
                    "number": "03",
                    "hex": "d7baade8f0c4565d9ffa37120165ec18"
                },
                {
                    "file": "test9.csv",
                    "text": "ORPnvcBGOUZyPSoNZnAS",
                    "number": "229987527",
                    "hex": "1e08db52290a51173eb7efe7fce67655"
                },
                {
                    "file": "test9.csv",
                    "text": "pr",
                    "number": "67479259936300117885792351815714",
                    "hex": "f7eced7eacbe9431f0241ded6d5166d0"
                },
                {
                    "file": "test9.csv",
                    "text": "ESQByrspkEAZRAWNq",
                    "number": "463351602",
                    "hex": "6f25cd9a59634a22155d521f086729cd"
                },
                {
                    "file": "test9.csv",
                    "text": "dHLFFMBPTfcINRtTXbmMDbCv",
                    "number": "1959",
                    "hex": "0f5f3bd7aefa8e6c62fec7ebde9e0d9c"
                },
                {
                    "file": "test9.csv",
                    "text": "nVxeVnhtxYXOuAH",
                    "number": "98",
                    "hex": "5f771fc49d159c4a7c3c1110f574fbc2"
                }
            ]
        },
        {
            "file": "test15.csv",
            "lines": []
        }
    ]
```

- Obtener un solo archivo

```http
  GET http://localhost:4000/files/data?fileName=test2.csv
  Payload
    [
        {
            "file": "test2.csv",
            "lines": [
                {
                    "file": "test2.csv",
                    "text": "xqXbZaOxUgoJeYeopssZOQ",
                    "number": "6584",
                    "hex": "9c1eabfd685037741aedf7d431d6cca2"
                }
            ]
        }
    ]
```

### Nota

`Es importante destacar que en el servicio se evalúa que los datos de los archivos no estén vacíos en la construcción del objeto "text", que el campo "numero" sea realmente un número y que el campo "hexadecimal" contenga solo caracteres alfanuméricos.`

## Frontend

El Frontend es un proyecto pequeño que consta de una sola pantalla, pero cada uno de sus componentes está separado.

- Componente Header: Este componente muestra el título de la aplicación y, a su derecha, un select que permite al usuario elegir entre ver todos los archivos o un archivo en específico. Esta selección actualiza el componente "Table".

- Componente Table: Este componente muestra el archivo o los archivos según la opción seleccionada por el usuario en el selector del Header.

Para gestionar el estado global de la aplicación, se utilizó Redux, aunque también se evaluó la posibilidad de utilizar Recoil debido a su facilidad para obtener y establecer datos. Sin embargo, en esta prueba se hizo énfasis en el uso de Redux.

## Pruebas

Al ejecutar el comando `npm run test`, se ejecutarán las pruebas del Backend. Estas pruebas tienen como objetivo evaluar el tipo de dato que se recibe, asegurarse de que los arrays devueltos por los servicios estén construidos según las especificaciones de la prueba y comprobar que, al obtener el archivo "test3.csv", se obtenga un array llamado "lines" con exactamente 3 elementos.

Dado que se sigue la arquitectura SOA, las pruebas se encuentran en la carpeta `services` de cada componente y su nombre termina con la palabra `spec.js`.
