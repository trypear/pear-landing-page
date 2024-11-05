import { FileCode, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OpenSourceSecurity() {
  return (
    <section id="opensource" className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-light tracking-tight">
            Open-Source Security
          </h2>
        </div>

        <p className="text-md text-muted-foreground">
          Security through transparency and community collaboration
        </p>
      </div>

      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Why Open Source?
          </h3>
          <p className="text-md">
            We believe that security is strengthened through transparency. By
            making our codebase open source, we enable developers worldwide to
            review, analyze, and improve our security measures. This approach
            ensures that potential vulnerabilities are identified and addressed
            quickly, rather than remaining hidden behind closed doors.
          </p>
          <p>
            Open-source security isn&apost just about code visibility—it&aposs
            about building trust through transparency. When you can see exactly
            how your data is protected, you can make informed decisions about
            your security.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            Community Collaboration
          </h3>
          <p className="text-md">
            Our security is strengthened by contributions from developers
            worldwide. Every pull request, issue report, and code review helps
            make PearAI more secure. We maintain strict contribution guidelines
            and review processes to ensure that all changes maintain or enhance
            our security standards.
          </p>
          <p>
            We actively encourage security researchers and developers to review
            our code, report issues, and suggest improvements. This
            collaborative approach has helped us build a more robust and
            reliable platform.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">
            How to Contribute
          </h3>
          <p className="text-md">
            Whether you&aposre a security researcher, developer, or enthusiast,
            there are many ways to contribute to PearAI&aposs security. You can
            review our code, participate in discussions, report vulnerabilities,
            or submit improvements through pull requests.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Button variant="outline" className="gap-2" asChild>
              <a
                href="https://github.com/trypear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a
                href="https://github.com/trypear/pearai-master/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribution Guidelines
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
