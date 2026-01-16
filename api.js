import { initializeApp } from "firebase/app";
import { getFirestore,collection,doc,getDocs,getDoc,query,where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAFkSlTCW8p6kpm-XO1QNmNsWH1rA0WbII",
  authDomain: "van-life-tej.firebaseapp.com",
  projectId: "van-life-tej",
  storageBucket: "van-life-tej.firebasestorage.app",
  messagingSenderId: "795563367247",
  appId: "1:795563367247:web:4c1ddbe3fde2ac5caf433a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
 
const vansCollectionRef = collection(db,"vans")


export async function getVans(){
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }) )
   console.log(dataArr)
   return dataArr
}


export async function getVan(id){
    const docRef = doc(db,"vans",id)
    const vanSnapshot = await getDoc(docRef)
    return{
        ...vanSnapshot.data(),
        id:vanSnapshot.id
    }
}


// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


export async function getHostVans(){
    const q = query(vansCollectionRef,where("hostId","==","123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }) )
   console.log(dataArr)
   return dataArr
}



// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()
    // console.log("in api",data)

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}