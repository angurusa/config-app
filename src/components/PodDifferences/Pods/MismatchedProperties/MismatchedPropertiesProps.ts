import { MismatchedProperty } from './../../PodDifferencesProps';

export default interface MismatchedPropertiesProps {
  options?: MismatchedPropertiesOptions;
  data: MismatchedPropertiesData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface MismatchedPropertiesData {
  mismatchedProperty: MismatchedProperty;
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface MismatchedPropertiesOptions {}
