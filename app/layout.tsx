import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const suisseIntl = localFont({
  src: [
    {
      path: "../public/fonts/SuisseIntl-Book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krea AI Home Screen",
  description:
    "Krea makes generative AI intuitive. Generate, edit, and enhance images and videos using powerful AI for free.",
  icons: {
    icon: [
      {
        url: "/images/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${suisseIntl.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
