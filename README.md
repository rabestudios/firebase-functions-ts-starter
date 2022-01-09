# Firebase Functions Typescript starter

This starter allows you to create **Firebase Cloud Functions** in Typescript. This
was derived from the [firebase-tools](https://www.npmjs.com/package/firebase-tools)
firebase functions boilerplate and was extended to support a fixed structure for
rapid development.

## Features
| Feature              | Description                                                                        |
|:---------------------|:-----------------------------------------------------------------------------------|
| Prettier Integration | Integrated prettier for automated linting and code formatting                      |
| Built-in Factories   | Includes some function and lambda handler factories to support a RESTful structure |

## Getting Started

### Development

```shell
cd functions
npm install
npm run serve # serve locally
```

### Deployment
```shell
firebase login
npm run deploy
```

## Roadmap

| Feature            | Description                                            | Status          |
|:-------------------|:-------------------------------------------------------|:----------------|
| Testing frameworks | Need support for testing frameworks in the boilerplate | Not implemented |
