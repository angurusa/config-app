import { PodEnvPropertyMismatch } from './../../CompareInputProps';
export default interface ShowPropertyMismatchProps {
  options?: ShowPropertyMismatchOptions;
  data: PodEnvPropertyMismatch;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface ShowPropertyMismatchData {
  propertyMismatch: PodEnvPropertyMismatch;
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface ShowPropertyMismatchOptions {}
