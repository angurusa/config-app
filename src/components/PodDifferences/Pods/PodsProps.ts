export default interface PodsProps {
  options?: PodsOptions;
  data: PodsData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface PodsData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface PodsOptions {}
