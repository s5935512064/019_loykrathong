import "./globals.css";
import { fc_ekaluckbold, fc_ekaluckregular, Helvetica } from "@utils/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${fc_ekaluckbold.variable} ${fc_ekaluckregular.variable} ${Helvetica.variable}  `}
    >
      <body>{children}</body>
    </html>
  );
}
