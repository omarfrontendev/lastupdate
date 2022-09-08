import React, { useState } from 'react'
import Input from '../Input'
import styles from './.module.scss'

export default function ResetPassword() {

  const [data, setData] = useState({})

  const inputsResource = [
    {
      id: 'new__password',
      placeholder: 'New Password',
      type: 'password'
    },
    {
      id: 'confirm_password',
      placeholder: 'Confirm Password',
      type: 'password'
    },
  ]

  return (
    <form onSubmit={e => e.preventDefault()} className={styles.reset__pass__container}>
      <div className={styles.reset__pass__title}>Reset Password</div>
      <div className={`${styles.reset__pass__inputs} d-flex flex-column`}>
        {inputsResource.map(input => (
          <Input 
            type={input?.type}
            placeholder={input?.placeholder}
            id={input?.id}
            value={data[input?.id] || ''}
            setValue={setData}
            data={data}
          />
        ))}
      </div>
      <button type='submit' className={styles.submit__btn}>Change</button>
    </form>
  )
}
