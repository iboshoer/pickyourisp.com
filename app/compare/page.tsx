import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Compare Internet Providers · PickYourISP",
  description: "Compare internet service providers side by side.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComparePage() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Compare Internet Providers
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Side-by-side provider comparison coming soon. During preview, comparison features are
            limited.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8 text-center space-y-4">
            <div className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 mb-4">
              PLACEHOLDER
            </div>
            <h2 className="text-2xl font-bold">Comparison Tool Coming Soon</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The comparison tool will allow you to compare providers side-by-side on pricing,
              speeds, availability, technology, and features. This feature ships when Research
              verifies sufficient data for meaningful comparisons.
            </p>
            <p className="text-sm text-muted-foreground">
              We will not show invented comparison data. Honest empty states apply until verified
              information is available.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">What You Can Do Now</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Check Availability</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Use the ZIP code tool to check internet options at your address.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/#availability-tool">Check availability</Link>
                </Button>
              </div>
              <div>
                <h4 className="font-medium mb-2">Browse Providers</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  View the directory of 14 national ISP profiles.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/providers">Browse providers</Link>
                </Button>
              </div>
              <div>
                <h4 className="font-medium mb-2">Learn About Technology</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Understand different internet technology types.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/internet">Internet guide</Link>
                </Button>
              </div>
              <div>
                <h4 className="font-medium mb-2">Review Methodology</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  See how we research and verify provider information.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/methodology">Methodology</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}
