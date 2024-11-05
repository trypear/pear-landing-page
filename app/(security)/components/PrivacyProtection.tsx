import { Shield, Lock, UserCheck } from "lucide-react";

export function PrivacyProtection() {
  return (
    <section id="privacy" className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-light tracking-tight">
            Privacy & Data Protection
          </h2>
        </div>

        <p className="text-md text-muted-foreground">
          Your privacy is fundamental to our service
        </p>
      </div>

      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Privacy by Design
          </h3>
          <p className="text-md">
            At PearAI, privacy isn&apost an afterthought—it&aposs built into
            every feature from the ground up. We believe that protecting your
            data privacy is just as crucial as protecting your code. Our
            approach ensures that you maintain complete control over your data
            while still getting the most out of our platform.
          </p>
          <p className="text-md">
            We&aposve implemented strict data minimization practices, meaning we
            only collect what&aposs absolutely necessary for providing our
            service. This approach not only protects your privacy but also
            reduces potential security risks.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Your Data, Your Control
          </h3>
          <p className="text-md">
            We believe in giving you complete transparency and control over your
            data. All analytics are optional and anonymized by default. You can
            choose what data you share, and we&aposll always be clear about how
            it&aposs used. We never share or sell your data to third parties,
            and we maintain strict access controls even within our own team.
          </p>
          <p className="text-md">
            Our privacy controls are designed to be intuitive yet powerful,
            allowing you to manage your data sharing preferences with granular
            precision. Whether you&aposre an individual developer or part of a
            large team, you can customize privacy settings to match your needs.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Compliance & Standards
          </h3>
          <p className="text-md">
            While we&aposre a startup, we take compliance seriously. Our privacy
            practices are designed to meet GDPR and CCPA requirements, ensuring
            that your data is protected according to the highest international
            standards. We regularly review and update our privacy practices to
            stay current with evolving regulations and best practices.
          </p>
          <p className="text-md">
            We maintain detailed documentation of our privacy practices and are
            always transparent about any changes. Our commitment to privacy
            extends beyond mere compliance—we strive to set new standards for
            privacy protection in developer tools.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <Lock className="mt-4 h-16 w-16 text-primary" />
          <div className="space-y-1">
            <h4 className="font-medium">Data Encryption</h4>
            <p className="text-sm text-muted-foreground">
              All data is encrypted at rest and in transit using
              industry-standard protocols
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <UserCheck className="mt-4 h-16 w-16 text-primary" />
          <div className="space-y-1">
            <h4 className="font-medium">User Consent</h4>
            <p className="text-sm text-muted-foreground">
              Clear, explicit consent required for all data collection
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Shield className="mt-4 h-16 w-16 text-primary" />
          <div className="space-y-1">
            <h4 className="font-medium">Data Protection</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive safeguards and access controls
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
