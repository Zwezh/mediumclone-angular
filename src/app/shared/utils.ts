export class Utils {
  static range(start: number, end: number): number[] {
    return [...new Array(end).keys()].map((el: number) => el + start);
  }
}
