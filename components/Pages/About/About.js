import React from "react";
import * as styles from "./About.styles.js";

function About() {
  return (
    <div css={styles.about}>
      <h1>About curious.images</h1>
      <p>
        curious.images ist ein Studentenprojekt, welches innerhalb von 3 Wochen
        realisiert wurde. Der Begeisterung für das Weltall und Raumfahrt haben
        diese intuitive Plattform hervorgebracht. Die Bilder die in den
        Gallerien verwendet werden sind die offiziellen Aufnahmen der NASA
        Rover, welche auf dem Mars seit Jahren unschätzbare Forschung betreiben.
      </p>
      <p>
        Technisch wurde diese Webapplikation im Frontend mit Next.js umgesetzt.
        Das Backend wurde mit einem Node server in Typescript geschrieben.
      </p>
    </div>
  );
}

export default About;