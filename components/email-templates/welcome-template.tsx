import React from "react"
import EmailWrapper from "./email-wrapper"
import { Container, Heading, Text } from "@react-email/components"

const WelcomeTemplate = ({ userName }: { userName: string }) => {
  return (
    <EmailWrapper previewText="Welcome to Pear AI" dir="ltr">
      <Container className="mx-auto -mt-3 max-w-[600px] rounded-xl bg-white px-8 py-5">
        <Heading as="h1">Hi {userName},</Heading>
        <Heading as="h2">Welcome to Pear AI!</Heading>
        <Text>
          We are excited to have you onboard and look forward to helping you get
          the most out of our product.
        </Text>
        <Text>
          If you have any questions or need assistance, please don't hesitate to
          reach out to us.
        </Text>
      </Container>
    </EmailWrapper>
  )
}

export default WelcomeTemplate
