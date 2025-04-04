import "salesforce-lib/dist/index.css";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat as Font } from "next/font/google";
import TranslationProvider from "@/providers/TranslationProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import { cn } from "@/utils/cn";
import LoadingProvider from "@/providers/LoadingProvider";

const font = Font({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salesforce",
  description: "Inventory managing app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(font.className, "bg-bg-1 lg:bg-bg-2 customScroll")}
    >
      <body>
        <TranslationProvider>
          <ThemeProvider>
            <LoadingProvider>
              {children}
              <Toaster />
            </LoadingProvider>
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
