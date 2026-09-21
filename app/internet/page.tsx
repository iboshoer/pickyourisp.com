import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Internet Technology Guide · PickYourISP",
  description: "Learn about different types of internet technology: fiber, cable, DSL, satellite, fixed wireless, and 5G home.",
  robots: {
    index: false,
    follow: false,
  },
};

const technologies = [
  {
    name: "Fiber",
    slug: "fiber",
    description: "Fastest internet technology using fiber-optic cables for symmetrical speeds up to multiple gigabits.",
  },
  {
    name: "Cable",
    slug: "cable",
    description: "High-speed internet via coaxial cable infrastructure, widely available in urban and suburban areas.",
  },
  {
    name: "DSL",
    slug: "dsl",
    description: "Digital Subscriber Line delivers internet over telephone lines, common in areas without fiber or cable.",
  },
  {
    name: "Satellite",
    slug: "satellite",
    description: "Internet from space, available almost anywhere but typically with higher latency.",
  },
  {
    name: "Fixed Wireless",
    slug: "fixed-wireless",
    description: "Wireless internet from ground-based towers to a fixed location antenna.",
  },
  {
    name: "5G Home",
    slug: "5g-home",
    description: "Wireless home internet using 5G cellular networks, no installation required.",
  },
];

export default function InternetPage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Internet Technology Guide
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Understanding different types of internet technology can help you choose the best option
            for your needs. Availability varies by location.
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Technology descriptions are educational overviews. Actual
              speeds, availability, and performance depend on provider, location, and plan. Content
              marked PLACEHOLDER awaits Research verification. See{" "}
              <Link href="/methodology" className="underline">
                methodology
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <Card key={tech.slug} className="hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>{tech.name}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/internet/${tech.slug}`}>Learn more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see what&apos;s available at your address?
          </p>
          <Button asChild size="lg">
            <Link href="/#availability-tool">Check availability</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
