export default interface PodDifferencesProps {
  options?: PodDifferencesOptions;
  data: PodDifferencesData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface PodDifferencesData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface PodDifferencesOptions {}

export interface MismatchedProperty {
  name: string;
  value: string;
}

export interface Pod {
  podIp: string;
  podName: string;
  status: string;
  mismatchedProperties: MismatchedProperty[];
}

export interface PodDifferencesObject {
  msName: string;
  namespace: string;
  pods: Pod[];
  podIps: string[];
}