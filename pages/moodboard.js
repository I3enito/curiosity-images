import React from "react";

function Moodboard() {
    return (
        <iframe
            style={moodboardStyle}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLgjTmJCePvPDz1q24JA1Xs%2Fcurious.image%3Fnode-id%3D9%253A19%26viewport%3D701%252C553%252C0.1375698298215866%26scaling%3Dmin-zoom"
            allowfullscreen
        ></iframe>
    );
}

const moodboardStyle = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    position: "absolute",
    width: "100%",
    margin: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
};

export default Moodboard;
