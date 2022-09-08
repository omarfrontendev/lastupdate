import React from 'react'

import styles from './search.module.scss'

const MapPopup = ({ close }) => {
  return (
    <div className={styles.model}>
      <div className={styles.overLay} onClick={() => close(false)}></div>
      <div className={styles.map__content}>
        <div className={styles.header__map}>
          Address for Shipping
        </div>
        <div className={styles.input}>
          icon
          <input type="text" placeholder='Find a location, a street, or a landmark...' />
        </div>
        <div className={styles.map}>
          {/*  */}
        </div>
        <div className={styles.footer__map}>
          <button>Deliver Here</button>
          <div className={styles.footer__text}>
            <span>Deliver to : </span>
            10th of Ramadan - 16th District
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapPopup