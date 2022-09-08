import React from 'react'
import { useState } from 'react'
import { MdOutlineSubtitles } from 'react-icons/md'
import { CgDetailsMore } from 'react-icons/cg'
import { ImAttachment } from 'react-icons/im'
import styles from './.module.scss'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import PopUpWrapper from '../../components/PopUpWrapper'

export default function SupportPopUp() {

  const [data, setData] = useState({
    title: '',
    details: '',
    file: ''
  });

  return (
    <Modal id='support'>
      <PopUpWrapper
        title='Write Your Complaint'
        id='support'
        textStart={true}
      >
        <form 
          onSubmit={e => e.preventDefault()}
          className={`${styles.support__container} d-flex flex-column`}
        >
        <Input 
          type='text'
          placeholder='Title'
          value={data.title}
          setValue={setData}
          id='title'
          data={data}
          icon={<MdOutlineSubtitles className={styles.title__icon} />}
        />
          <Input
            type='text'
            placeholder='Details'
            value={data.details}
            setValue={setData}
            id='details'
            data={data}
            icon={<CgDetailsMore className={styles.title__icon} />}
            textarea={true}
          />
          <Input
              type='file'
              placeholder='Attachment'
              value={data.file}
              setValue={setData}
              id='file'
              data={data}
              icon={<ImAttachment className={styles.title__icon} />}
              file={true}
            />
          <button className={styles.submit__btn} type='submit'>
            Send
          </button>
        </form>
      </PopUpWrapper>
    </Modal>
  )
}
