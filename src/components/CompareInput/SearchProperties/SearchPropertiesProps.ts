export default interface SearchPropertiesProps {
  options?: SearchPropertiesOptions;
  data: SearchPropertiesData;
  events: SearchPropertiesEvents;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface SearchPropertiesData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface SearchPropertiesOptions {}

export interface SearchPropertiesEvents {
  onSubmitSearchProperties(properties: string): void;
}
