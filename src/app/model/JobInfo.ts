import { BuildInfo } from './BuildInfo';

export interface JobInfo {

    name : string;
    displayName: string;
    url: string ;
    buildable : boolean;
    color: string;
    lastBuild : BuildInfo;
}

