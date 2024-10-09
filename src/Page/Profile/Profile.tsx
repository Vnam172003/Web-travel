import { useEffect, useState, useRef } from 'react'
import { app, auth, db } from '../../../firebase/FirebaseConfig'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { TypeInfor } from '../../Types/Users.type'
import { Select, Skeleton } from 'antd'
import { reload } from 'firebase/auth'
import { EditFilled } from '@ant-design/icons'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { Image } from 'antd'

const Profile = () => {
  const [userDetails, setUserDetails] = useState<TypeInfor | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [updatedInfo, setUpdatedInfo] = useState<any>({})
  const [imageUrl, setImageUrl] = useState<string>('')

  // State to track if any field is in editing mode
  const [isEditing, setIsEditing] = useState(false)

  // Create a ref for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const fetchUserDetail = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await reload(user)

        if (user.emailVerified) {
          const userRef = doc(db, 'Users', user.uid)
          await setDoc(userRef, { emailVerified: true }, { merge: true })
        }
        try {
          const docRef = doc(db, 'Users', user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const data = docSnap.data()
            setUserDetails(docSnap.data() as TypeInfor)
            setUpdatedInfo(docSnap.data())
            setImageUrl(data.photoURL || null)
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value })
  }

  const handleGenderChange = (value: string) => {
    setUpdatedInfo({ ...updatedInfo, gender: value })
  }

  const handleSave = async () => {
    try {
      const user = auth.currentUser
      if (user) {
        await setDoc(
          doc(db, 'Users', user.uid),
          {
            ...updatedInfo,
            updatedAt: serverTimestamp()
          },
          { merge: true }
        )
        setUserDetails(updatedInfo)
        setIsEditing(false) // Stop editing mode
        window.location.reload()
      }
    } catch (error) {
      console.error('Error updating user data:', error)
    }
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      try {
        const storage = getStorage(app)
        const storageRef = ref(storage, 'images/' + file.name)
        await uploadBytes(storageRef, file)
        const downloadUrl = await getDownloadURL(storageRef)
        setImageUrl(downloadUrl)
        const user = auth.currentUser
        if (user) {
          const userRef = doc(db, 'Users', user.uid)
          await setDoc(userRef, { photoURL: downloadUrl }, { merge: true })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  useEffect(() => {
    fetchUserDetail()
  }, [])

  return (
    <div className='bg-gray-100 min-h-screen flex justify-center py-10'>
      {userDetails ? (
        <div className='max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex items-center justify-between mb-6'>
            <h1 className='text-3xl font-bold'>Thông tin cá nhân</h1>
            <div className='relative w-16 h-16'>
              {imageUrl ? (
                <Image className=' min-h-[60px] rounded-lg object-cover' src={imageUrl} alt='Profile' preview={false} />
              ) : (
                <div className='rounded-full w-full h-full bg-gray-200 flex items-center justify-center'>
                  <span className='text-gray-500'>No Image</span>
                </div>
              )}

              <input
                type='file'
                className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                onChange={handleFileChange}
                ref={fileInputRef}
              />

              {/* Edit Button */}
              <div>
                <button
                  onClick={triggerFileInput}
                  className='flex gap-3 text-[14px] hover:bg-black hover:text-white border border-black w-full py-1 px-1  mt-1'
                >
                  <EditFilled className='' />
                  <p>sửa</p>
                </button>
              </div>
            </div>
          </div>

          <p className='text-gray-500 mb-4'>
            Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.
          </p>

          {/* Information Rows */}
          <div className='space-y-4'>
            {/* Name */}
            <div className='flex justify-between items-center border-t py-4'>
              <div>
                <p className='font-medium text-gray-700'>Tên</p>
                {isEditing ? (
                  <input
                    type='text'
                    name='displayName'
                    value={updatedInfo.displayName || ''}
                    onChange={handleChange}
                    className='border rounded p-2 w-64'
                  />
                ) : (
                  <p className='text-gray-500 mt-1'>
                    {userDetails.displayName || 'Hãy cho chúng tôi biết tên của bạn'}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className='flex justify-between items-center border-t py-4'>
              <div>
                <p className='font-medium text-gray-700'>Địa chỉ email</p>
                <p className='text-gray-500 mt-1'>
                  {userDetails.email}
                  <span
                    className={`ml-2 p-1 font-medium ${userDetails.emailVerified ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'}`}
                  >
                    {userDetails.emailVerified ? 'Đã xác thực' : 'Chưa xác thực'}
                  </span>
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className='flex justify-between items-center border-t py-4'>
              <div>
                <p className='font-medium text-gray-700'>Số điện thoại</p>
                {isEditing ? (
                  <input
                    type='text'
                    name='phoneNumber'
                    value={updatedInfo.phoneNumber || ''}
                    onChange={handleChange}
                    className='border rounded p-2 w-64'
                  />
                ) : (
                  <p className='text-gray-500 mt-1'>{userDetails.phoneNumber || 'Thêm số điện thoại của bạn'}</p>
                )}
              </div>
            </div>

            {/* Birth Date */}
            <div className='flex justify-between items-center border-t py-4'>
              <div>
                <p className='font-medium text-gray-700'>Ngày sinh</p>
                {isEditing ? (
                  <input
                    type='date'
                    name='birthDate'
                    value={updatedInfo.birthDate || ''}
                    onChange={handleChange}
                    className='border rounded p-2 w-64'
                  />
                ) : (
                  <p className='text-gray-500 mt-1'>{userDetails.birthDate || 'Thêm ngày sinh của bạn'}</p>
                )}
              </div>
            </div>

            {/* Gender */}
            <div className='flex justify-between items-center border-t py-4'>
              <div>
                <p className='font-medium text-gray-700'>Giới tính</p>
                {isEditing ? (
                  <Select
                    id='gender-select'
                    value={updatedInfo.gender || 'Chọn giới tính'}
                    onChange={handleGenderChange}
                    className='w-[200px]'
                  >
                    <Select.Option value='Nam'>Nam</Select.Option>
                    <Select.Option value='Nữ'>Nữ</Select.Option>
                    <Select.Option value='Khác'>Khác</Select.Option>
                  </Select>
                ) : (
                  <p className='text-gray-500 mt-1'>{userDetails.gender || 'Chưa xác định'}</p>
                )}
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <button onClick={handleSave} className='bg-black mr-1 text-white p-2 rounded'>
                Lưu
              </button>
            )}

            {/* Edit Toggle Button */}
            <button
              onClick={() => setIsEditing((prev) => !prev)}
              className='mt-4 border  hover:bg-black hover:text-white p-2 rounded'
            >
              {isEditing ? 'Hủy' : 'Chỉnh sửa'}
            </button>
          </div>
        </div>
      ) : (
        <div className='container mx-[100px]'>
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </div>
      )}
    </div>
  )
}

export default Profile
