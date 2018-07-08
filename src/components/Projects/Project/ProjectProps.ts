export default interface ProjectProps {
  options?: ProjectOptions;
  data: ProjectData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface ProjectData {
  project: Project;
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface ProjectOptions {}

export interface Project {
  projectName: string;
  platform: string;
  projectVersion: string;
  branchName: string;
  pid: number;
  jobID: string;
  creationDate: string;
  duration: number;
  result: string;
}