import { 
  SelectInput
} from "react-admin";
import { incoterms } from 'ywemay-erp-choices/incoterms';

export function IncotermSelectInput(props) {
  return <SelectInput 
    label="incoterms.incoterm"
    source="incoterm" 
    choices={incoterms}
    {...props}
    />
}