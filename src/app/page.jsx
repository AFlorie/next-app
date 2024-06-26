import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          corrupti incidunt corporis necessitatibus eius tempora iure autem
          laboriosam? Omnis laboriosam molestiae culpa assumenda odit esse quo
          quasi molestias nulla beatae!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            className={styles.brandImg}
            src="/brands.png"
            alt=""
            fill
            sizes="50vw"
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.heroImg}
          src="/hero.gif"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Home;

