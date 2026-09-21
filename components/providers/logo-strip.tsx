import Image from "next/image";
import Link from "next/link";
import { PROVIDERS, providerLogoPath } from "@/lib/providers";

export function ProviderLogoStrip() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container py-10">
        <div className="mb-6 space-y-1 text-center">
          <h2 className="text-lg font-semibold tracking-tight">
            National providers in our directory
          </h2>
          <p className="text-sm text-muted-foreground">
            Identification marks only. Not partners or endorsements.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-7 md:overflow-visible md:gap-3">
          {PROVIDERS.map((p) => (
            <Link
              key={p.slug}
              href={`/providers/${p.slug}`}
              className="flex h-20 min-w-[120px] items-center justify-center rounded-xl border bg-background px-3 shadow-sm transition hover:shadow-md"
            >
              <Image
                src={providerLogoPath(p.slug)}
                alt={`${p.name} logo`}
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
