import React from 'react';
import t from 'prop-types';
// https://react.docschina.org/docs/typechecking-with-proptypes.html

export type AlertProps = {
    kind?: 'info' | 'positive' | 'negative' | 'warning';
} & React.HTMLAttributes<any>

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const prefixCls = 'fantasy-alert';

const kinds: KindMap = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
    <div
        className={prefixCls}
        style={{
            background: kinds[kind],
        }}
        {...rest}
    >
        {children}
    </div>
);

// props类型检查
Alert.propTypes = {
    kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;