import { useEffect, useState } from 'react'
import { auth, db } from '../../../firebase/FirebaseConfig'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

import { TypeInfor } from '../../Types/Users.type'
import { Select } from 'antd'

const Profile = () => {
  const [userDetails, setUserDetails] = useState<TypeInfor | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [updatedInfo, setUpdatedInfo] = useState<any>({})

  const fetchUserDetail = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'Users', user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            setUserDetails(docSnap.data() as TypeInfor)
            setUpdatedInfo(docSnap.data())
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
    })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    // Cập nhật thông tin trong updatedInfo
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
        setIsEditing(false)
      }
    } catch (error) {
      console.error('Error updating user data:', error)
    }
  }

  useEffect(() => {
    fetchUserDetail()
  }, [])

  return (
    <div>
      <div className='bg-gray-100 min-h-screen flex justify-center my-10'>
        {userDetails ? (
          <div className='max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg mt-10'>
            <div className='flex items-center justify-between'>
              <h1 className='text-3xl font-bold'>Thông tin cá nhân</h1>
              <div className='relative w-16 h-16'>
                {userDetails.photoURL ? (
                  <img className='rounded-full w-full h-full' src={userDetails.photoURL} alt='Profile' />
                ) : (
                  <div className='rounded-full w-full h-full bg-gray-200 flex items-center justify-center'>
                    <span className='text-gray-500'>No Image</span>
                  </div>
                )}
                <span className='absolute bottom-0 right-0 bg-blue-500 text-white text-sm p-1 rounded-full'>
                  <i className='fas fa-camera'></i>
                </span>
              </div>
            </div>
            <p className='text-gray-500 mt-2'>
              Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.
            </p>

            {/* Information Rows */}
            <div className='mt-6 space-y-4'>
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
                      className='border rounded p-2'
                    />
                  ) : (
                    <p className='text-gray-500 mt-1'>{userDetails.displayName}</p>
                  )}
                </div>
                {isEditing ? (
                  <button onClick={handleSave} className='text-green-600 font-medium'>
                    Lưu
                  </button>
                ) : (
                  <button onClick={handleEdit} className='text-blue-600 font-medium'>
                    Chỉnh sửa
                  </button>
                )}
              </div>

              {/* Email */}
              <div className='flex justify-between items-center border-t py-4'>
                <div>
                  <p className='font-medium text-gray-700 '>Địa chỉ email</p>
                  <p className='text-gray-500 mt-1'>
                    {userDetails.email}
                    <span className='bg-green-700 text-white p-1 ml-1 font-medium '>
                      {userDetails.emailVerified ? 'Đã Xác thực' : 'Chưa xác thực'}
                    </span>
                  </p>
                </div>
                {isEditing ? (
                  <button onClick={handleSave} className='text-green-600 font-medium'>
                    Lưu
                  </button>
                ) : (
                  <button onClick={handleEdit} className='text-blue-600 font-medium'>
                    Chỉnh sửa
                  </button>
                )}
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
                      className='border rounded p-2'
                    />
                  ) : (
                    <p className='text-gray-500 mt-1'>{userDetails.phoneNumber}</p>
                  )}
                </div>
                {isEditing ? (
                  <button onClick={handleSave} className='text-green-600 font-medium'>
                    Lưu
                  </button>
                ) : (
                  <button onClick={handleEdit} className='text-blue-600 font-medium'>
                    Chỉnh sửa
                  </button>
                )}
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
                      className='border rounded p-2'
                    />
                  ) : (
                    <p className='text-gray-500 mt-1'>{userDetails.birthDate || 'Nhập ngày sinh của bạn'}</p>
                  )}
                </div>
                {isEditing ? (
                  <button onClick={handleSave} className='text-green-600 font-medium'>
                    Lưu
                  </button>
                ) : (
                  <button onClick={handleEdit} className='text-blue-600 font-medium'>
                    Chỉnh sửa
                  </button>
                )}
              </div>

              {/* Gender */}
              <div className='flex justify-between items-center border-t py-4'>
                <div>
                  <p className='font-medium text-gray-700'>Giới tính</p>
                  {isEditing ? (
                    <Select
                      id='gender-select'
                      value={updatedInfo.gender || 'Chọn giới tính'}
                      onChange={handleGenderChange} // Sử dụng hàm handleGenderChange
                      className='w-[200px]'
                    >
                      <Select.Option value='Nam'>Nam</Select.Option>
                      <Select.Option value='Nữ'>Nữ</Select.Option>
                      <Select.Option value='Khác'>Khác</Select.Option>
                    </Select>
                  ) : (
                    <p className='text-gray-500 mt-1'>{userDetails.gender || 'Chọn giới tính'}</p>
                  )}
                </div>
                {isEditing ? (
                  <button onClick={handleSave} className='text-green-600 font-medium'>
                    Lưu
                  </button>
                ) : (
                  <button onClick={handleEdit} className='text-blue-600 font-medium'>
                    Chỉnh sửa
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Profile
