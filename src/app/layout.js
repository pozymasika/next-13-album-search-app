import SearchForm from "@/components/SearchForm";
import "./globals.css";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        <SearchForm />
        {children}
        {modal}
      </body>
    </html>
  );
}
