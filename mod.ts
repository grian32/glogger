import { brightBlue, cyan, format, gray } from "./deps.ts";

export default class GLogger {

    #writeToFile: boolean;
    #log: string;

    constructor (writeToFile: boolean = false) {
        this.#writeToFile = writeToFile;
        this.#log = "";
    }

    info(message: string): string | void {
        let logPart = `[${format(new Date(), "yyyy/MM/dd h:m:s a")}] []`

        // returns string or void to allow for easier testing, tests will patch console.log to return the input.
        return console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this.getDefinitionPath() + "]"))} ${gray("[INFO]")} ${message}`);
    }


    getDefinitionPath(): string | undefined {
        // ass regex, wont attempt to explain
        let stack = (new Error()).stack;
        let matchArr = stack?.match(/.+at.+ \(/gi)
        let filenameMatchArr = (stack?.match(/\w+(?:\.ts|\.js)/gi) ?? []);
        return `${filenameMatchArr[filenameMatchArr.length - 1]}@${matchArr?.slice(2, matchArr?.length)?.map(i => i.slice(7, -2)).reverse().join("/")}`;
    }
}