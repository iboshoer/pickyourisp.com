import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

const technologies = {
  fiber: {
    name: "Fiber internet",
    description: "Fiber-optic internet technology delivers data using pulses of light through thin glass or plastic cables, enabling the fastest speeds available for residential internet service.",
  },
  cable: {
    name: "Cable internet",
    description: "Cable internet uses the same coaxial cable infrastructure that delivers cable television, providing high-speed internet access that is widely available in urban and suburban areas.",
  },
  dsl: {
    name: "DSL internet",
    description: "Digital Subscriber Line (DSL) technology delivers internet service over traditional telephone lines, offering a common alternative in areas where fiber or cable infrastructure is not available.",
  },
  satellite: {
    name: "Satellite internet",
    description: "Satellite internet provides connectivity from space, making it available in remote and rural areas where terrestrial options are limited, though typically with higher latency than ground-based technologies.",
  },
  "fixed-wireless": {
    name: "Fixed wireless internet",
    description: "Fixed wireless internet transmits data from ground-based towers to a stationary antenna at your location, providing connectivity without requiring physical cable installation.",
  },
  "5g-home": {
    name: "5G home internet",
    description: "5G home internet leverages cellular 5G networks to deliver wireless home internet service, typically requiring no professional installation and offering flexibility for renters and homeowners.",
  },
};

type TechSlug = keyof typeof technologies;

export async function generateStaticParams() {
  return Object.keys(technologies).map((tech) => ({
    tech,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tech: string }>;
}): Promise<Metadata> {
  const { tech } = await params;
  const technology = technologies[tech as TechSlug];

  if (!technology) {
    return {
      title: "Technology Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${technology.name} · PickYourISP`,
    description: technology.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ tech: string }>;
}) {
  const { tech } = await params;
  const technology = technologies[tech as TechSlug];

  if (!technology) {
    notFound();
  }

  return (
    <SiteLayout>
      <section className="container py-12 md:py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            {technology.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            {technology.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>About {technology.name}</CardTitle>
              <CardDescription>
                Educational overview of this internet technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This page provides a general overview of {technology.name} technology. Actual
                speeds, availability, and performance vary by provider, location, and service plan.
              </p>

              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <p className="text-sm">
                    <strong>Note:</strong> This is educational information about internet
                    technology types. Specific provider offerings, speeds, and pricing should be
                    verified directly with service providers in your area. See our{" "}
                    <Link href="/methodology" className="underline">
                      methodology
                    </Link>{" "}
                    for how we present information.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Check Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Use our availability tool to see what options are in your area.
                </p>
                <Button asChild className="w-full" size="lg">
                  <Link href="/#availability-tool">Check your address</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learn More</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/internet">All technologies</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/providers">Browse providers</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/internet">Back to technologies</Link>
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
