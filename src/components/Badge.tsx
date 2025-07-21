import { Component, ReactNode, createElement, CSSProperties } from "react";

export interface InputProps {
    content: string;
}

export class Badge extends Component<InputProps> {
    render(): ReactNode {
        let len = this.props.content.length;
        len = len === 1 ? 2 : len;
        const rt = (len - 1) * -0.75;
        const customStyle: CSSProperties = {
            right: rt + "em",
            width: len + "em"
        };

        return (
            <div className="sr-icon-badge-badge" style={customStyle}>
                {this.props.content}
            </div>
        );
    }
}
