import Firebase from 'Firebase'

var config = {
  apiKey: 'AIzaSyANUxMtj2qsRz8u2Arza8X7CCOWN-bBF6o',
  authDomain: 'musicplayer-f7b72.firebaseapp.com',
  databaseURL: 'https://musicplayer-f7b72.firebaseio.com',
  projectId: 'musicplayer-f7b72',
  storageBucket: '',
  messagingSenderId: '557480549595'
}

var app = Firebase.initializeApp(config)
var db = app.database()

var notesRef = db.ref('notes')

export default { app, db, notesRef }
