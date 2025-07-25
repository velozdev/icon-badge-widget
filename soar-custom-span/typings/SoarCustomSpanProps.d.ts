/**
 * This file was generated from SoarCustomSpan.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type SpanTypeEnum = "span" | "parent" | "custom";

export interface SoarCustomSpanContainerProps {
    readonly name: string;
    readonly class: string;
    readonly style?: CSSProperties;
    readonly tabIndex: number;
    readonly spanType: SpanTypeEnum;
    readonly customParent: string;
    readonly iconValue: EditableValue<string>;
    readonly iconColor?: EditableValue<string>;
    readonly bgColor?: EditableValue<string>;
}

export interface SoarCustomSpanPreviewProps {
    readonly class: string;
    readonly style: string;
    readonly spanType: SpanTypeEnum;
    readonly customParent: string;
    readonly iconValue: string;
    readonly iconColor: string;
    readonly bgColor: string;
}