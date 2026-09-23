import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SiteLayout } from "@/components/layout/site-layout";
import { ProviderLogoStrip } from "@/components/providers/logo-strip";

export const metadata: Metadata = {
  title: "PickYourISP · Find internet options for your address",
  description: "US comparison and availability hub. Preview only: live matching not connected. No invented coverage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Preview · US Markets
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Find internet options for your address
            </h1>
            <p className="text-xl text-muted-foreground">
              PickYourISP is a US internet comparison and availability hub. We are{" "}
              <strong>not</strong> an internet service provider. Enter your ZIP code to check
              availability. Note: Live provider matching is not yet connected in this preview.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#availability-tool">Check availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how-it-works">How it works</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No account required. No purchases. No live lead capture.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 pt-6">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <div className="font-semibold">Not a carrier</div>
                  <div className="text-sm text-muted-foreground">
                    We do not sell or install internet service.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <div className="font-semibold">Honest empty states</div>
                  <div className="text-sm text-muted-foreground">
                    No invented providers, prices, or coverage for your ZIP.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <div className="font-semibold">Capture OFF</div>
                  <div className="text-sm text-muted-foreground">
                    This preview does not collect personal information.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card id="availability-tool" className="lg:sticky lg:top-24">
            <CardHeader>
              <CardTitle>Check availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Enter your ZIP code to check internet availability in your area. During preview,
                results are limited and for demonstration purposes only.
              </p>
              <form className="flex gap-2">
                <Input
                  type="text"
                  placeholder="5-digit ZIP"
                  pattern="\d{5}"
                  maxLength={5}
                  inputMode="numeric"
                  autoComplete="postal-code"
                  className="flex-1"
                />
                <Button type="submit">Check availability</Button>
              </form>
              <p className="text-xs text-muted-foreground" role="status">
                Client-only stub. Nothing is posted to a server.
              </p>
              <div className="rounded-lg bg-muted p-4 space-y-2">
                <p className="font-semibold text-sm">Preview: live availability not connected.</p>
                <p className="text-sm text-muted-foreground">
                  We do not invent providers for this ZIP. Browse the national provider directory
                  or check back when coverage data is live.
                </p>
                <Button asChild variant="secondary" size="sm" className="mt-2">
                  <Link href="/providers">Browse providers</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Compensation may apply when relationships exist. This preview has none.{" "}
                <Link href="/disclosure" className="underline">
                  Disclosure
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <ProviderLogoStrip />

      <section id="how-it-works" className="container py-12 md:py-24">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How PickYourISP works
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A straightforward path from checking your address to comparing internet options. This
            preview shows the platform structure with placeholder content. Live lead capture
            remains disabled until quality verification is complete.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-2xl font-bold mb-4">
                1
              </div>
              <CardTitle>Enter your address or ZIP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use the availability tool on this page. Address and ZIP are form inputs, not
                special URLs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-2xl font-bold mb-4">
                2
              </div>
              <CardTitle>See options when data exists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                When coverage data is available, we show sourced options. If incomplete, you get
                an honest empty state, not invented results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-2xl font-bold mb-4">
                3
              </div>
              <CardTitle>Compare and learn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Browse provider pages and (when published) tech and guide pages. Claims stay
                sourced or labeled PLACEHOLDER / UNKNOWN.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-2xl font-bold mb-4">
                4
              </div>
              <CardTitle>Connect later when live</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                When buyer, consent, storage, and delivery are ready, you may request contact.
                Today: live lead capture is OFF.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center mt-12 text-muted-foreground">
          This site is in preview. Some modules are PLACEHOLDER until Research and Quality Trust
          clear them.{" "}
          <Link href="/#availability-tool" className="underline">
            Check your address
          </Link>{" "}
          ·{" "}
          <Link href="/disclosure" className="underline">
            Disclosure
          </Link>{" "}
          ·{" "}
          <Link href="/methodology" className="underline">
            Methodology
          </Link>
        </p>
      </section>

      <section className="container py-12 md:py-24">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore providers</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            National ISP profiles from the approved PYI-014 publish list. Pages are PLACEHOLDER
            stubs until Research verifies facts. These are not &quot;available near you&quot; results.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/providers">Browse all 14 providers</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/internet">Internet technologies</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/methodology">Methodology</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/disclosure">Disclosure</Link>
          </Button>
        </div>
      </section>

      <section className="container py-12 md:py-24 bg-muted/50">
        <Card className="border-2">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Locations coming later</h2>
              <p className="text-muted-foreground">
                City and state pages ship when Research coverage and minimum content criteria are
                met. No invented city inventory.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/#availability-tool">Check availability</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}
