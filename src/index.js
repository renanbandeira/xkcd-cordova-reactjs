import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var app = {
   // Application Constructor
   initialize: function() {
       document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
   },

   // deviceready Event Handler
   //
   // Bind any cordova events here. Common events are:
   // 'pause', 'resume', etc.
   onDeviceReady: function() {
       this.receivedEvent('deviceready');
   },

   // Update DOM on a Received Event
   receivedEvent: function(id) {
     ReactDOM.render(
         <App />,
         document.body
     );

       console.log('Received Event: ' + id);
   }
};

app.initialize();
