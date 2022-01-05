
  var firebaseConfig = {
    apiKey: "AIzaSyDKBlxfqWsSUDZXSDlmRfEFqawNi8nlivs",
    authDomain: "minhajulhaq-24fa9.firebaseapp.com",
    projectId: "minhajulhaq-24fa9",
    storageBucket: "minhajulhaq-24fa9.appspot.com",
    messagingSenderId: "885526744173",
    appId: "1:885526744173:web:33f2ffba965a65f95b0364",
    measurementId: "G-HPRD4HJVBY"
  };
  
  firebase.initializeApp(firebaseConfig);



  const db = firebase.firestore();
  db.settings( {timestampsInSnapshots: true});

  const auth = firebase.auth();


  //Auth Process
  auth.onAuthStateChanged(user =>{    
    if(user){
        //Login sama sign up ilang
        let loggedInComps = document.querySelectorAll('.logged-in');
        loggedInComps.forEach( c =>{
            c.style.display = 'block';
        });

        let authButton = document.querySelectorAll('.button-in');
        authButton.forEach( c =>{
            c.style.display = 'inline-block';
        });

        db.collection('users').doc(user.uid).get().then(function(doc) {
            let adminComps = document.querySelectorAll('.admin');
                    if(doc.data().type=='Nonadmin'){
                      adminComps.forEach( c =>{
                          c.style.display = 'none';
                      });
                    }
        });


        //Muncul logout sm account
        let loggedOutComps = document.querySelectorAll('.logged-out');
        loggedOutComps.forEach( c =>{
            c.style.display ='none';
        });

        
    }
    else{

        //Logout sm account ilang
        let loggedOutComps = document.querySelectorAll('.logged-out');
        loggedOutComps.forEach( c =>{
            c.style.display = 'block';
        });

        //Muncul login sama sign up
        let loggedInComps = document.querySelectorAll('.logged-in');
        loggedInComps.forEach( c =>{
            c.style.display = 'none';
        });

        let authButton = document.querySelectorAll('.button-out');
        authButton.forEach( c =>{
            c.style.display = 'inline-block';
        });

        let adminComps = document.querySelectorAll('.admin');
        adminComps.forEach( c =>{
            c.style.display = 'none';
        });

    }
});


const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        M.toast({html: 'Logged In'});  

        const modal = document.querySelector('modal-login');
        window.location.href = 'dash.html';

    }).catch(function(error){
        var errorToast = error;
        M.toast({html: error});  
    });
});


const logout = document.querySelector('#logout-button');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() =>{
        window.location.href = 'index.html';
        M.toast({html: 'Logged Out'});  
    });
});

const logout2 = document.querySelector('#logout-link');
logout2.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() =>{
        window.location.href = 'index.html';
        M.toast({html: 'Logged Out'});  
    });
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;


    auth.createUserWithEmailAndPassword(email, password).then(function(cred){
        M.toast({html: 'Success.'});
        return db.collection('users').doc(cred.user.uid).set({
            name: signupForm['signup-name'].value,
            type: 'Nonadmin'
        });
    }).then( () =>{
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        }).catch(function(error){
        var errorToast = error;
        M.toast({html: error});  
    });
});


//Message process
// function InitializeFirebaseMessaging(){
//     messaging.requestPermission().then( function(){
//         console.log('Notif Permission')
//     }).then( function(token){
//         console.log("token :"+token)
//         document.getElementById("token").innerHTML = token;
//     }).catch(function(err){
//         console.log(err)
//     })
// }

// const messaging = firebase.messaging();

// messaging
//   .requestPermission()
//   .then(() => {
//       console.log('boleh')
//       return messaging.getToken();
//     })
//   .then(token => {
//     console.log(token);
//   })
//   .catch(err => {
//     console.log("No permission to send push", err);
//   });


//   messaging.onMessage(payload => {
//     console.log("Message received. ", payload);
//     const { title, ...options } = payload.notification;
//   });

