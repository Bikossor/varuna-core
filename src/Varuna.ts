import { Fetcher } from "./Fetcher";

export class Varuna {
    private checklist: Object;
    private files: Object;

    constructor(path: string) {
        if (!path || typeof path != "string") {
            throw new Error("Varuna needs a path!");
        }

        this.checklist = {};

        this.files = Fetcher.fetch(path);
    }

    public addCheck(checkname: string, check: Function) {
        this.checklist[checkname] = check;
    }

    public run() {
        for (var checkname in this.checklist) {
            this.checklist[checkname].result = this.checklist[checkname](this.files);
        }
    }

    public getResult() {
        return this.checklist;
    }
}