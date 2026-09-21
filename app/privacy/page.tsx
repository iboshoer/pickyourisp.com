import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Privacy Policy · PickYourISP",
  description: "Privacy policy and data practices for PickYourISP.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Preview Status</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  This preview does not collect personal information. Live lead capture is OFF.
                </p>
                <p>
                  During the current soft launch preview phase, the PickYourISP platform operates as
                  a static demonstration with client-side-only forms. No personal data is collected,
                  stored, or transmitted.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Information Collection (Future)</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When the platform becomes operational, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Contact information:</strong> Name, email, phone number, and address
                    when you request provider contact
                  </li>
                  <li>
                    <strong>Location data:</strong> ZIP code or address for availability checks
                  </li>
                  <li>
                    <strong>Usage data:</strong> Pages visited, interactions, and preferences
                  </li>
                  <li>
                    <strong>Technical data:</strong> IP address, browser type, device information
                  </li>
                </ul>
                <p className="mt-4">All collection will be with clear consent and disclosure.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Use of Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When operational, collected information will be used to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Connect you with internet service providers</li>
                  <li>Show availability and options for your location</li>
                  <li>Improve platform functionality and user experience</li>
                  <li>Communicate about services and updates (with consent)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  When you request contact from a provider, your information will be shared with
                  that provider so they can respond to your inquiry.
                </p>
                <p>
                  We will not sell your personal information to third parties. Any data sharing will
                  be disclosed at the point of collection.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This preview does not use cookies or tracking technologies. When the platform goes
                  live, cookie usage will be disclosed and controlled through a consent mechanism.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When operational, you will have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Questions about privacy practices should be directed to the contact information
                  provided on our{" "}
                  <Link href="/contact" className="underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild>
              <Link href="/#availability-tool">Check availability</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/terms">Terms of Service</Link>
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
