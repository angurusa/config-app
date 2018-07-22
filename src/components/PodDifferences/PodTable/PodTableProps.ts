import { Pod } from './../PodDifferencesProps';
export default interface PodTableProps {
  options?: PodTableOptions;
  data: PodTableData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface PodTableData {
  pod: Pod;
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface PodTableOptions {}
