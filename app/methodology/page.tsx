import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Methodology · PickYourISP",
  description: "How we research, verify, and present internet service provider information.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MethodologyPage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Methodology</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Research Standards</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All provider information, coverage data, pricing, and service details undergo
                  verification through our Research process before publication.
                </p>
                <p>
                  During the current preview phase, information is labeled PLACEHOLDER or UNKNOWN
                  when verification is incomplete. We do not invent data to fill gaps.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When available, our data comes from:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Official provider websites and documentation</li>
                  <li>Provider APIs and public data sources</li>
                  <li>FCC broadband coverage maps and reports</li>
                  <li>Direct provider verification</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Coverage Accuracy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Coverage, availability, speeds, and pricing vary by location and change
                  frequently. All information should be verified directly with providers.
                </p>
                <p>
                  We show honest empty states when we cannot confirm provider availability for a
                  given location, rather than displaying unverified or speculative results.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Update Frequency</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Provider information and coverage data will be updated regularly once live systems
                  are operational. Update schedules and last-verified dates will be documented when
                  the platform moves beyond preview status.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Quality Standards</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>All content must pass Quality Trust review before publication, ensuring:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Claims are sourced and verifiable</li>
                  <li>No invented or speculative data</li>
                  <li>Clear labeling of placeholder content</li>
                  <li>Accurate representation of provider offerings</li>
                  <li>Honest disclosure of limitations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild>
              <Link href="/#availability-tool">Check availability</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/disclosure">Disclosure</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
