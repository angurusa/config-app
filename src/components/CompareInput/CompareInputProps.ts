export default interface CompareInputProps {
  options?: CompareInputOptions;
  data: CompareInputData;
}

// NOTE: This interface should include all and only data that is being passed into the component
export interface CompareInputData {
}

// NODE: This interface should include all and only the options that change the style/behavior of the component
export interface CompareInputOptions {}

export interface PodEnvPropertyMismatch {
    podIp: string;
    podName: string;
    name: string;
    expectedValue: string;
    actualValue?: string | null | object | boolean | number | undefined;
}

export interface MicroServiceOriginalData {
    msName: string;
    podEnvPropertyMismatches: PodEnvPropertyMismatch[];
}

export interface MicroServiceData {
    msName: string;
    podEnvPropertyMismatches: TransformedMismatches;
}

export interface TransformedMismatches {
    [key: string]: PodEnvPropertyMismatch[];
}