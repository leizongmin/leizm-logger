import { format as formatString } from "util";
import * as clc from "cli-color";

export function leftPad(n: number) {
  return n < 10 ? "0" + n : String(n);
}

export function getISODateString(date: Date = new Date()) {
  return (
    date.getFullYear() +
    "-" +
    leftPad(date.getMonth() + 1) +
    "-" +
    leftPad(date.getDate()) +
    "T" +
    leftPad(date.getHours()) +
    ":" +
    leftPad(date.getMinutes()) +
    ":" +
    leftPad(date.getSeconds()) +
    "." +
    (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
    "+" +
    leftPad(-date.getTimezoneOffset() / 60) +
    ":00"
  );
}

export class Logger {
  protected readonly prefix: string;
  public color: boolean = true;

  constructor(prefix: string = "") {
    this.prefix = prefix ? prefix + " " : "";
  }

  protected writeLine(isError: boolean, level: string, str: string): void {
    if (this.color) {
      this.writeLineWithColor(isError, level, str);
    } else {
      this.writeLineNoColor(isError, level, str);
    }
  }

  private writeLineWithColor(isError: boolean, level: string, str: string): void {
    const line =
      clc.blackBright(clc.inverse(getISODateString())) + " [" + level + "]" + " " + clc.cyan(this.prefix) + str + "\n";
    this._write(isError, line);
  }

  private writeLineNoColor(isError: boolean, level: string, str: string): void {
    const line = clc.inverse(getISODateString()) + " [" + level + "]" + " " + this.prefix + str + "\n";
    this._write(isError, line);
  }

  private _write(isError: boolean, str: string) {
    if (isError) {
      process.stderr.write(str);
    } else {
      process.stdout.write(str);
    }
  }

  /**
   * 输出DEBUG信息
   * @param format
   * @param param
   */
  public debug(format: any, ...param: any[]): void {
    this.writeLine(false, "DEBUG", clc.blackBright(formatString(format, ...param)));
  }

  /**
   * 输出INFO信息
   * @param format
   * @param param
   */
  public info(format: any, ...param: any[]): void {
    this.writeLine(false, "INFO", formatString(format, ...param));
  }

  /**
   * 输出WARN信息
   * @param format
   * @param param
   */
  public warn(format: any, ...param: any[]): void {
    this.writeLine(true, "WARN", clc.yellow(formatString(format, ...param)));
  }

  /**
   * 输出ERROR信息
   * @param format
   * @param param
   */
  public error(format: any, ...param: any[]): void {
    this.writeLine(true, "ERROR", clc.red(formatString(format, ...param)));
  }

  /**
   * 输出FATAL信息，并结束进程
   * @param format
   * @param param
   */
  public fatal(format: any, ...param: any[]): void {
    this.writeLine(true, "FATAL", clc.bgRed.whiteBright(formatString(format, ...param)));
    process.exit(1);
  }

  /**
   * 绑定字符串前缀，返回新的Logger
   * @param prefix
   */
  public bindPrefix(prefix: string) {
    const a = new Logger(this.prefix + prefix);
    a.color = this.color;
    return a;
  }
}

export default new Logger();
