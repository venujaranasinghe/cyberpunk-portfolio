import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Venuja Ranasinghe | Full Stack Developer",
  description:
    "Cyberpunk-inspired portfolio showcasing innovative web development projects, cutting-edge technologies, and creative digital solutions.",
  keywords: "full stack developer, web development, react, next.js, typescript, portfolio, cyberpunk, retro, terminal",
  authors: [{ name: "Venuja Ranasinghe" }],
  creator: "Venuja Ranasinghe",
  publisher: "Alex Chen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alexchen-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Chen | Full Stack Developer",
    description:
      "Cyberpunk-inspired portfolio showcasing innovative web development projects and cutting-edge technologies.",
    url: "https://alexchen-portfolio.vercel.app",
    siteName: "Alex Chen Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Chen - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen | Full Stack Developer",
    description:
      "Cyberpunk-inspired portfolio showcasing innovative web development projects and cutting-edge technologies.",
    images: ["/og-image.png"],
    creator: "@alexchen_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          />
        </noscript>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alex Chen",
              jobTitle: "Full Stack Developer",
              description:
                "Experienced full stack developer specializing in React, Next.js, and modern web technologies",
              url: "https://alexchen-portfolio.vercel.app",
              sameAs: [
                "https://github.com/alexchen",
                "https://linkedin.com/in/alexchen",
                "https://twitter.com/alexchen_dev",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Web Development",
                "Full Stack Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Stanford University",
              },
              worksFor: {
                "@type": "Organization",
                name: "Tech Innovations Inc.",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
        {/* Global Loading Indicator */}
        <div
          id="global-loading"
          className="fixed inset-0 bg-black z-50 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300"
        >
          <div className="flex items-center space-x-2 text-green-400 font-mono">
            <div className="w-4 h-4 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin"></div>
            <span>LOADING...</span>
          </div>
        </div>

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-500 text-black px-4 py-2 rounded font-mono font-bold z-50"
        >
          Skip to main content
        </a>

        {/* Main Content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Global Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Hide loading indicator after page load
              window.addEventListener('load', function() {
                const loader = document.getElementById('global-loading');
                if (loader) {
                  loader.style.opacity = '0';
                  setTimeout(() => {
                    loader.style.display = 'none';
                  }, 300);
                }
              });

              // Add smooth scrolling behavior
              document.documentElement.style.scrollBehavior = 'smooth';

              // Console easter egg for developers
              console.log('%c🚀 WELCOME TO THE MATRIX 🚀', 'color: #22c55e; font-size: 20px; font-weight: bold; font-family: monospace;');
              console.log('%cLooking for a developer? Let\\'s connect!', 'color: #22c55e; font-family: monospace;');
              console.log('%cEmail: alex.chen@matrix.dev', 'color: #22c55e; font-family: monospace;');
              console.log('%cGitHub: github.com/alexchen', 'color: #22c55e; font-family: monospace;');
            `,
          }}
        />

        {/* Analytics (replace with your tracking code) */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
