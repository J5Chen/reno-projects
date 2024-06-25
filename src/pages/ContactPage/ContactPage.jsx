import React from 'react'
import styles from './ContactPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactSection}>
        <p>Any Questions?</p>
        <h1 className={styles.title}>Contact Us</h1>
        <p><span><FontAwesomeIcon icon={faPhone} /></span>123-456-7890</p>
        <p><span><FontAwesomeIcon icon={faEnvelope} /></span>placeholder@gmail.com</p>
      </div>
    </div>
  )
}

export default ContactPage