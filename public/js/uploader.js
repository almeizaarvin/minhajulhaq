    var fileButton = document.getElementById('fileButton');

    //Listen for file selection
fileButton.addEventListener('change', function(e){ 
    //Get files
    for (var i = 0; i < e.target.files.length; i++) {
        var imageFile = e.target.files[i];
        uploadImageAsPromise(imageFile);
    }

});



//Handle waiting to upload each file using promise
function uploadImageAsPromise (imageFile) {
    return new Promise(function (resolve, reject) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = new Date();

        var folder = months[date.getMonth()] + ' ' + date.getFullYear();
        console.log(folder)
        var storageRef = firebase.storage().ref(folder+'/'+imageFile.name);

        //Upload file
        var task = storageRef.put(imageFile);

        //Update progress bar
        task.on('state_changed',
            function progress(snapshot){
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                uploader.value = percentage;

            },
            function error(err){

            },
            function complete(){
            }
        );

    });
}

