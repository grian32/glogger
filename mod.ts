import { brightBlue, cyan, format, green, brightCyan, yellow, red } from "./deps.ts";

export default class GLogger {

    info(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this.getDefinitionPath() + "]"))} ${green("[INFO]")} ${message}`);
    }

    debug(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this.getDefinitionPath() + "]"))} ${brightCyan("[DEBUG]")} ${message}`);
    }

    warn(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this.getDefinitionPath() + "]"))} ${yellow("[WARN]")} ${message}`);
    }

    error(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this.getDefinitionPath() + "]"))} ${red("[ERROR]")} ${message}`);
    }

    private getDefinitionPath(): string | undefined {
        // ass regex, wont attempt to explain
        let stack = (new Error()).stack;
        let matchArr = stack?.match(/.+at.+ \(/gi)
        let filenameMatchArr = (stack?.match(/\w+(?:\.ts|\.js)/gi) ?? []);
        return matchArr?.slice(2, matchArr?.length).length != 0 ? `${filenameMatchArr[filenameMatchArr.length - 1]}@${matchArr?.slice(2, matchArr?.length)?.map(i => i.slice(7, -2)).reverse().join("/")}` : `${filenameMatchArr[filenameMatchArr.length - 1]}`;
    }
}