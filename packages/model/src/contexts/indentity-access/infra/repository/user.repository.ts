import { firestore } from '@/model/shared/firebase';
import { doc, setDoc } from '@firebase/firestore';

export const createAnonymousUser = async (collectionId: string) => {
  const userRef = doc(firestore, 'user', collectionId);
  await setDoc(userRef, {
    name: '',
  });
};
