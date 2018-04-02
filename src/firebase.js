import * as firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3QpULckQ0R3zrjWODCQgydVPqm_56xQc",
    authDomain: "mymoments-a1aaf.firebaseapp.com",
    databaseURL: "https://mymoments-a1aaf.firebaseio.com",
    projectId: "mymoments-a1aaf",
    storageBucket: "",
    messagingSenderId: "257690957483"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')