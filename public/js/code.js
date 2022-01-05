//CREATE PRESENCE

const createPresence = document.querySelector('#create-presence');
const button = document.querySelector('#submit-presence');

button.addEventListener('click', e =>{
  e.preventDefault();

  auth.onAuthStateChanged(user =>{
    uid = firebase.auth().currentUser.uid;
    attendtime = createPresence['attendtime'].value;

    if(user && isPresenceValid(attendtime)){
      db.collection('presences').add({
        id : uid,
        time : attendtime
      }).then( () =>{
        if(isPresenceValid(attendtime)){
          M.toast({html: 'Presence successfully added'}); 
        }
        
      }).catch( error => {
        M.toast({html: error}); 
      });
    }
    else{
      M.toast({html: 'Whoops, presensi hanya untuk waktu yang ditentukan ya sobat :)'}); 
    }
  });
  });

  function isPresenceValid(attendtime){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    todayDate1 = yyyy + '-' + mm + '-' + dd;
    todayDate2 = attendtime.slice(0,10);

    if(todayDate1 ==todayDate2) return true;
    else return false;
}

