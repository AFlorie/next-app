import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/20015800/pexels-photo-20015800/free-photo-of-bois-animal-mignon-gris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20015800/pexels-photo-20015800/free-photo-of-bois-animal-mignon-gris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>21.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In debitis
          illo vitae, inventore minus deleniti ad, amet voluptatibus soluta
          dolorum quaerat esse ut, eum possimus earum fugit architecto ipsam
          asperiores?
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
