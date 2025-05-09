import Navbar from "../components/navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.bodyText}>
            <button className={styles.silly}>robinthepyro</button>
            <p>
              Hey FruitBasket! This is the next site I made. If things look a
              little bare around here thats because they are! This whole site
              was made in a huge rush. The vast majority of this is being done
              on the 29th of April (in other words yesterday).
            </p>
            <p>
              So, who am I? I'm Robin, a third year student at AUT with a love
              of computers, and all the fun stuff you can do with them. My main
              interest within the field is system level programming,
              particularly in C and Rust! While web development is definitely
              not my specialty, I do really enjoy a lot of aspects of it and
              can't wait to learn more!
            </p>
            <p>
              I am proudly genderqueer / nonbinary / trans (labels are hard), I
              love the local music scene in Auckland, and my toxic trait is that
              I bully windows users into trying Linux.
            </p>
          </div>
          <div className={styles.profile}>
            <Image
              className={styles.silly}
              src="/out.png"
              width={200}
              height={200}
              alt={"A photo of me doing something cool (existing)"}
            />
            <p>Robin (she/they/he/it)</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}></footer>
    </main>
  );
}
