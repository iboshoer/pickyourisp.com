import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/50 mt-auto">
      <div className="container py-12 md:py-16">
        <div className="mb-8">
          <div className="font-bold text-xl mb-4">PickYourISP</div>
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/internet" className="hover:underline">
              Internet
            </Link>
            <Link href="/methodology" className="hover:underline">
              Methodology
            </Link>
            <Link href="/disclosure" className="hover:underline">
              Disclosure
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-6 text-sm text-muted-foreground border-t pt-8">
          <div>
            <strong className="text-foreground">Compensation disclosure:</strong>
            <p className="mt-1">
              PickYourISP may later earn compensation from providers or partners when you request contact
              or take service, once relationships exist. This preview has no active paid provider relationships.{" "}
              <Link href="/disclosure" className="underline">
                Full disclosure
              </Link>
              .
            </p>
          </div>

          <div>
            <strong className="text-foreground">Accuracy:</strong>
            <p className="mt-1">
              Speeds, prices, coverage, and availability are PLACEHOLDER / EXAMPLE or labeled UNKNOWN until
              Research verifies them. Always verify with the provider.{" "}
              <Link href="/methodology" className="underline">
                Methodology
              </Link>
              .
            </p>
          </div>

          <div>
            <strong className="text-foreground">Not a carrier:</strong>
            <p className="mt-1">
              PickYourISP is a comparison / lead-service product name, not an internet service provider.
            </p>
          </div>

          <div>
            <strong className="text-foreground">Privacy:</strong>
            <p className="mt-1">
              This static preview does not collect personal information. Live lead capture is OFF.{" "}
              <Link href="/privacy" className="underline">
                Privacy
              </Link>{" "}
              ·{" "}
              <Link href="/terms" className="underline">
                Terms
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-8 pt-8 border-t text-sm text-muted-foreground">
          <span>&copy; 2026 PickYourISP · Soft Launch Preview</span>
          <div className="flex gap-4">
            <Link href="/disclosure" className="hover:underline">
              Disclosure
            </Link>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
