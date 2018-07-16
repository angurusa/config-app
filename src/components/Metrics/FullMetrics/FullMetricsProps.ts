import { RouteComponentProps } from 'react-router-dom';

export default interface FullMetricsProps extends RouteComponentProps<FullMetricsRouterProps>{
  options?: FullMetricsOptions;
  data: FullMetricsData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface FullMetricsData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface FullMetricsOptions {}

export interface FullMetricsRouterProps {
  projectName: string;
}