import "salesforce-lib/dist/index.css";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import TranslationProvider from "@/providers/TranslationProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import AuthProvider from "@/providers/AuthProvider";
import { cn } from "@/utils/cn";

const montserrat = Montserrat({
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
      className={cn(montserrat.className, "bg-bg-1 lg:bg-bg-2 customScroll")}
    >
      <body>
        <TranslationProvider>
          <ThemeProvider>
            <AuthProvider>
              {children}
              <Toaster />
            </AuthProvider>
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
