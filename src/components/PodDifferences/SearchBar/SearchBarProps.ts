export default interface SearchBarProps {
  options?: SearchBarOptions;
  data: SearchBarData;
  events: SearchBarEvents;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface SearchBarData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface SearchBarOptions {}

export interface SearchBarEvents {
  onChangeMsName(namespace: string, msName: string): void;
}

export interface MsDetails {
  msName: string;
}