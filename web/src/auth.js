import { initializeApp, getApp, getApps } from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'

import { createAuth } from '@redwoodjs/auth-firebase-web'

import { firebaseConfig } from 'src/lib/firebase'

const firebaseApp = ((config) => {
  const apps = getApps()

  if (!apps.length) {
    initializeApp(config)
  }

  return getApp()
})(firebaseConfig)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp, // optional
}

export const { AuthProvider, useAuth } = createAuth(firebaseClient)
