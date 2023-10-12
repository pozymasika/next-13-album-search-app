import SearchForm from "@/components/SearchForm";
import "./globals.css";
import Genres from "@/components/Genres";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <title>Albums</title>
      <body>
        <SearchForm />
        <Genres />

        {children}
        {modal}
      </body>
    </html>
  );
}
