import React from "react";
import * as styles from "./About.styles.js";

function About() {
    return (
        <div css={styles.about}>
            <h1>About curious.images</h1>
            <p className="projekt-beschreibung">
                curious.images ist ein Studierendenprojekt, welches innerhalb
                von 3 Wochen realisiert wurde. Die Begeisterung für das Weltall
                und die Raumfahrt haben diese intuitive Plattform
                hervorgebracht. Die Bilder, die in den Gallerien verwendet
                werden, sind offizielle Aufnahmen der NASA Rover, welche auf dem
                Mars seit Jahren unschätzbare Forschung betreiben.
            </p>
            <p className="projekt-beschreibung">
                Technisch wurde diese Webapplikation im Frontend mit Next.js
                umgesetzt. Das Backend wurde mit einem Node-Server in Typescript
                geschrieben.
            </p>
            <div className="ueber-wrapper">
                <div className="ueber">
                    <p className="bold">Modul Web Studio 1 extended</p>
                    <p>Herbstsemester 2020</p>
                    <p>Digital Ideation</p>
                    <p>Hochschule Luzern</p>
                </div>
                <div className="ueber">
                    <p className="bold">Student*innen</p>
                    <p>Simon Müller</p>
                    <p>Ben Siegenthaler</p>
                </div>
                <div className="ueber">
                    <p className="bold">Dozent*innen</p>
                    <p>Hanna Züllig</p>
                    <p>Nick Niles</p>
                </div>
            </div>
            <p className="github">
                <a
                    className="github bold"
                    href="https://github.com/I3enito/curiosity-images"
                    target="_blank"
                >
                    Projekt auf Github
                </a>
            </p>
        </div>
    );
}

export default About;
