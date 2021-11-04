import { Theme } from '@mui/material/styles';
export interface JsonFormsTheme extends Theme {
    jsonforms?: {
        input?: {
            delete?: {
                background?: string;
            };
        };
    };
}
