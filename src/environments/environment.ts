// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAz3UTbeIZpLMxx7MkKbPHMDFsHnU_yYcc',
    authDomain: 'maindo-firebase.firebaseapp.com',
    databaseURL: 'https://maindo-firebase.firebaseio.com',
    projectId: 'maindo-firebase',
    storageBucket: 'maindo-firebase.appspot.com',
    messagingSenderId: '220915462359'
  }
};
