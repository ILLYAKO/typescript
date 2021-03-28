///<reference path="form-namespace.ts" />

namespace Form1 {
  class MyForm {
    private type: FormType = "inline";
    private state: FormState = "active";

    constructor(public email: string) {}

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state,
      };
    }
  }

  const MyForm1 = new MyForm("il@mail.com");
}
