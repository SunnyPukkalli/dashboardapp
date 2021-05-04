import { Culprit } from './Culprit';
import { Action } from './Action';

export interface BuildInfo {
    id: string;
    displayName: string;
    number: number;
    url: string;
    duration: number;
    building: boolean;
    result: string;
    timestamp: number;
    culprits: Culprit[];
    actions: Action[];
}