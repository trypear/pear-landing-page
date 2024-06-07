import WelcomeTemplate from "./welcome-template"

export enum EmailTemplates {
  WELCOME = "WELCOME",
}

export function SelectEmailTemplate(data: any) {
  switch (data.template) {
    case EmailTemplates.WELCOME:
      return WelcomeTemplate({
        userName: data.userName,
      })

    // more templates here
  }
}
