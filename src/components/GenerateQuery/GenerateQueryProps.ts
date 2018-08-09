export default interface GenerateQueryProps {
  options?: GenerateQueryOptions;
  data: GenerateQueryData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface GenerateQueryData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface GenerateQueryOptions {}

export interface EnvProperty {
  name: string;
  value: string;
}

export interface DummyQuery {
  namespace: string;
  msName: string;
  envProperties: EnvProperty[];
}