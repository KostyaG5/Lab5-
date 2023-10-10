<template>
  <div class="row">
      <div class="col-md-2 text-right">
         <router-link class="btn btn-link" :to="{name: 'LoginComponent', params: {}}">Logout</router-link>
      </div>
      <div class="col-md-8 col-sm-8 col-xs-12">
        <div id="myDIV" class="header">
          <h2 style="margin:5px">My Notes List</h2>

          <select class="mySelect" v-model="createnote.categoryId">
            <option v-for="category, index in categories" v-bind:value="category.id">{{ category.name }}</option>             
          </select>

          <input type="text" id="myInput" placeholder="Title..." v-model="createnote.name">

          <span class="addBtn" v-on:click="createNote()">Add</span>

          <div class="row">
            <div class="col myRadio" v-for="category, index in categories">
              <input type="radio" name="rd" v-on:click="listNotesCategory(category.id)"> {{ category.name }}
            </div>
          </div>

        </div>
        <div>
           <ul id="myUL" v-for="note, index in notes">
              <li><b>{{ note.categoryName }}</b> {{ note.name }}<span class="close" v-on:click.stop="destroyNote(note.id)">×</span></li>
           </ul>
        </div>   
      </div>  
      <div class="col-md-2">
      </div>    
  </div>
</template>

<script>
//import { initializeApp } from "firebase/app";
import {APP, appConfig} from "../config.js";

import { 
    getDocs, 
    collection,
    doc, 
    getFirestore, 
    setDoc,
    addDoc,
    deleteDoc,
    query,
    where
} from 'firebase/firestore'

    export default {
        data: function() {
           return {
              DB: null,
              notes: [],  
              categories: [],            
              createnote: {
                 name,
                 categoryId: "1", //пока(без выбора категории) - всем note категория "1"
                 userId: null, //!!! 
              },
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

          app.DB = getFirestore(APP);

          app.createnote.userId = app.$route.params.uid; //!!!

          //this.listNotes();
          this.listCategories();
        },
        methods: {
           listCategories(){
              var app = this;

              let notes = getDocs(collection(app.DB, 'Categories'));

              notes.then(responce => {
                  responce.forEach(document => {                     
                      console.log(document.data());

                      let category = document.data();
                      category.id = document.id; //!!!additional - not in document.data()

                      app.categories.push(category);
                  });

                  app.listNotes(); //!!!here - after categories
              });                      
           },     

           listNotes(){
              var app = this;

              //let notes = getDocs(collection(app.DB, 'Notes'));  

              let q = query(collection(app.DB, "Notes"), where("userId", "==", app.$route.params.uid)); //!!!

              let notes = getDocs(q); //!!! 

              this.pushNotes(notes);
           }, 

           getCategoryName(categoryId) {
                var app = this;

                for (let i = 0; i < app.categories.length; ++i) {
                    if (app.categories[i].id == categoryId) {
                      return app.categories[i].name;  
                    }
                } 
           },  

           listNotesCategory(id) {
              var app = this;

              app.notes = []; //!!!here - if there weren't any

              //let q = query(collection(app.DB, "Notes"), where("categoryId", "==", id));
              let q = query(collection(app.DB, "Notes"), where("categoryId", "==", id), where("userId", "==", app.$route.params.uid));

              let notes = getDocs(q);

              this.pushNotes(notes);             
           }, 

           pushNotes(notes) {
              var app = this;

              notes.then(responce => {
                  responce.forEach(document => {                     
                      console.log(document.data());

                      let note = document.data();
                      note.id = document.id;

                      //!!!additional - note need name category 
                      note.categoryName = app.getCategoryName(note.categoryId);

                      app.notes.push(note);
                  });
              }); 
           },                                

           createNote(){
               var app = this;
       
               addDoc(collection(app.DB, 'Notes'), app.createnote);

               app.createnote.name = ''; //!!!reset input
               app.createnote.categoryId = "1"; 

               app.notes = []; //!!!reset notes

               this.listNotes();
           }, 

           destroyNote(id){
               var app = this; 

               deleteDoc(doc(app.DB, "Notes", id));

               app.notes = [];

               this.listNotes();
           },
        },
    }
</script>
