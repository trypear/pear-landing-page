import { AlertCircle, Workflow, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SecurityRoadmap() {
  return (
    <section id="roadmap" className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-light tracking-tight">
            Security Roadmap
          </h2>
        </div>

        <p className="text-md text-muted-foreground">
          Our journey towards enhanced security and compliance
        </p>
      </div>

      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Current Priorities
          </h3>
          <p className="text-md">
            As we scale our platform, we&aposre focusing on strengthening our
            security infrastructure and formalizing our compliance processes.
            We&aposre actively working on SOC 2 compliance preparation, which
            will validate our security controls and demonstrate our commitment
            to protecting your data.
          </p>
          <p className="text-md">
            We&aposre also in the process of enhancing our security
            documentation to provide more transparency and guidance for our
            users. This includes detailed security practices, incident response
            procedures, and integration guidelines.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Near-Term Goals
          </h3>
          <p className="text-md">
            We&aposll be implementing more robust security measures and pursuing
            formal certifications. This includes initiating the ISO 27001
            certification process, which will provide a comprehensive framework
            for our information security management system.
          </p>
          <p className="text-md">
            We&aposre also planning to engage with external security firms for
            regular penetration testing and security assessments. These
            independent evaluations will help us identify and address potential
            vulnerabilities before they can be exploited.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Long-Term Vision
          </h3>
          <p className="text-md">
            Our long-term security strategy focuses on achieving and maintaining
            global compliance standards. We&aposre building a scalable security
            infrastructure that can adapt to emerging threats and evolving
            regulatory requirements while supporting our rapid growth.
          </p>
          <p className="text-md">
            We aim to set new standards for security in developer tools,
            combining robust protection with seamless user experience. This
            includes developing advanced threat detection systems and automated
            security controls.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <Card className="border-2 border-primary/20 p-6 transition-colors hover:border-primary/40">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <AlertCircle className="h-5 w-5" />
              <span className="text-xs font-medium uppercase tracking-wider">
                In Progress
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Core Security Foundation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Enhancing authentication systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Implementing audit logging
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Security documentation updates
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-primary/20 p-6 transition-colors hover:border-primary/40">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Workflow className="h-5 w-5" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Next Phase
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Process Maturity</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Security incident response
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Vulnerability management
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Regular penetration testing
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="border-2 border-primary/20 p-6 transition-colors hover:border-primary/40">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Shield className="h-5 w-5" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Future
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Advanced Protection</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  AI-powered threat detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Automated security controls
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none text-primary">•</span>
                  Global compliance framework
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
