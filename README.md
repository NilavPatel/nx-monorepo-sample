# Monorepo example with Nx and Angular
- Nx - https://nx.dev/
- Angular - https://angular.io/

## Commands used to create this demo
- $ npm install nx -g
- $ npx create-nx-workspace nx-monorepo-sample --preset=angular  
Note:  
Enter application name app1,  
and select SASS as default stylesheet format  
and select TSLint as default linter  
and select No to use Nx Cloud  
- $ npx nx g @nrwl/angular:app app2
- $ npx nx g @nrwl/angular:lib ui
- $ npx nx g component header --project=ui --export
- Now Add refrence of ui module in both app's main module, and use shared lib in both app.

## How to run?
- Run both app with port 4200 and 4300  
and go to URL http://localhost:4200/
- Now click on links in app

![app1](https://raw.githubusercontent.com/NilavPatel/nx-monorepo-sample/main/images/app1.PNG)
![app2](https://raw.githubusercontent.com/NilavPatel/nx-monorepo-sample/main/images/app2.PNG)