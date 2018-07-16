export default interface MetricsProps {
  options?: MetricsOptions;
  data: MetricsData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface MetricsData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface MetricsOptions {}

export interface MetricData {
  projectName: string;
  avgDuration: number;
  successPercentage: number;
  mttr: number;
}
