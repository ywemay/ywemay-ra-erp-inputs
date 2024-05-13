import { 
  SelectInput,
} from "react-admin";

import { units } from "ywemay-erp-choices/units";

export function SelectMUInput(props) {
  return <SelectInput
    label="common.mu"
    choices={units}
    source="mu"
    defaultValue="pc"
    {...props}
    />
}