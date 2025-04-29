import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.isuckwithflexboxes}>
            <button className={styles.silly}>
              your music taste says a lot about you
            </button>
            <p>
              Mine says that I never grew out of my emo phase. I like my music
              noisy, fast and, raw. Here are my three favourites at the moment.
            </p>
            <hr />
            <iframe
              className={styles["bandcampentry"] + " " + styles["shrink"]}
              src="https://bandcamp.com/EmbeddedPlayer/album=2246801859/size=small/bgcol=333333/linkcol=e32c14/track=165449555/transparent=true/"
              seamless
            >
              <a href="https://habak.bandcamp.com/album/ning-n-muro-consigui-jam-s-contener-la-primavera">
                Ningún Muro Consiguió Jamás Contener la Primavera by Habak
              </a>
            </iframe>
            <p>
              Habak's whole discography is incredible, and picking just one felt
              wrong. They are a (post?) hardcore punk band from Mexico and no
              one else does this still of music quite as well as them.
            </p>
            <hr />
            <iframe
              className={styles["bandcampentry"] + " " + styles["shrink"]}
              src="https://bandcamp.com/EmbeddedPlayer/album=453243018/size=small/bgcol=333333/linkcol=e32c14/track=107441580/transparent=true/"
              seamless
            >
              <a href="https://happyvalleywgtn.bandcamp.com/album/happy-valley">
                Happy Valley by Happy Valley
              </a>
            </iframe>
            <p>
              Happy Valley is my favourite Kiwi band currently, their music is
              some top shelf sad music. This is emo through and through. I've
              always had a soft spot for spoken word vocals in songs, and the
              novelty of a kiwi accent in this just <strong>works</strong>.
            </p>
            <hr />
            <iframe
              className={styles["bandcampentry"] + " " + styles["shrink"]}
              src="https://bandcamp.com/EmbeddedPlayer/album=1868331358/size=small/bgcol=333333/linkcol=e32c14/track=3841413767/transparent=true/"
              seamless
            >
              <a href="https://seeyouspacecowboy.bandcamp.com/album/coup-de-gr-ce">
                Coup De Gráce by SeeYouSpaceCowboy...
              </a>
            </iframe>
            <p>
              This album, this entire album is just pure, sassy, angsty
              goodness. No one else has a voice like Connie and wow does she use
              it well. I had to pick one song to put here and I genuinely had to
              pick by random. All the songs are just that good. Still devasted
              the band has to break up.
            </p>

            <footer className={styles.footer}></footer>
          </div>
        </div>
      </div>
    </main>
  );
}
