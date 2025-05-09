import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import React from "react";

export default function form() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.form}>
            <iframe
              className={styles.responseForm}
              src="https://docs.google.com/forms/d/e/1FAIpQLSemqSB9qjyYcTgFKltdIJzmtTC5sYS7d9wwP7oTnlqXyXJhaw/viewform?embedded=true"
              height="720"
            >
              Loading…
            </iframe>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
