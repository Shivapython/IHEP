import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      toast.error("Google Sign-In failed: " + error.message, {
        position: "bottom-center",
      });
      console.error("Google Sign-In error:", error);
    }
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={require("../assets/google.png")} alt="Google Sign-In" width={"60%"} />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
