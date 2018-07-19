export default interface HomeProps {
  options?: HomeOptions;
  data: HomeData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface HomeData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface HomeOptions {}
