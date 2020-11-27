import React from "react";

function Moodboard() {
    return (
        <iframe
            style={moodboardStyle}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLgjTmJCePvPDz1q24JA1Xs%2Fcurious.image%3Fnode-id%3D9%253A2%26viewport%3D428%252C770%252C0.303740531206131%26scaling%3Dmin-zoom"
            allowfullscreen
        ></iframe>
    );
}

const moodboardStyle = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    width: "100%",
    margin: "auto",
    height: "800px",
    display: "flex",
    alignItems: "center",
};

export default Moodboard;
