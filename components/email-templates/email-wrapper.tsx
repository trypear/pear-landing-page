import {
  Html,
  Preview,
  Body,
  Head,
  Text,
  Img,
  Row,
  Column,
  Link,
  Section,
  Heading,
} from "@react-email/components"
import * as React from "react"
import { Tailwind } from "@react-email/tailwind"

type EmailWrapperProps = {
  children: React.ReactNode
  previewText: string
  dir?: "ltr" | "rtl"
}

const EmailWrapper = ({ children, previewText, dir }: EmailWrapperProps) => {
  return (
    <Html lang="en" dir={dir}>
      <Head>
        <title>Pear AI | {previewText}</title>
      </Head>
      <Preview>{previewText as string}</Preview>
      <Tailwind>
        <Body className="mx-auto bg-gray-100 p-3">
          <Section className="mx-auto mt-2 text-center">
            <Section className="max-w-[180px]">
              <Column align="right">
                <Link href="https://trypear.ai" target="_blank">
                  {/* <Img
                    src={``} // emails supports only PNG images
                    width="35"
                    height="35"
                    alt="pearai-logo"
                    className="mx-auto"
                    style={{ marginTop: "-0.1rem" }}
                  /> */}
                  LOGO HERE
                </Link>
              </Column>
              <Column align="center">
                <Heading as="h2">Pear AI</Heading>
              </Column>
            </Section>
          </Section>

          {children}

          <Section className="mx-auto mt-2 text-center">
            <Text className="-mt-2 text-xs text-gray-500">© 2023 Pear AI</Text>
            <Link
              className="-mt-4 text-xs text-blue-500 underline"
              href="https://trypear.ai"
              target="_blank"
            >
              Contact Us
            </Link>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailWrapper
