import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Layout({ meta, children, subdomain }) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div>
      <Head>
        <title>{meta?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href={meta?.logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={meta?.logo} />
        <meta name="theme-color" content="#7b46f6" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta itemProp="name" content={meta?.title} />
        <meta itemProp="description" content={meta?.description} />
        <meta itemProp="image" content={meta?.ogImage} />
        <meta name="description" content={meta?.description} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:url" content={meta?.ogUrl} />
        <meta property="og:image" content={meta?.ogImage} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Vercel" />
        <meta name="twitter:creator" content="@StevenTey" />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content={meta?.ogImage} />
      </Head>
      <div
        className={`fixed w-full ${
          scrolled ? "drop-shadow-md" : ""
        }  top-0 left-0 right-0 h-16 bg-white z-30 transition-all ease duration-150`}
      >
        {" "}
        <div className="flex justify-center items-center h-full max-w-screen-xl mx-auto px-10 sm:px-20">
          <Link href="/">
            <a className="flex justify-center items-center">
              <div className="h-8 w-8 inline-block rounded-full overflow-hidden align-middle">
                <Image
                  src={meta?.logo}
                  width={40}
                  height={40}
                  alt={meta?.title}
                />
              </div>
              <span className="inline-block ml-3 font-medium truncate">
                {meta?.title}
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-20">{children}</div>

      <div
        className="max-w-screen-xl xl:mx-auto mx-5 rounded-lg px-5 py-3 flex justify-between items-center sticky bottom-5 bg-white
       border border-gray-100 drop-shadow-lg"
      >
        <p className="font-cal text-lg">Demo Site</p>
        <a
          href="https://app.vercel.pub"
          target="_blank"
          className="font-cal text-lg bg-black text-white rounded-lg py-3 px-5"
        >
          Make your own
        </a>
      </div>
    </div>
  );
}
