import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Writing Coach — 60-second diagnostic",
  description:
    "Paste three emails you sent. Get two patterns weakening your writing — with quoted lines — plus a five-minute drill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wwmy85jdj7");
</script> <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
