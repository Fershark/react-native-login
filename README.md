# React Native Log in
## Features
- Persisted log in and log out.
- Typescript code and testing.
- State management with [Redux Toolkit](https://redux-toolkit.js.org/).
- HTTP client with error interceptor with [axios](https://github.com/axios/axios).
- Screen navigation with [React Navigation](https://reactnavigation.org/).
- Redux Reducers and Async Action unit testing with [Jest](https://jestjs.io/).
- E2E testing with [Detox](https://github.com/wix/Detox).

<p align="center">
  <img width=200 src="https://raw.githubusercontent.com/Fershark/react-native-login/main/demo/ScreenShot1.png?raw=true"/>
  <img width=200 src="https://raw.githubusercontent.com/Fershark/react-native-login/main/demo/ScreenShot2.png?raw=true"/>
  <img width=200 src="https://raw.githubusercontent.com/Fershark/react-native-login/main/demo/ScreenShot3.png?raw=true"/>
</p>

## Set up
1. [React Native CLI](https://reactnative.dev/docs/environment-setup)
2. ```npm install```

## Starting the application
1. Start Metro: ```npm start```
2. In other terminal depending the desired platform execute:

- iOS: ```npm run ios```
- Android: ```npm run android```

## Testing
### Demo
#### Unit Testing

<p align="center">
	<img width=800 src="https://raw.githubusercontent.com/Fershark/react-native-login/main/demo/UnitTesting.png?raw=true"/>
</p>

#### E2E testing iOS

<p align="center">
	<img width=900 src="https://raw.githubusercontent.com/Fershark/react-native-login/main/demo/e2eiOS.gif?raw=true" style="max-width:100%;" />
</p>

#### E2E testing Android

<p align="center">
	<img width=900 src="https://raw.githubusercontent.com/Fershark/react-native-login/main/demo/e2eAndroid.gif?raw=true" style="max-width:100%;" />
</p>

### Set up
```
npm install detox --save-dev
```

### Runing the tests

#### Unit Testing
```
npm test
```

#### E2E testing iOS
1. Start Metro: ```npm run test:start```
2. Open other terminal and execute:

```
build:e2e:ios
test:e2e:ios
```

#### E2E testing Android
1. Start Metro: ```npm run test:start```
2. Open other terminal and execute:

```
build:e2e:android
test:e2e:android
```

## More information

### Folder structure

```
react-app-login
├── app
│   ├── App.tsx
│   ├── models
│   ├── redux
│   ├── screens
│   ├── services
├── ___tests___
├── e2e
├── jest
├── demo
├── android
├── ios
├── index.js
└── package.json
```

#### app directory
**App.tsx** The main App component.

**models** This is where the app models are stored.

**redux** Directory with Redux slices and Redux configuration.

**screens** This is where the screens components are stored.

**services** Here are the API services and the HTTP configuration.

#### \_\_tests__ directory
This is where the components tests are saved.

#### e2e directory
Here are the end to end testing files.

#### jest directory
This is were jest configurations are stored.

### Available Scripts
```test```

Runs the app unit tests with Jest.

```test:start```

Starts metro replacing the '.ts' files with '.e2e.ts' files for Detox file mocking.

```build:e2e:android```

Builds the Detox Android project.

```build:e2e:ios```

Builds the Detox iOS project.

```test:e2e:android```

Runs the Detox tests in android emulator.

```test:e2e:ios```

Runs the iOS tests in iOS simulator.
