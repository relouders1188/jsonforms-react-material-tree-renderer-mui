import React from 'react';
import { StyledComponentProps } from '@mui/styles';
export { StyledComponentProps };
export interface ValidationProps {
    errorMessages: string;
    id: string;
}
declare const _default: React.JSXElementConstructor<Omit<ValidationProps & {
    classes: import("@mui/styles").ClassNameMap<"badge">;
} & {
    children?: React.ReactNode;
}, "classes"> & StyledComponentProps<never>>;
export default _default;
