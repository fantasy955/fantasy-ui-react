import * as React from 'react';
declare const ButtonTypes: readonly ["default", "primary", "ghost", "dashed", "link", "text"];
export type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: readonly ["default", "circle", "round"];
export type ButtonShape = typeof ButtonShapes[number];
declare const ButtonHTMLTypes: readonly ["submit", "button", "reset"];
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export interface BaseButtonProps {
    type?: ButtonType;
    icon?: React.ReactNode;
    /**
     * Shape of Button
     *
     * @default default
     */
    shape?: ButtonShape;
    disabled?: boolean;
    loading?: boolean | {
        delay?: number;
    };
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    children?: React.ReactNode;
}
export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
type CompoundedComponent = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>;
declare const Button: CompoundedComponent;
export default Button;