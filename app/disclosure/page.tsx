import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Disclosure · PickYourISP",
  description: "Compensation disclosure and business relationships.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DisclosurePage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Disclosure</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Compensation</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PickYourISP may earn compensation from internet service providers or partners when
                  users request contact or take service, once such relationships exist.
                </p>
                <p className="font-semibold text-foreground">
                  Current status: This preview has no active paid provider relationships.
                </p>
                <p>
                  When compensation relationships are established, they will be clearly disclosed
                  both here and at the point where users take action.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">How Compensation Works</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  When operational, PickYourISP may earn compensation in several ways:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Lead fees:</strong> When users request contact from a provider
                  </li>
                  <li>
                    <strong>Referral fees:</strong> When users sign up for service through our
                    platform
                  </li>
                  <li>
                    <strong>Advertising:</strong> When providers advertise on the platform
                  </li>
                </ul>
                <p className="mt-4">
                  Compensation relationships do not affect our research standards, methodology, or
                  requirement for factual accuracy. All providers are held to the same verification
                  standards.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Editorial Independence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Provider information is verified through our Research process according to our
                  documented methodology. Compensation relationships do not determine which
                  providers are listed or how they are presented.
                </p>
                <p>
                  The PYI-014 national ISP list was compiled based on market presence and consumer
                  relevance, not on business relationships.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">No Lead Capture (Current)</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  During this preview phase, live lead capture is OFF. The availability check tool
                  is a client-only form stub that does not post personal information to any server.
                </p>
                <p>
                  When lead capture goes live, full privacy and consent controls will be in place,
                  and compensation for any resulting relationships will be clearly disclosed.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Links to provider official sites are provided for user convenience and
                  verification. These links currently do not contain tracking parameters or
                  affiliate identifiers.
                </p>
              </div>
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
              <Link href="/privacy">Privacy</Link>
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
