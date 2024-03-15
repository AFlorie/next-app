import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20015800/pexels-photo-20015800/free-photo-of-bois-animal-mignon-gris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
          />
        </div>
        <span className={styles.date}>15.03.2024</span>
      </div>
      <div className={styles.bottm}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Description</p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
