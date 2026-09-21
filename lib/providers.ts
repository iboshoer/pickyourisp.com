export type Provider = {
  name: string;
  slug: string;
  url: string;
  tagline?: string;
};

export const PROVIDERS: Provider[] = [
  { name: "Xfinity", slug: "xfinity", url: "https://www.xfinity.com/", tagline: "Cable and fiber internet from Comcast" },
  { name: "Spectrum", slug: "spectrum", url: "https://www.spectrum.com/", tagline: "Cable internet service from Charter Communications" },
  { name: "Cox", slug: "cox", url: "https://www.cox.com/", tagline: "Cable internet provider serving select markets" },
  { name: "Verizon Home Internet", slug: "verizon", url: "https://www.verizon.com/", tagline: "Fiber and 5G home internet options" },
  { name: "AT&T Internet", slug: "att", url: "https://www.att.com/", tagline: "Fiber and fixed wireless internet services" },
  { name: "T-Mobile Home Internet", slug: "t-mobile-home-internet", url: "https://www.t-mobile.com/home-internet", tagline: "5G and 4G LTE home internet" },
  { name: "Frontier", slug: "frontier", url: "https://frontier.com/", tagline: "Fiber internet provider" },
  { name: "Quantum Fiber", slug: "quantum-fiber", url: "https://www.quantumfiber.com/", tagline: "Fiber internet from Lumen" },
  { name: "Optimum", slug: "optimum", url: "https://www.optimum.com/", tagline: "Cable and fiber internet services" },
  { name: "Google Fiber", slug: "google-fiber", url: "https://fiber.google.com/", tagline: "Fiber internet in select cities" },
  { name: "Brightspeed", slug: "brightspeed", url: "https://www.brightspeed.com/", tagline: "Fiber and DSL internet provider" },
  { name: "Kinetic", slug: "kinetic", url: "https://www.gokinetic.com/", tagline: "Fiber internet from Windstream" },
  { name: "Starlink", slug: "starlink", url: "https://www.starlink.com/", tagline: "Satellite internet from SpaceX" },
  { name: "HughesNet", slug: "hughesnet", url: "https://www.hughesnet.com/", tagline: "Satellite internet service" },
];

export function providerLogoPath(slug: string) {
  return `/assets/images/providers/${slug}.svg`;
}
