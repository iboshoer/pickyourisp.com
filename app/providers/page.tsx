import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";
import { PROVIDERS, providerLogoPath } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Internet providers · PickYourISP",
  description: "Directory of 14 national ISP profiles (PYI-014). PLACEHOLDER stubs until Research verifies facts.",
  robots: {
    index: false,
    follow: false,
  },
};

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
              Logos are for identification only. Tech notes are public orientation from research, not
              PickYourISP coverage claims. Always verify locally. See{" "}
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROVIDERS.map((provider) => (
            <Link
              key={provider.slug}
              href={`/providers/${provider.slug}`}
              className="rounded-xl border bg-background p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex h-14 items-center">
                <Image
                  src={providerLogoPath(provider.slug)}
                  alt={`${provider.name} logo`}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="font-semibold">{provider.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">PLACEHOLDER profile</div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/#availability-tool">Check availability</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/internet">Internet technologies</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
