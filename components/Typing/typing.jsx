import React from "react";
import Typed from "typed.js";
import * as styles from "./typing.styles.js";

export class Typing extends React.Component {
    componentDidMount() {
        let options = {
            strings: this.props.strings,
            typeSpeed: 40,
            loop: true,
            showCursor: false,
            startDelay: 500,
            shuffle: false,
            backDelay: 1800,
        };
        this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        return (
            <div css={styles.typing}>
                <span
                    className="typer"
                    ref={(el) => {
                        this.el = el;
                    }}
                />
            </div>
        );
    }
}
