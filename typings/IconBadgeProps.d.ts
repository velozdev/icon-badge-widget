/**
 * This file was generated from IconBadge.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export type IconTypeEnum = "icon" | "characters";

export interface IconBadgeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    iconType: IconTypeEnum;
    iconStyle: string;
    characters: string;
    badgeContent: EditableValue<Big | string>;
}

export interface IconBadgePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    iconType: IconTypeEnum;
    iconStyle: string;
    characters: string;
    badgeContent: string;
}
