import { TimesBase } from './TimesBase';
export declare class AtLeastTimes extends TimesBase {
    constructor(expected: number);
    match(actual: number): boolean;
}
