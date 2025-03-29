import { getApp, getApps, initializeApp } from 'firebase/app'
import { doc, DocumentReference, getDoc, getFirestore, setDoc } from 'firebase/firestore'

const env = import.meta.env

const config = {
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_APP_ID
}

const fbApp = getApps().length ? getApp() : initializeApp(config)
const db = getFirestore(fbApp)

export const docRef : DocumentReference[] = []

export const getFbDoc = (collectionId: string, documentId: string) => 
{
    docRef.push(doc(db, collectionId, documentId))
    return docRef.length - 1
}

export const retrieveFbDoc = async (docId: number) => 
{
    const dSnap = await getDoc(docRef[docId])
    
    return dSnap
}

export const setFbDoc = async (docId: number, data:any) => 
{
    try{
        await setDoc(docRef[docId], data)
    } catch (e) {
        console.error("leaderboard update error!");
    }
}