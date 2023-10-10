<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="" required autocomplete="email" autofocus v-model="datalogin.email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password" value="" v-model="datalogin.password">
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary size" v-on:click="createLogin()">
                                    Login
                                </button>                                
                                <router-link class="btn btn-link" :to="{name: 'RegisterComponent', params: {}}">Register</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//import { initializeApp } from "firebase/app";
import {APP, appConfig} from "../config.js";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Vue from 'Vue'; //из mine.js import Vue from 'vue';
import VueToast from 'vue-toast-notification';

    export default {
        data: function() {
           return {
              AUTH: null,

              datalogin: {
                 email: null,
                 password: null,  
              }
           }
        },
        mounted() {
          var app = this;

          /*
          const firebaseConfig = {
            apiKey: "AIzaSyCTJMO2hfqLbzD4idyb3SIst-VCU8nWH8s",
            authDomain: "one-e52f5.firebaseapp.com",
            projectId: "one-e52f5",
            storageBucket: "one-e52f5.appspot.com",
            messagingSenderId: "1080070134336",
            appId: "1:1080070134336:web:6daadb903b048f9fd29da5",
            measurementId: "G-86R2Q1QL76"
          }; 
          */

          // Initialize Firebase
          //const APP = initializeApp(firebaseConfig);
          appConfig(); //!!!

          app.AUTH = getAuth(APP);
        },
        methods: {
            createLogin() {           
                    var app = this;

                    if (app.datalogin.email && app.datalogin.password) {
                        signInWithEmailAndPassword(app.AUTH, app.datalogin.email, app.datalogin.password)
                        .then((cred) => {
                            console.log(cred.user);

                            app.$router.push({ name: 'NotesComponent', params: { uid: cred.user.uid } }); //!!!
                        })
                        .catch((error) => {
                            console.error(error)

                            //alert('Incorrect login or password!');

                            Vue.use(VueToast);
                            let parametersToast = { 
                            position: "top-right", 
                            duration : 5000
                            }
                            let instance = Vue.$toast.error('Incorrect login or password!', parametersToast);                                
                       })
                    } else {
                       //alert('All fields must be filled in!');

                       Vue.use(VueToast);
                       let parametersToast = { 
                       position: "top-right", 
                       duration : 5000
                       }
                       let instance = Vue.$toast.error('All fields must be filled in!', parametersToast);    
                    }
            },
        },
    }
</script>
