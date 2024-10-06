import { User } from 'firebase/auth'

export type TypeInfor = User & {
  birthDate?: string // Add birthDate property (optional)
  gender?: string // Add gender property (optional)
}

export const getUserInfo = (userInfo: TypeInfor) => {
  const uid = userInfo.uid
  const displayName = userInfo.displayName || null
  const email = userInfo.email || null
  const phoneNumber = userInfo.phoneNumber || null
  const emailVerified = userInfo.emailVerified || null
  const photoURL = userInfo.photoURL || null
  const createdAt = userInfo.metadata?.creationTime || null
  const lastLoginAt = userInfo.metadata?.lastSignInTime || null
  const birthDate = userInfo.birthDate || null
  const gender = userInfo.gender || null

  return {
    uid,
    displayName,
    email,
    phoneNumber,
    emailVerified,
    photoURL,
    createdAt,
    lastLoginAt,
    birthDate: birthDate, // Added
    gender: gender // Added
  }
}
