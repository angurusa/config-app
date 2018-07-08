export default interface IDSEProps {
  options?: IDSEOptions;
  data: IDSEData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface IDSEData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface IDSEOptions {}
