import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { findEnv } from '../../config/config';

findEnv();

const clientCredentials = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(clientCredentials);

export const firebaseAuth = getAuth(app);
export const firestore = getFirestore(app);
export const firebaseFunctions = getFunctions(app);
export const firebaseStorage = getStorage(app);
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const host = 'localhost';
  connectAuthEmulator(firebaseAuth, `http://${host}:9099`);
  connectFirestoreEmulator(firestore, host, 8082);
  // connectFunctionsEmulator(firebaseFunctions, host, 5002);
  // connectStorageEmulator(firebaseStorage, host, 9199);

  console.info(`emulator is connected on ${process.env.NODE_ENV}`);
}
