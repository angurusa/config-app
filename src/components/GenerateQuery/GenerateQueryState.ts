export default class GenerateQueryState {
  errorState: boolean;
  queryData: QueryData;
  update: boolean;
  copied: boolean;
}

export interface QueryData {
  host: string;
  port: string;
  namespace: string;
  msName: string;
}