import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, LockIcon } from "lucide-react";

export function SecurityCommitment() {
  return (
    <section id="security-commitment" className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-light tracking-tight">
          Our Security Commitment
        </h2>

        <p className="text-md leading-relaxed text-muted-foreground">
          At PearAI, we ensure that no one can access or modify your code
          without your explicit permission. Our security-first approach combines
          robust encryption, transparent open-source practices, and strict
          privacy controls to protect your development environment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-2 border-primary/20">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg font-light">
                Open-Source Transparency
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-md text-muted-foreground">
            Our codebase is open for community review, allowing developers to
            inspect, audit, and contribute to PearAI&aposs security.
          </CardContent>
        </Card>

        <Card className="border-2 border-primary/20">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <LockIcon className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg font-light">
                End-to-End Encryption
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-md text-muted-foreground">
            Your code and data are encrypted at rest and in transit, ensuring
            maximum security throughout our infrastructure.
          </CardContent>
        </Card>
      </div>

      <p className="text-md mt-2 leading-relaxed text-muted-foreground">
        We maintain compliance with industry security standards and regularly
        update our security measures to address emerging threats. Our team
        actively monitors security alerts and implements patches promptly to
        ensure your code remains protected.
      </p>
    </section>
  );
}
