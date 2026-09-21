import { Header } from "./header";
import { Footer } from "./footer";
import { PreviewBanner } from "./preview-banner";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <PreviewBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
