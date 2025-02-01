import { Coins, CreditCard, Calculator } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">
          Budget 2025: The Great Indian Tax Show! 🎭
        </h1>
        <p className="text-xl text-gray-600">
          Where your money does a disappearing act! ✨
        </p>
      </header>

      <div className="max-w-xl mx-auto mb-12">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k8TZW71uPRvkeqOHA4NgeKJURHng6q.png"
            alt="Budget meme"
            fill
            className="object-fit"
          />
        </div>
      </div>

      <main className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <Card className="bg-white shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold">Meeting Tax</h2>
            </div>
            <p className="text-gray-600">
              Once: 10% tax
              <br />
              More than once: 20% tax
              <br />
              With video: 32% tax
              <br />
              Don't ring: Still paying tax! 😄
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold">Meme Tax</h2>
            </div>
            <p className="text-gray-600">
              Creating memes: 25% tax
              <br />
              Sharing memes: 20% tax
              <br />
              Laughing at memes: Priceless! 😂
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Coins className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold">Special Announcement</h2>
            </div>
            <p className="text-gray-600">
              "We've decided to introduce a special tax on happiness. The more
              you smile, the more you pay! But don't worry, frowning is still
              free... for now! 😅"
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center mt-12 text-gray-600">
        <p>Remember: Even this footer is taxable! 💸</p>
      </footer>
    </div>
  );
}
