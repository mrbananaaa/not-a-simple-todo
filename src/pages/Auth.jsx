import GoogleCard from "../components/GoogleCard"
import { signInWithPopup } from "firebase/auth"
import { auth, google } from "../app/firebase/firebaseInit"
import useAuthStore from "../app/store/useAuthStore"

const style = {
  wrapper: `flex justify-center items-center min-h-screen`
}

const Auth = () => {
  const setAuthed = useAuthStore((state) => state.setIsLogin)
  const setProfileName = useAuthStore((state) => state.setProfileName)
  
  const googleSignInHandler = async () => {
    await signInWithPopup(auth, google)
      .then((res) => {
        setProfileName(res.user.displayName)

        setTimeout(() => {
          setAuthed(true)
        }, 1000)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return <div className={style.wrapper}>
    <GoogleCard onClick={googleSignInHandler} />
  </div>
}

export default Auth