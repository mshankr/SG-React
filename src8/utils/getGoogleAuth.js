import { useEffect, useState } from 'react'
import keys from '../keys'

export default () => {
  const [auth, setAuth] = useState(null)
  const [userId, setUserId] = useState(null)
  const [isSignedIn, setSignedIn] = useState(null)

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: keys.googleClientId,
        scope: "email"
      }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        setAuth(window.gapi.auth2.getAuthInstance());
        const isSignedIn = auth.isSignedIn.get()
        if (isSignedIn) {
          setUserId(auth.currentUser.get().getId())
        }
        setSignedIn(isSignedIn)
        // whenever Google authentication status changes,
        auth.isSignedIn.listen((isSignedIn) => setSignedIn(isSignedIn))
      })
    })
  }, [])

  return [auth, isSignedIn, userId]
}
