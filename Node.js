import { motion } from "framer-motion"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function Home() { return ( <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"> <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold text-center mb-6" > 🚀 Premium Social Media Downloader API </motion.h1>

<motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="text-gray-400 text-center max-w-2xl mb-10"
  >
    Powerful & premium-quality API to download videos and media from
    multiple social platforms with blazing fast speed.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 }}
    className="grid md:grid-cols-2 gap-6 mb-12"
  >
    {[
      "TikTok",
      "YouTube",
      "Instagram",
      "Facebook",
      "Other Platforms",
    ].map((item, i) => (
      <Card key={i} className="bg-zinc-900 border border-zinc-800">
        <CardContent className="p-6 text-center text-lg">
          {item}
        </CardContent>
      </Card>
    ))}
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className="grid md:grid-cols-2 gap-6 max-w-3xl"
  >
    {[
      "Fast Response Speed",
      "Direct Download Link",
      "Easy Integration",
      "High Quality Downloads",
    ].map((feature, i) => (
      <Card key={i} className="bg-zinc-900 border border-zinc-800">
        <CardContent className="p-6">⚡ {feature}</CardContent>
      </Card>
    ))}
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="mt-12 text-center"
  >
    <p className="text-gray-400 mb-4">Try API Demo:</p>
    <a
      href="https://sbsakib.eu.cc/api/All_v/?download=https://www.facebook.com/reel/1186749416398161/?mibextid=9drbnH&s=yWDuG2&fs=e"
      target="_blank"
    >
      <Button className="bg-white text-black hover:bg-gray-200">
        Open Demo
      </Button>
    </a>
  </motion.div>

  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
    className="mt-16 text-gray-600 text-sm text-center"
  >
    <p>💎 Paid API Available - Contact for Access</p>
    <p className="mt-2">Site By Salar King 👑</p>
    <p>Special Thanks To Muqeet For This Amazing Idea 🫰</p>
  </motion.footer>
</div>

); }
