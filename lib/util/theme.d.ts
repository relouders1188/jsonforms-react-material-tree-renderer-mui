import { Theme } from '@mui/styles';
export interface JsonFormsTheme extends Theme {
    jsonforms?: {
        input?: {
            delete?: {
                background?: string;
            };
        };
    };
}
