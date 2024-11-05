// app/(security)/security/page.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mail, Shield, Lock, Bell } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SecurityPage() {
  const tableOfContents = [
    { id: "overview", title: "Overview" },
    { id: "current-measures", title: "Current Security Measures" },
    { id: "roadmap", title: "Security Roadmap" },
    { id: "report", title: "Report a Vulnerability" },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="relative flex gap-12">
        {/* Sticky Table of Contents */}
        <div className="hidden w-64 lg:block">
          <div className="sticky top-20 space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              On this page
            </h2>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block py-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl flex-1">
          <div className="mb-12 space-y-2">
            <Badge variant="outline" className="mb-4">
              Security
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              Our Security Commitment
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Transparency about our security practices and continuous
              improvement
            </p>
          </div>

          <div className="space-y-16">
            <section id="overview">
              <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                As an early-stage startup, we&aposre committed to building
                security into our foundation. While we&aposre actively working
                towards formal certifications, we maintain strong security
                practices and are transparent about our current security
                posture.
              </p>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Current Status</AlertTitle>
                <AlertDescription>
                  We&aposre currently implementing core security measures and
                  working towards industry certifications. This page will be
                  updated as we achieve new security milestones.
                </AlertDescription>
              </Alert>
            </section>

            <section id="current-measures">
              <h2 className="mb-6 text-2xl font-semibold">
                Current Security Measures
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Data Encryption",
                    description: "All data encrypted in transit using TLS 1.3",
                    icon: <Lock className="h-6 w-6" />,
                  },
                  {
                    title: "Access Controls",
                    description: "Strict access controls and authentication",
                    icon: <Shield className="h-6 w-6" />,
                  },
                  {
                    title: "Monitoring",
                    description: "Active security monitoring and logging",
                    icon: <Bell className="h-6 w-6" />,
                  },
                  {
                    title: "Regular Updates",
                    description: "Continuous security patches and updates",
                    icon: <AlertCircle className="h-6 w-6" />,
                  },
                ].map((item) => (
                  <Card key={item.title} className="p-6">
                    <div className="mb-4 text-primary">{item.icon}</div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            <section id="roadmap">
              <h2 className="mb-6 text-2xl font-semibold">Security Roadmap</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Q2 2024</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      • Implementation of enhanced logging and monitoring
                      <br />
                      • Security awareness training program
                      <br />• Formal incident response plan
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Q3 2024</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      • First external security audit
                      <br />
                      • Begin SOC 2 preparation
                      <br />• Enhanced backup and recovery procedures
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Q4 2024</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      • Initial penetration testing
                      <br />
                      • GDPR compliance implementation
                      <br />• Security documentation framework
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="report" className="space-y-6">
              <h2 className="text-2xl font-semibold">Report a Vulnerability</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We take security seriously and value the input of security
                researchers and our user community. If you believe you&aposve
                found a security vulnerability, please report it to us.
              </p>

              <Card className="p-6">
                <h3 className="mb-4 font-semibold">Contact Options</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    security@yourcompany.com
                  </Button>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Please include:
                    <br />
                    • A description of the vulnerability
                    <br />
                    • Steps to reproduce the issue
                    <br />• Any relevant screenshots or proof of concept
                  </p>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
