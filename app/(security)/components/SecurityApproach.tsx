import { Separator } from "@/components/ui/separator";
import { Lock, Eye, Key, Code } from "lucide-react";

export function SecurityApproach() {
  return (
    <section id="security-approach" className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-light tracking-tight">
          Our Security Approach
        </h2>
        <p className="text-md text-muted-foreground">
          Security isn&apost just a feature—it&aposs fundamental to everything
          we build at PearAI.
        </p>
      </div>

      <div className="space-y-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-xl">End-to-End Encryption</h3>
          </div>

          <div className="text-md space-y-4 leading-relaxed text-muted-foreground">
            <p>
              We implement enterprise-grade encryption throughout our entire
              infrastructure because we believe your code deserves the highest
              level of protection. Using <a className="font-bold">TLS 1.3</a>{" "}
              for data in transit and <a className="font-bold">AES-256</a> for
              data at rest, we ensure your intellectual property remains secure
              at every step of the development process.
            </p>
            <p>
              Our encryption protocols aren&apost just about using strong
              algorithms—they&aposre about creating a completely secure
              environment where you can develop with confidence, knowing your
              code is protected by the same standards used by leading financial
              institutions.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-xl">Open-Source Security</h3>
          </div>

          <div className="text-md space-y-4 leading-relaxed text-muted-foreground">
            <p>
              We believe in the power of transparency. By making our security
              implementations open source, we invite scrutiny from the global
              security community. This approach not only helps us maintain the
              highest security standards but also allows our users to verify and
              trust our security measures directly.
            </p>
            <p>
              Through our open-source commitment, we&aposve built a
              collaborative security ecosystem where vulnerabilities are
              identified and addressed quickly, ensuring our platform remains
              resilient against emerging threats. This transparency also enables
              our users to better understand and integrate with our security
              features.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-xl">Privacy-First Development</h3>
          </div>

          <div className="text-md space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Privacy is at the core of our development philosophy. We&aposve
              designed our systems with a &quotprivacy by default&quot approach,
              ensuring that your development process remains completely private
              unless explicitly shared. This means you maintain full control
              over your code and data at all times.
            </p>
            <p>
              We understand that privacy requirements vary across organizations
              and projects. That&aposs why we&aposve built flexible privacy
              controls that can be tailored to your specific needs, while
              maintaining our strict baseline of privacy protection. Our
              approach ensures compliance with global privacy standards while
              providing the flexibility you need.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-lg border-2 border-primary/10 bg-primary/5 p-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">
              A Note About Our Team
            </h4>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                As an early-stage startup with a small team, we believe in being
                transparent with our users. While we&aposre trusted by thousands
                of engineers and maintain high security standards, we
                acknowledge that we&aposre growing and learning.
              </p>
              <p>
                Our commitment is to be open about our limitations, quick to
                address issues, and honest about our capabilities. We prioritize
                rapid response to security concerns and maintain open
                communication with our user community. When we make mistakes, we
                fix them quickly and learn from them to build a more secure
                platform.
              </p>
            </div>
          </div>
        </div>
        <Separator />
      </div>
    </section>
  );
}
