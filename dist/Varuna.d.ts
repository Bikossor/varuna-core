export declare class Varuna {
    private checklist;
    private files;
    constructor(path: string);
    addCheck(checkname: string, check: Function): void;
    run(): void;
    getResult(): Object;
}
