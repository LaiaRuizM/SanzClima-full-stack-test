import { Header } from "./components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sanz Clima full stack test</title>
      </head>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
