import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import SessionProvider from "./providers/session";
import QueryProvider from "./providers/query";
import { ComposerProvider } from "./providers/composer";
import ToastProvider from "./providers/toast";
import { ScrollProvider } from "./providers/scroll";
import { getSessionFromServer } from "@/lib/api/auth/session";
import ThemeProvider from "./providers/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s — gram.blue", default: "gram.blue" },
  description: "Your friendly Bluesky client for the web",
  metadataBase: new URL("https://gram.blue"),
  other: {
    "fc:frame": "vNext",
    "of:version": "vNext",
    "of:accepts:anonymous": "vNext",
    "of:image": "https://gram.blue/opengraph-image.png",
    "fc:frame:image": "https://gram.blue/opengraph-image.png",
    "fc:frame:button:1": "Home",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": "https://gram.blue",
    "fc:frame:button:2": "About",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": "https://gram.blue/about",
    "fc:frame:button:3": "GitHub",
    "fc:frame:button:3:action": "link",
    "fc:frame:button:3:target": "https://github.com/nekolynx/gram.blue",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionFromServer();

  return (
    <html lang="en" className="bg-skin-base">
      <head>
        {/* for making the page fullscreen on iOS when added to home */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="apple-touch-startup-image" href="/images/launch.png" media="screen and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/images/launch-(640x1136).png" media="(device-width: 640px) and (device-height: 1136px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(750x1334).png" media="(device-width: 750px) and (device-height: 1334px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(828x1792).png" media="(device-width: 828px) and (device-height: 1792px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1125x2436).png" media="(device-width: 1125px) and (device-height: 2436px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1170x2532).png" media="(device-width: 1170px) and (device-height: 2532px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1179x2556).png" media="(device-width: 1179px) and (device-height: 2556px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1206x2622).png" media="(device-width: 1206px) and (device-height: 2622px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1242x2208).png" media="(device-width: 1242px) and (device-height: 2208px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1242x2688).png" media="(device-width: 1242px) and (device-height: 2688px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1284x2778).png" media="(device-width: 1284px) and (device-height: 2778px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1290x2796).png" media="(device-width: 1290px) and (device-height: 2796px)"/>
        <link rel="apple-touch-startup-image" href="/images/launch-(1320x2868).png" media="(device-width: 1320px) and (device-height: 2868px)"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SessionProvider session={session}>
            <ScrollProvider>
              <QueryProvider>
                <ComposerProvider>{children}</ComposerProvider>
              </QueryProvider>
              <ToastProvider />
            </ScrollProvider>
          </SessionProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
