# Adminpro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## comandos de git hub como crear un tag, esto permite que se pueda hacer una copia del proyecto en algun para poder publicar o descargar
comando para crear el tag
git tag -a v1.0.0 -m "Versión 1"

comando para subir el tag
git push --tag

comando subir todos los tag
git push --tags

## DUM: COMANDOS PARA CLI GENERAR COMPONENTES
con este comando se genera el componente sin el archivo de prueba unitaria y hoja de estilo.
ng g c shared/breadcrumbs --skip-tests -s

con este comando se genera el servicio sin prueba unitaria 
ng g s shared --skip-tests

se utiliza --flat para que no cree una carpeta al componente con el mismo nombre del mismo.
ng g c pages/pages --skip-tests -s --flat

utilizar -modules o -m para indicar en que modulo se crea la pagina o componente.
ng g c pages/accoutSettings --skip-tests -s -m=pages

crear modulo sin carpeta
ng g m services/service --flat

## GRAFICOS

se puede instalar ng2-charts usuando npm
npm install ng2-charts --save

