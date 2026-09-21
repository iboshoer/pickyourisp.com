import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout/site-layout";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="container py-12 md:py-24">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-12 text-center space-y-6">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-3xl font-bold">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/">Go home</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/providers">Browse providers</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/disclosure">Disclosure</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}
