import SearchForm from "@/components/SearchForm";
import "./globals.css";
import SWRProvider from "./swr-provider";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <SWRProvider>
        <body>
          <SearchForm />
          {children}
          {modal}
        </body>
      </SWRProvider>
    </html>
  );
}
