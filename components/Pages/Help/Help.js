import React from "react";
import * as styles from "./Help.styles.js";

function Help() {
  return (
    <div css={styles.help}>
      <h1>Hilfe zur Benutzung</h1>
      <h2>Bedienung</h2>
      <p>
        In der Gallerie kann man mit Scrolling oder nach oben oder unten wischen
        die Bilder erkunden. Wenn man lange auf ein Bild klickt oder lange
        darauf tippt, vergrössert es sich und man sieht noch mehr Informationen
        zum Bild. Auf dem Smartphone muss man noch einmal auf den Bildschirm
        tippen, um den Vollbildmodus wieder zu verlassen.
      </p>
      <h2>FAQ</h2>
      <h5>Was ist ein Sol?</h5>
      <p>
        Ein Sol ist ein Marstag, also die Zeit die der Planet benötigt sich
        einmal um seine eigene Achse zu drehen. Ein Sol dauert 24 Stunden, 39
        Minuten und 35,244 Sekunden. In der Gallerie werden die Sols ab Landung
        des Rovers angegeben.
      </p>
    </div>
  );
}

export default Help;