import {
  FieldLabel as AccountFormFieldLabel,
  FieldName as AccountFormFieldName,
} from './CollapsableFields/Account/definitions';
import { Tab } from './CollapsableFields/definitions';

export const dndType = 'FormField';

// next 2 lines are extendable for other tabs
export type FieldName = AccountFormFieldName;
export type FieldLabel = AccountFormFieldLabel;

export interface DndItem {
  name: FieldName;
  tab: Tab;
}
