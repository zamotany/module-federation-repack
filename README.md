# Module Federation example using Webpack and Re.Pack for React Native

## Installation

```bash
yarn --cwd app1 && yarn --cwd app2 && yarn --cwd host
```

## Usage

### Running app 1 container

App can be run as a standalone application using:
1. `STANDALONE=1 yarn --cwd app1 start` (notice the dev server is running on port 9000)
2. `yarn --cwd app1 ios`/`yarn --cwd app1 android`
  
Or as part of a Host application.

### Running app 2 container

App can be run as a standalone application using:
1. `STANDALONE=1 yarn --cwd app2 start` (notice the dev server is running on port 9001)
2. `yarn --cwd app2 ios`/`yarn --cwd app2 android`
  
Or as part of a Host application.

### Running host application with app container

1. Run dev server for app 1 container: `yarn --cwd app1 start`
2. Run dev server for app 2 container: `yarn --cwd app2 start`
3. Run dev server for host application: `yarn --cwd host start`
4. Build host application: `yarn --cwd host ios`/`yarn --cwd host android`

### Notes

It might be helpful to open Re.Pack's web dashboard to analyse artifacts:

- http://localhost:9000/dashboard for app container
- http://localhost:8081/dashboard for host container
