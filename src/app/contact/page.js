import Image from "next/image";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact.png"
          alt=""
          fill
          sizes="50vw"
        />
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

          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
