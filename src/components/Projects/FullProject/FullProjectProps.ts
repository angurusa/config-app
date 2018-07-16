import { RouteComponentProps } from 'react-router-dom';

export default interface FullProjectProps extends RouteComponentProps<FullProjectRouterProps>{
  options?: FullProjectOptions;
  data: FullProjectData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface FullProjectData {}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface FullProjectOptions {}

export interface FullProjectRouterProps {
  projectName: string;
  branchName: string;
}