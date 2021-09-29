# Module Federation example using Webpack and Re.Pack for React Native

## Installation

```bash
yarn --cwd app && yarn --cwd host
```

## Usage

### Running app container

App can be run as a standalone application using:
1. `yarn --cwd app start` (notice the dev server is running on port 9000)
2. `yarn --cwd app ios`/`yarn --cwd app android`
  
Or as part of a Host application.

### Running host application with app container

1. Run dev server for app container: `yarn --cwd app start`
2. Run dev server for host application: `yarn --cwd host start`
3. Build host application: `yarn --cwd host ios`/`yarn --cwd host android`

### Notes

It might be helpful to open Re.Pack's web dashboard to analyse artifacts:

- http://localhost:9000/dashboard for app container
- http://localhost:8081/dashboard for host container
