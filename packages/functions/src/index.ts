import * as functions from 'firebase-functions';
import { createAnonymousUser } from 'model/src/contexts/indentity-access/application/user.useCase';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });

  response.send(`Hello from and plugin is working`);
});

export const onRegister = functions.auth.user().onCreate(async (user) => {
  await createAnonymousUser(user.uid);
});
