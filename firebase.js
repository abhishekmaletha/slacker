import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { ref, onUnmounted } from 'vue'

firebase.initializeApp({
    apiKey: "AIzaSyBgBLWACBvXnwEWh8Q3SYnjP568QVtnHpg",
    authDomain: "slacker-e96cc.firebaseapp.com",
    projectId: "slacker-e96cc",
    storageBucket: "slacker-e96cc.appspot.com",
    messagingSenderId: "599289058120",
    appId: "1:599289058120:web:5aac4cdaf9397189f3197d",
    measurementId: "G-2RW4FCFJ7F"
});
const db = firebase.firestore();
const usersCollection = db.collection('users');
export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}
// export const useLoadUsers = () => {
//     const users = ref([])
//     const close = usersCollection.onSnapshot(snapshot => {
//         users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//     })
//     onUnmounted(close)
//     return users
// }

export default firebase;