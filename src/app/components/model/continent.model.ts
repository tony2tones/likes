export class Continent {
  constructor(
    public name: string,
    public code: string) { }
}

export interface ContinentsModel {
  continent: {
    name: "string";
    code: "string";
  }
}
