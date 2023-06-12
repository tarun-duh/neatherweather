import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  let imageUrl =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80";
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          background: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
