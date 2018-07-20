export default interface PodsProps {
  options?: PodsOptions;
  data: PodsData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface PodsData {
  pod: Pod;
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface PodsOptions {}

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