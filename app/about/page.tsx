import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "About · PickYourISP",
  description: "Learn about PickYourISP - a US internet comparison and availability platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">About PickYourISP</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                PickYourISP is a US internet comparison and availability platform designed to help
                consumers find internet service options for their address. We are{" "}
                <strong>not</strong> an internet service provider.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Built for Consumer Trust</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This platform is built on principles of transparency and honesty:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We show honest empty states when data is unavailable</li>
                  <li>All claims are sourced or clearly labeled as PLACEHOLDER / UNKNOWN</li>
                  <li>No invented coverage, pricing, or provider information</li>
                  <li>Clear disclosure of any compensation relationships</li>
                  <li>Full methodology documentation</li>
                </ul>
                <p className="text-sm mt-4">
                  <strong>Note:</strong> Press mentions will appear here when earned. We do not
                  claim fictitious media coverage or awards.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Current Status</h2>
              <p className="text-muted-foreground">
                PickYourISP is currently in soft launch preview. Many features are PLACEHOLDER until
                Research and Quality Trust processes complete. Live lead capture is OFF, and no
                personal information is collected during this phase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Not a Carrier</h2>
              <p className="text-muted-foreground">
                PickYourISP is a comparison and lead-service product name, not an internet service
                provider. We do not sell or install internet service. All service inquiries should
                be directed to the providers themselves.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild>
              <Link href="/#availability-tool">Check availability</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/methodology">Methodology</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/disclosure">Disclosure</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
