import { brightBlue, cyan, format, green, brightCyan, yellow, red } from "./deps.ts";

export default class GLogger {

    private _location: string = "";

    constructor(location: string) {
        this._location = location;
    }

    info(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${green("[INFO]")} ${message}`);
    }

    debug(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${brightCyan("[DEBUG]")} ${message}`);
    }

    warn(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${yellow("[WARN]")} ${message}`);
    }

    error(message: string): string | void {
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${red("[ERROR]")} ${message}`);
    }
}