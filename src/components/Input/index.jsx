import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import styles from './.module.scss'

export default function Input({ type, placeholder, value, setValue, icon, id, data, textarea, file }) {

  const [showPasord, setShowPassword] = useState(false);

  if(file) {
    return (
      <div className={`${styles.input__control} ${styles.input__file} d-flex align-items-center`}>
        <input 
          className={`${styles.input} d-none`}
          placeholder={placeholder} 
          type={showPasord ? 'text' : type}
          value={value} 
          onChange={e => {
            setValue({
              ...data,
              [id]: e.target.value
            })
          }}
          id={id}
        />
        <p className={`${styles.text} ${data[id] ? styles.focus : ''}`}>{data[id] || placeholder}</p>
        <label htmlFor={id} className={styles.label}>
          {icon}
        </label> 
      </div>
    )
  }

  if(textarea) {
    return (
      <div className={`${styles.input__control} ${styles.textarea}`}>
        <span className={styles.input__icon}>
          {icon}
        </span> 
        <textarea 
          className={styles.input}
          placeholder={placeholder} 
          type={showPasord ? 'text' : type}
          value={value} 
          onChange={e => {
            setValue({
              ...data,
              [id]: e.target.value
            })
          }}
        />
    </div>
    )
  }

  return (
    <div className={`${styles.input__control} d-flex align-items-center`}>
      <span className={styles.input__icon}>
        {icon}
      </span> 
      <input 
        className={styles.input} 
        placeholder={placeholder} 
        type={showPasord ? 'text' : type}
        value={value} 
        onChange={e => {
          setValue({
            ...data,
            [id]: e.target.value
          })
        }}
      />
      {type === 'password' && 
      <button 
        className={styles.show__pass__btn} 
        onClick={() => setShowPassword(prev => !prev)}
      >
        {!showPasord ? <AiOutlineEye className={styles.pass__icon} /> : <AiOutlineEyeInvisible className={styles.pass__icon} />}
      </button>}
    </div>
  )
}
