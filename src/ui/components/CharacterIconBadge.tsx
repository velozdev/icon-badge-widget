import { Component, ReactNode, createElement, CSSProperties } from "react";

import { Badge } from "./Badge";

export interface InputProps {
    class: string;
    style?: CSSProperties;
    badgeContent: string;
    characters: string;
}

export class CharacterIconBadge extends Component<InputProps> {
    render(): ReactNode {
        const customClasses = "sr-icon-badge " + this.props.class;
        
        let len = this.props.badgeContent.length;
        len = len === 1 ? 2 : len;
        const rt = (((len - 1) * 0.75) * 0.6) + 2;
        const mt = 1.1 * 0.6;
        const customStyle: CSSProperties = {
            marginTop: mt + 'em',
            width: 'calc(' + rt + 'em + 2px)'
        }
        
        return (
            <div className={customClasses} style={this.props.style}>
                <div className="sr-icon-badge-container" style={customStyle}>
                    <div className="sr-icon-badge-content">
                        {this.props.characters}
                        <Badge content={this.props.badgeContent} />
                    </div>
                </div>
            </div>
        );
    }
}