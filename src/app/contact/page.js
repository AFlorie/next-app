"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const a = Math.random();

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name and Surname"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone number (optional)"
          />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          {isClient && a}
          <button onClick={() => console.log("clicked")}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
