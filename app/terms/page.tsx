import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Terms of Service · PickYourISP",
  description: "Terms of service for using PickYourISP.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Terms of Service</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Preview Status</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PickYourISP is currently in soft launch preview. These terms apply to your use of
                  the preview platform and will be updated when the platform moves to full
                  operation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Service Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PickYourISP is an internet service provider comparison and availability platform.
                  We are <strong>not</strong> an internet service provider and do not sell or
                  install internet service.
                </p>
                <p>
                  Our service helps users find information about internet options available at their
                  location and facilitates contact with providers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Information Accuracy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  During preview, information is labeled PLACEHOLDER or UNKNOWN when verification is
                  incomplete. Even when operational, availability, pricing, speeds, and other
                  details are subject to change and should always be verified directly with
                  providers.
                </p>
                <p>
                  We make reasonable efforts to provide accurate information but make no guarantees
                  about availability or accuracy of provider data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">No Service Commitment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PickYourISP is not responsible for provider service quality, installation,
                  billing, support, or any other aspect of internet service. All service
                  relationships are directly between you and the provider.
                </p>
                <p>We do not guarantee that any particular provider is available at your location.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our platform includes links to provider websites. We are not responsible for the
                  content, privacy practices, or terms of third-party sites.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide false or misleading information</li>
                  <li>Attempt to access unauthorized areas of the platform</li>
                  <li>Use automated tools to scrape or collect data</li>
                  <li>Interfere with platform operation or other users</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PickYourISP is provided &quot;as is&quot; without warranties. We are not liable
                  for any damages arising from use of the platform or reliance on information
                  provided.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These terms may be updated as the platform evolves. Continued use after changes
                  constitutes acceptance of updated terms.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild>
              <Link href="/#availability-tool">Check availability</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/privacy">Privacy Policy</Link>
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
