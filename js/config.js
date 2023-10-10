import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAk5fROv62254ZpfB5670juylW18-KGeF4",
  authDomain: "lab4-c08a2.firebaseapp.com",
  projectId: "lab4-c08a2",
  storageBucket: "lab4-c08a2.appspot.com",
  messagingSenderId: "623215451310",
  appId: "1:623215451310:web:5be858f4d3e9cbf1d6e13f",
  measurementId: "G-YVJ15YS5T3"
};

export let APP = null;

export function appConfig() {
    APP = !getApps().length ? initializeApp(firebaseConfig) : getApp();
}      

