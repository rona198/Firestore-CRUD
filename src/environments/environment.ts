// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyDjAvE2jkSxYAdBy4H9ZO_zzaTbJdjsyEE",
    authDomain: "firestore-crud3.firebaseapp.com",
    databaseURL: "https://firestore-crud3.firebaseio.com",
    projectId: "firestore-crud3",
    storageBucket: "firestore-crud3.appspot.com",
    messagingSenderId: "919408479126"
  }
};
