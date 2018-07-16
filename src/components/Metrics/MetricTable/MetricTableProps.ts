import { MetricData } from './../MetricsProps';

export default interface MetricTableProps{
  options?: MetricTableOptions;
  data: MetricTableData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface MetricTableData {
  filterProjectName: string;
  metrics: MetricData[];
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface MetricTableOptions {}
