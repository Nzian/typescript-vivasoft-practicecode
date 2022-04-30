# typescript-vivasoft-practicecode
I follow a typescript tutorial of vivasoftltd.com and create basic setup for typescript practice. I am not add it into html file or show those in browser console instead  node console.

## Vivasoftltd bootcamp url

- [url](https://www.vivasoftltd.com/typescript-bootcamp)

## Some useful command that you might be need to run this code

- Requirements :
    *OS: linux or macos
    *terminal
    *installed [nodejs](https://nodejs.org/en/)

- Install typescript
    *Create a folder anywhere in you pc name practice. Then
```cd practice```
    *install
```npm i typescript --save-dev //local dev setup```
    *Alternatively you can install globally
```npm install -g typescript```

- init typescript project in the folder

```npx tsc --init```
This command create a tsconfig.json file and you need to update the json as follows
```{"outDir": "dist","sourceMap": true }```

- compile file and check output

individual file compile

```npx tsc index.ts```

compile all file at once

```npx tsc```

Then you found all compiled js file is dist folder you can set any name for the folder. You can check the output with following command from the terminal:
```node dist/class.js```
```node dist/functions.js```
```node dist/basic-types.js```

