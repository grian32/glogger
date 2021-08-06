import { brightBlue, cyan, format, green, brightCyan, yellow, red, ensureDirSync } from "./deps.ts";

export default class GLogger {

    private _location: string = "";
    private _logToFile: boolean;
    private _logFolder: string;
    private _date: string;

    constructor(location: string, logToFile: boolean = false, logFolder: string = "logs") {
        this._location = location;
        this._logToFile = logToFile;
        this._logFolder = logFolder;
        this._date = format(new Date(), "yyyy|MM|dd");
    }

    info(message: string): void {
        let noColorMsg = `[${format(new Date(), "yyyy/MM/dd h:mm:ss a")}] [${this._location}] [INFO] ${message}`;
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${green("[INFO]")} ${message}`);
        if (this._logToFile) {
            this.writeToFile(noColorMsg);
        }
    }

    debug(message: string): void {
        let noColorMsg = `[${format(new Date(), "yyyy/MM/dd h:mm:ss a")}] [${this._location}] [DEBUG] ${message}`;
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${brightCyan("[DEBUG]")} ${message}`);
        if (this._logToFile) {
            this.writeToFile(noColorMsg);
        }
    }

    warn(message: string): void {
        let noColorMsg = `[${format(new Date(), "yyyy/MM/dd h:mm:ss a")}] [${this._location}] [WARN] ${message}`;
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${yellow("[WARN]")} ${message}`);
        if (this._logToFile) {
            this.writeToFile(noColorMsg);
        }
    }

    error(message: string): void {
        let noColorMsg = `[${format(new Date(), "yyyy/MM/dd h:mm:ss a")}] [${this._location}] [ERROR] ${message}`;
        console.log(`${cyan(("[" + format(new Date(), "yyyy/MM/dd h:mm:ss a") + "]"))} ${brightBlue(("[" + this._location + "]"))} ${red("[ERROR]")} ${message}`);
        if (this._logToFile) {
            this.writeToFile(noColorMsg);
        }
    }

    private writeToFile(noColorMsg: string): void {
        ensureDirSync(this._logFolder);
        Deno.writeTextFileSync(`${this._logFolder}/${this._date}.log`, noColorMsg + "\n", {append: true, create: true});
    }
}