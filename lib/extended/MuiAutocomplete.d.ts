import { ReactNode } from 'react';
import { EnumCellProps, EnumOption, WithClassname } from '@jsonforms/core';
import { AutocompleteRenderOptionState } from '@mui/material/Autocomplete';
import { FilterOptionsState } from '@mui/material/useAutocomplete';
export interface WithOptionLabel {
    getOptionLabel?(option: EnumOption): string;
    renderOption?(option: EnumOption, state: AutocompleteRenderOptionState): ReactNode;
    filterOptions?(options: EnumOption[], state: FilterOptionsState<EnumOption>): EnumOption[];
}
export declare const MuiAutocomplete: (props: EnumCellProps & WithClassname & WithOptionLabel) => JSX.Element;
