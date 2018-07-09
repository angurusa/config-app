import { ProjectData } from './../ProjectsProps';

export default interface ProjectTableProps {
  options?: ProjectTableOptions;
  data: ProjectTableData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface ProjectTableData {
  filterProjectName: string;
  filterBranchName: string;
  projects: ProjectData[];
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface ProjectTableOptions {}