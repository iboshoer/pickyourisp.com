import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

const providers = {
  "xfinity": {
    name: "Xfinity",
    displayName: "Xfinity internet",
    tagline: "Cable and fiber internet from Comcast",
    officialUrl: "https://www.xfinity.com/",
    technologies: [{ name: "Cable", slug: "cable" }],
  },
  "spectrum": {
    name: "Spectrum",
    displayName: "Spectrum internet",
    tagline: "Cable internet service from Charter Communications",
    officialUrl: "https://www.spectrum.com/",
    technologies: [{ name: "Cable", slug: "cable" }],
  },
  "cox": {
    name: "Cox",
    displayName: "Cox internet",
    tagline: "Cable internet provider serving select markets",
    officialUrl: "https://www.cox.com/",
    technologies: [{ name: "Cable", slug: "cable" }],
  },
  "verizon": {
    name: "Verizon Home Internet",
    displayName: "Verizon Home Internet",
    tagline: "Fiber and 5G home internet options",
    officialUrl: "https://www.verizon.com/",
    technologies: [
      { name: "Fiber", slug: "fiber" },
      { name: "5G home", slug: "5g-home" },
    ],
  },
  "att": {
    name: "AT&T Internet",
    displayName: "AT&T Internet",
    tagline: "Fiber and fixed wireless internet services",
    officialUrl: "https://www.att.com/",
    technologies: [
      { name: "Fiber", slug: "fiber" },
      { name: "Fixed wireless", slug: "fixed-wireless" },
    ],
  },
  "t-mobile-home-internet": {
    name: "T-Mobile Home Internet",
    displayName: "T-Mobile Home Internet",
    tagline: "5G and 4G LTE home internet",
    officialUrl: "https://www.t-mobile.com/home-internet",
    technologies: [{ name: "5G home", slug: "5g-home" }],
  },
  "frontier": {
    name: "Frontier",
    displayName: "Frontier internet",
    tagline: "Fiber internet provider",
    officialUrl: "https://frontier.com/",
    technologies: [{ name: "Fiber", slug: "fiber" }],
  },
  "quantum-fiber": {
    name: "Quantum Fiber",
    displayName: "Quantum Fiber",
    tagline: "Fiber internet from Lumen",
    officialUrl: "https://www.quantumfiber.com/",
    technologies: [{ name: "Fiber", slug: "fiber" }],
  },
  "optimum": {
    name: "Optimum",
    displayName: "Optimum internet",
    tagline: "Cable and fiber internet services",
    officialUrl: "https://www.optimum.com/",
    technologies: [{ name: "Cable", slug: "cable" }],
  },
  "google-fiber": {
    name: "Google Fiber",
    displayName: "Google Fiber",
    tagline: "Fiber internet in select cities",
    officialUrl: "https://fiber.google.com/",
    technologies: [{ name: "Fiber", slug: "fiber" }],
  },
  "brightspeed": {
    name: "Brightspeed",
    displayName: "Brightspeed internet",
    tagline: "Fiber and DSL internet provider",
    officialUrl: "https://www.brightspeed.com/",
    technologies: [
      { name: "Fiber", slug: "fiber" },
      { name: "DSL", slug: "dsl" },
    ],
  },
  "kinetic": {
    name: "Kinetic",
    displayName: "Kinetic internet",
    tagline: "Fiber internet from Windstream",
    officialUrl: "https://www.gokinetic.com/",
    technologies: [{ name: "Fiber", slug: "fiber" }],
  },
  "starlink": {
    name: "Starlink",
    displayName: "Starlink internet",
    tagline: "Satellite internet from SpaceX",
    officialUrl: "https://www.starlink.com/",
    technologies: [{ name: "Satellite", slug: "satellite" }],
  },
  "hughesnet": {
    name: "HughesNet",
    displayName: "HughesNet internet",
    tagline: "Satellite internet service",
    officialUrl: "https://www.hughesnet.com/",
    technologies: [{ name: "Satellite", slug: "satellite" }],
  },
};

type ProviderSlug = keyof typeof providers;

export async function generateStaticParams() {
  return Object.keys(providers).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = providers[slug as ProviderSlug];

  if (!provider) {
    return {
      title: "Provider Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${provider.displayName} · PickYourISP`,
    description: `${provider.tagline}. PLACEHOLDER profile until Research verifies facts.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = providers[slug as ProviderSlug];

  if (!provider) {
    notFound();
  }

  return (
    <SiteLayout>
      <section className="container py-12 md:py-24">
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 mb-4">
            PLACEHOLDER
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            {provider.displayName}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">{provider.tagline}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>About {provider.name}</CardTitle>
              <CardDescription>
                PLACEHOLDER content until Research verifies facts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Coverage information is PLACEHOLDER. Check the official site for availability in
                  your area.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Technology</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {provider.name} offers the following internet technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {provider.technologies.map((tech) => (
                    <Button key={tech.slug} asChild variant="secondary" size="sm">
                      <Link href={`/internet/${tech.slug}`}>{tech.name}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Plans and Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Pricing information is PLACEHOLDER / UNKNOWN. Always verify current plans and
                  prices directly with {provider.name}.
                </p>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <p className="text-sm">
                    <strong>Research note:</strong> This profile is a placeholder stub from the
                    PYI-014 national ISP list. Content will be added when Research verification is
                    complete. No invented data.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Official Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <a
                    href={provider.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {provider.name}
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Always verify availability, pricing, and service details directly with the
                  provider.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Check Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Use our availability tool to check for internet options in your area.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/#availability-tool">Check your ZIP</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/providers">Back to all providers</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/methodology">Methodology</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/disclosure">Disclosure</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
