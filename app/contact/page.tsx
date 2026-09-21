import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Contact · PickYourISP",
  description: "Contact information for PickYourISP.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Contact</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Preview Status</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PickYourISP is currently in soft launch preview. Contact information and support
                  channels will be finalized when the platform becomes operational.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">General Inquiries</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For general questions about PickYourISP, please refer to our{" "}
                  <Link href="/about" className="underline">
                    About
                  </Link>
                  {" "}page and{" "}
                  <Link href="/methodology" className="underline">
                    Methodology
                  </Link>
                  {" "}documentation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Provider Service Issues</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PickYourISP is <strong>not</strong> an internet service provider. For questions
                  about internet service, billing, installation, or support, please contact your
                  provider directly.
                </p>
                <p>
                  Visit the{" "}
                  <Link href="/providers" className="underline">
                    providers page
                  </Link>
                  {" "}to find official provider contact information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Privacy & Data</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For privacy-related inquiries, please review our{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p className="text-sm">
                  Note: During preview, no personal information is collected (live lead capture is
                  OFF).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Business & Partnerships</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Information about compensation and business relationships can be found on our{" "}
                  <Link href="/disclosure" className="underline">
                    Disclosure
                  </Link>
                  {" "}page.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild>
              <Link href="/#availability-tool">Check availability</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">About</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/disclosure">Disclosure</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
