import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold">
            PY
          </span>
          <span>PickYourISP</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-auto text-sm font-medium">
          <Link href="/#availability-tool" className="transition-colors hover:text-primary">
            Check availability
          </Link>
          <Link href="/providers" className="transition-colors hover:text-primary">
            Providers
          </Link>
          <Link href="/internet" className="transition-colors hover:text-primary">
            Internet
          </Link>
          <Link href="/compare" className="transition-colors hover:text-primary">
            Compare
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
