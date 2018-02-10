// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBoD7zX8SnfecLVEsDiyui_3qHv-Cvd1Js',
    authDomain: 'carpoolee.firebaseapp.com',
    databaseURL: 'https://carpoolee.firebaseio.com',
    projectId: 'carpoolee',
    storageBucket: 'carpoolee.appspot.com',
    messagingSenderId: '193988618449'
  }
};
