
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var date = new Date();
var folder = months[date.getMonth()] + ' ' + date.getFullYear();

var storageRef = firebase.storage().ref();
var i =0;

storageRef.child(folder).listAll().then(function(result){
    imagesTab = document.querySelector('#images-tab');
    imageScript = ''; 
    result.items.forEach(function(imageRef){
      // console.log(imageRef.toString());
      imageRef.getDownloadURL().then(function(url){
        imageScript+='<div class="invoice col s6 m3 l3"><a href="'+url+'" target="_blank"><img src="'+url+'"></a></div>';
        imagesTab.innerHTML=imageScript;
      });
    });
});


