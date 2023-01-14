import React from 'react';
export type AlertProps = {
    kind?: 'info' | 'positive' | 'negative' | 'warning';
} & React.HTMLAttributes<any>;
export type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
