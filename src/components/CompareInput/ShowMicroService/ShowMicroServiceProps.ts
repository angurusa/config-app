import { MicroServiceData } from './../CompareInputProps';

export default interface ShowMicroServiceProps {
  options?: ShowMicroServiceOptions;
  data: ShowMicroServiceData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface ShowMicroServiceData {
  msData: MicroServiceData;
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface ShowMicroServiceOptions {}
