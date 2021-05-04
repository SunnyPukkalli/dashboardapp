export interface Job {
    url: string;
    name: string;
    color: string;
    downstream: boolean;
    upstream: boolean;
    jobHealthBuildStability: string;
    jobHealthTestResult: string;
}