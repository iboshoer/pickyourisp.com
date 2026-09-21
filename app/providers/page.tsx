import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Internet providers · PickYourISP",
  description: "Directory of 14 national ISP profiles (PYI-014). PLACEHOLDER stubs until Research verifies facts.",
  robots: {
    index: false,
    follow: false,
  },
};

const providers = [
  { name: "Xfinity", slug: "xfinity", url: "https://www.xfinity.com/" },
  { name: "Spectrum", slug: "spectrum", url: "https://www.spectrum.com/" },
  { name: "Cox", slug: "cox", url: "https://www.cox.com/" },
  { name: "Verizon Home Internet", slug: "verizon", url: "https://www.verizon.com/" },
  { name: "AT&T Internet (Fiber / Internet Air)", slug: "att", url: "https://www.att.com/" },
  { name: "T-Mobile Home Internet", slug: "t-mobile-home-internet", url: "https://www.t-mobile.com/home-internet" },
  { name: "Frontier", slug: "frontier", url: "https://frontier.com/" },
  { name: "Quantum Fiber", slug: "quantum-fiber", url: "https://www.quantumfiber.com/" },
  { name: "Optimum", slug: "optimum", url: "https://www.optimum.com/" },
  { name: "Google Fiber", slug: "google-fiber", url: "https://fiber.google.com/" },
  { name: "Brightspeed", slug: "brightspeed", url: "https://www.brightspeed.com/" },
  { name: "Kinetic", slug: "kinetic", url: "https://www.gokinetic.com/" },
  { name: "Starlink", slug: "starlink", url: "https://www.starlink.com/" },
  { name: "HughesNet", slug: "hughesnet", url: "https://www.hughesnet.com/" },
];

export default function ProvidersPage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Internet providers</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            National ISP profiles from the GM-approved PYI-014 list (14). Brand pages are PLACEHOLDER
            until Research verifies facts. This is not a coverage map, price list, or partner roster.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              Tech class notes below are public orientation from research, not PickYourISP coverage claims.
              Always verify locally. See{" "}
              <Link href="/methodology" className="underline">
                methodology
              </Link>{" "}
              and{" "}
              <Link href="/disclosure" className="underline">
                disclosure
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold">Provider</th>
                <th className="text-left p-4 font-semibold">Slug</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Official site</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider) => (
                <tr key={provider.slug} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-4">
                    <Link
                      href={`/providers/${provider.slug}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {provider.name}
                    </Link>
                  </td>
                  <td className="p-4">
                    <code className="text-sm bg-muted px-2 py-1 rounded">{provider.slug}</code>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                      PLACEHOLDER
                    </span>
                  </td>
                  <td className="p-4">
                    <a
                      href={provider.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      Official site
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Exactly 14 approved P1 slugs. Regional brands deferred to P2 are not listed here.
        </p>

        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/#availability-tool">Check availability</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
