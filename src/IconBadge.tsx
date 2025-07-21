import { Component, ReactNode, createElement } from "react";

import { CharacterIconBadge } from "./components/CharacterIconBadge";
import { StyleIconBadge } from "./components/StyleIconBadge";

import { IconBadgeContainerProps } from "../typings/IconBadgeProps";

import "./ui/IconBadge.css";

export class IconBadge extends Component<IconBadgeContainerProps> {
    render(): ReactNode {
        const badgeContent = this.props.badgeContent.displayValue || "";
        const iconStyle = this.props.iconStyle || "";
        const chars = this.props.characters || "";
        if (this.props.iconType === "icon") {
            return (
                <StyleIconBadge
                    class={this.props.class}
                    style={this.props.style}
                    badgeContent={badgeContent}
                    iconStyle={iconStyle}
                />
            );
        } else {
            return (
                <CharacterIconBadge
                    class={this.props.class}
                    style={this.props.style}
                    badgeContent={badgeContent}
                    characters={chars}
                />
            );
        }
    }
}
