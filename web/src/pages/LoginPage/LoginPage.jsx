import { useEffect } from 'react'

import { getAuth } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LoginPage = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(getAuth())

    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: routes.products(),
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
          disableSignUp: {
            status: true,
          },
        },
      ],
    })
  }, [])

  return (
    <>
      <Metadata title="Login" description="Login page" />

      <div id="firebaseui-auth-container"></div>
    </>
  )
}

export default LoginPage
