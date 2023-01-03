/* eslint-disable react/button-has-type */
import * as React from 'react';
import DisabledContext from '../config-provider/DisabledContext';

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];

const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = typeof ButtonShapes[number];

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
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
    // size?: SizeType;
    disabled?: boolean;
    loading?: boolean | { delay?: number };
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    children?: React.ReactNode;
}

// Typescript will make optional not optional if use Pick with union.
// Should change to `AnchorButtonProps | NativeButtonProps` and `any` to `HTMLAnchorElement | HTMLButtonElement` if it fixed.
// ref: https://github.com/ant-design/ant-design/issues/15930
export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

type CompoundedComponent = React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLElement>
>;

type Loading = number | boolean;

const InternalButton: React.ForwardRefRenderFunction<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
> = (props, ref) => {
    const {
        loading = false,
        prefixCls: customizePrefixCls,
        type = 'default',
        danger,
        shape = 'default',
        // size: customizeSize,
        disabled: customDisabled,
        className,
        children,
        icon,
        ghost = false,
        block = false,
        /** If we extract items here, we don't need use omit.js */
        // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
        htmlType = 'button' as ButtonProps['htmlType'],
        ...rest
    } = props;

    // ===================== Disabled =====================
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = customDisabled ?? disabled;

    const [innerLoading, _] = React.useState<Loading>(!!loading);
    const buttonRef = (ref as any) || React.createRef<HTMLAnchorElement | HTMLButtonElement>();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        // https://github.com/ant-design/ant-design/issues/30207
        if (innerLoading || mergedDisabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    };

    const kids =
        children || children === 0
            ? children
            : null;

    let buttonNode = (
        <button
            {...(rest as NativeButtonProps)}
            type={htmlType}
            className={className}
            onClick={handleClick}
            disabled={mergedDisabled}
            ref={buttonRef}
        >
            {kids}
        </button>
    );

    return buttonNode;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    InternalButton,
) as CompoundedComponent;

export default Button;