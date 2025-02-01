import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "🎭 Budget 2025: Where Your Money Goes to Party!",
  description:
    "Watch your savings do the disappearing act! Join us for the greatest financial circus show featuring the tax-collecting ringmaster. Warning: May cause spontaneous wallet emptying and uncontrollable laughter.",
  openGraph: {
    title: "🎭 Budget 2025: The Great Indian Tax Show",
    description:
      "💸 Your money is invited to the greatest disappearing act of 2025! BYOW (Bring Your Own Wallet). No refunds, only taxes! Special appearance by the Meme Tax Department.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k8TZW71uPRvkeqOHA4NgeKJURHng6q.png",
        width: 1200,
        height: 630,
        alt: "Budget 2025 Meme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🎭 Budget 2025: The Great Indian Tax Show",
    description:
      "💸 Warning: This budget may cause excessive taxation and uncontrollable meme creation! Side effects include empty wallets and laughing all the way to the bank.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k8TZW71uPRvkeqOHA4NgeKJURHng6q.png"],
  },
  keywords: [
    "budget 2025",
    "indian budget",
    "tax memes",
    "financial humor",
    "doorbell tax",
    "meme tax",
    "happiness tax",
  ],
  themeColor: "#f97316", // orange-500
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'