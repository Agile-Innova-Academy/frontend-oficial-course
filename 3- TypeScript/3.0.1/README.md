# Pasos:

instalar desde la powershell

npm install -g typescript

tsc -v

tsc --init  // aquí me aparece el tsconfig.json

ahora bien: ingreso a tsconfig.json
- descomenta la línea de SourceMap
     "sourceMap": true,  
- Indiar cual va hacer la salida general ( todos los archivos de TS van a salir por un solo archivo del js)                             
    "outFile": "./main.js",     

- por último debo ir al module y cambiarlo por amd
   /* Modules */
    "module": "amd", 


luego desde la powerShell ingreso el comando tsc
 ahi aparecen el .map y .js

