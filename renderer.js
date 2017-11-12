// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
(function(){
  console.log("render.js:Hello world!");
  const $ = require('jquery');
  const ipc = require('electron').ipcRenderer;
  var fs = require("fs");
  var textEncoding = require('text-encoding'); 
  var TextDecoder = textEncoding.TextDecoder;

  $("#openfile").click(function(event){
    console.log('clicked at openfile');
    ipc.send('open-file-dialog');
  });

  ipc.on('selected-directory', function (event, record) {
    $('#selected-file').text("filename:" + record.filename);

    for(let i = 0; i < record.length; i ++){
      $('#header').append($("<th/>").text(record[i]));
    }
    console.log(Object.prototype.toString.call(record[0]));
    $('#selected-file').text(record.filename);
  });

  //Load album file
  var readfile = function(record){

  }




})();
