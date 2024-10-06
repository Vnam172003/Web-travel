import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'
import { auth, db } from '../../../firebase/FirebaseConfig'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { getUserInfo, TypeInfor } from '../../Types/Users.type'

export const handleGoogleRedirect = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithRedirect(auth, provider)
}

// Hàm để xử lý kết quả redirect
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth)
    if (result) {
      const userInfo: TypeInfor = result.user
      const userData = getUserInfo(userInfo)
      const userRef = doc(db, 'Users', userData.uid)
      await setDoc(
        userRef,
        {
          ...userData,
          birthDate: null, // Mặc định là null
          gender: null, // Mặc định là null
          updatedAt: serverTimestamp()
        },
        { merge: true }
      )
      // Chuyển hướng đến trang chính
      window.location.href = '/'
    }
  } catch (error) {
    console.error('Error handling redirect result:', error)
  }
}
