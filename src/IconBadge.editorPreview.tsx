import { Component, ReactNode, createElement } from "react";

import { CharacterIconBadge } from "./components/CharacterIconBadge";
import { StyleIconBadge } from "./components/StyleIconBadge";

import { IconBadgePreviewProps } from "../typings/IconBadgeProps";

declare function require(name: string): string;

export class preview extends Component<IconBadgePreviewProps> {
    render(): ReactNode {
        const badgeContent = this.props.badgeContent || "";
        const iconStyle = this.props.iconStyle || "";
        const chars = this.props.characters || "";
        if (this.props.iconType === "icon") {
            return <StyleIconBadge class={this.props.class} badgeContent={badgeContent} iconStyle={iconStyle} />;
        } else {
            return <CharacterIconBadge class={this.props.class} badgeContent={badgeContent} characters={chars} />;
        }
    }
}

export function getPreviewCss(): string {
    return require("./ui/IconBadge.css");
}
