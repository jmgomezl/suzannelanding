'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
import { Banana, Rocket, Users, Brain, FileText, Coins, ChevronUp, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function LandingPageComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const [bananaCount, setBananaCount] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const tokenAllocationData = [
    { name: 'Presale', value: 31000000, percentage: 40, color: '#FFD700' },
    { name: 'DEX Liquidity', value: 21000000, percentage: 20, color: '#C0C0C0' },
    { name: 'Long-Term Maintenance', value: 15750000, percentage: 15, color: '#CD7F32' },
    { name: 'Influencers and Collaborators', value: 8400000, percentage: 8, color: '#90EE90' },
    { name: 'Community Rewards', value: 10500000, percentage: 10, color: '#4169E1' },
    { name: 'Reserve Funds', value: 7350000, percentage: 7, color: '#FF6347' }
  ]

  const presaleData = [
    { phase: 'Phase 0: The Early Bird Stage', tokens: '3,500,000', price: '$0.01', raised: '$35,000' },
    { phase: 'Phase 1: The Genesis Stage', tokens: '16,500,000', price: '$0.05', raised: '$825,000' },
    { phase: 'Phase 2: The Expansion Phase', tokens: '9,000,000', price: '$0.07', raised: '$630,000' },
    { phase: 'Phase 3: The Growth Phase', tokens: '2,000,000', price: '$0.08', raised: '$160,000' },
  ]

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  }
  
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiNhMGFlYzAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] animate-pulse"></div>
      <motion.header style={{ opacity }} className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-md">
        <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2024-04-22_at_12.46.22_PM-removebg-cJuNXRmBGdnwfMCg1Lb7KNdROcFI3V.png"
              alt="Suzanne The Monkey Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-800">Suzanne The Monkey</span>
          </motion.div>
          <div className="space-x-4">
            {['what', 'goals', 'presale', 'join', 'team', 'tokenomics'].map((item) => (
              <Link key={item} href={`#${item}`}>
                <motion.span 
                  className="hover:text-gray-600 transition-colors text-gray-700 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.span>
              </Link>
            ))}
          </div>
        </nav>
      </motion.header>

      <main className="container mx-auto py-24 space-y-32 relative">
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2024-04-22_at_12.46.22_PM-removebg-cJuNXRmBGdnwfMCg1Lb7KNdROcFI3V.png"
            alt="Suzanne The Monkey Logo"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <h1 className="text-6xl font-extrabold text-gray-800">Welcome to the Jungle of Finance!</h1>
          <p className="text-2xl text-gray-700 font-semibold">Where memes meet blockchain, and bananas are the new gold standard.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 text-xl py-6 px-8 rounded-full shadow-md"
              onClick={() => setBananaCount(count => count + 1)}
            >
              Go Bananas with Suzanne! 🍌 x {bananaCount}
            </Button>
          </motion.div>
        </motion.section>

        <motion.section 
          id="what" 
          className="bg-white rounded-xl p-8 space-y-4 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold flex items-center text-gray-800"><Banana className="mr-2" /> What is Suzanne The Monkey?</h2>
          <p className="text-xl text-gray-700">
            Suzanne the Memecoin is a unique project that goes beyond the typical memecoin hype. Centered around Suzanne the Monkey, our project combines fun with cutting-edge blockchain technology, creating a vibrant ecosystem designed for fast, secure, and cost-effective transactions on the Ethereum network.
          </p>
        </motion.section>

        <motion.section 
          id="goals" 
          className="relative bg-gray-50 rounded-xl p-8 space-y-4 shadow-md overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-200 opacity-70"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold flex items-center text-gray-800"><Rocket className="mr-2" /> Our Goals</h2>
            <ul className="list-none space-y-4 text-xl text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <div>
                  <h3 className="font-semibold">Develop a Thriving Ecosystem</h3>
                  <p>Build a fast, secure, and cost-effective rollup on Ethereum, designed for game tokenization, NFTs, and large-scale use cases with low gas fees.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <div>
                  <h3 className="font-semibold">Empower Communities through Token Utility</h3>
                  <p>Use the Suzanne token to grant access to exclusive features and ecosystem participation, creating a utility-focused environment for innovation.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <div>
                  <h3 className="font-semibold">Foster Early Adoption</h3>
                  <p>Reward early supporters and token holders by allowing them to become the first testers and users of the rollup, with additional incentives for their contributions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <div>
                  <h3 className="font-semibold">Raise Funds for Ecosystem Growth</h3>
                  <p>Execute a successful presale to raise $1,650,000 USD, with an early Phase 0 goal of $35,000 USD to jumpstart development and engage early investors.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">5.</span>
                <div>
                  <h3 className="font-semibold">Sustain and Expand the Rollup Project</h3>
                  <p>Continuously improve and expand the rollup's capabilities to serve broader use cases, rewarding token holders with future tokens as the ecosystem matures.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">6.</span>
                <div>
                  <h3 className="font-semibold">Build a Fun and Engaging Brand</h3>
                  <p>Leverage Suzanne The Monkey's playful yet impactful identity to create a strong, recognizable brand that attracts attention and grows a loyal community.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section 
          id="presale" 
          className="bg-white rounded-xl p-8 space-y-6 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold flex items-center text-gray-800"><DollarSign className="mr-2" /> Presale Information</h2>
          <p className="text-xl text-gray-700">
            Suzanne's presale is designed to reward early supporters with future benefits while ensuring the ecosystem's growth. The presale will sell 40% of the total token supply across multiple phases, raising the necessary funds to launch and sustain the project.
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Presale Phases Breakdown</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Phase</TableHead>
                  <TableHead>Tokens Available</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Funds Raised</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {presaleData.map((phase, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{phase.phase}</TableCell>
                    <TableCell>{phase.tokens}</TableCell>
                    <TableCell>{phase.price}</TableCell>
                    <TableCell>{phase.raised}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Investor Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Early access to Suzanne The Monkey ecosystem features.</li>
              <li>Future Benefit: Investors will receive SuzanneX tokens when the rollup is launched, rewarding their early participation.</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Total Presale Allocation and Funds Raised</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Total Tokens Available in Presale: 31,000,000 (40% of total supply)</li>
              <li>Total Funds Raised: $1,650,000</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Strategic Fund Allocation</h3>
            <p className="text-gray-700">
              The presale aims to raise $1,650,000 for initial development, liquidity provision, and long-term ecosystem growth. Investors in the presale will receive SuzanneX tokens in the future, ensuring participation in the new rollup once it launches.
            </p>
          </div>
        </motion.section>

        <motion.section 
          id="join" 
          className="bg-white rounded-xl p-8 space-y-4 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold flex items-center text-gray-800"><Users className="mr-2" /> Join Our Community</h2>
          <p className="text-xl text-gray-700">Be part of the Suzanne The Monkey revolution! Join our vibrant community today.</p>
          <div className="flex space-x-4 mt-4">
            <motion.a
              href="https://discord.gg/xqPfg5x2sv"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C48.9718 48.5383 50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="71" height="55" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              Join Discord
            </motion.a>
            <motion.a
              href="https://t.me/suzannetoken"
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.374 0 12C0 18.626 5.374 24 12 24C18.626 24 24 18.626 24 12C24 5.374 18.626 0 12 0ZM17.563 8.381L15.651 17.594C15.501 18.172 15.14 18.344 14.663 18.074L11.714 15.722L10.289 17.102C10.126 17.265 9.988 17.403 9.673 17.403L9.889 14.406L15.294 9.501C15.543 9.281 15.242 9.157 14.914 9.377L8.12 13.529L5.21 12.527C4.646 12.347 4.633 11.934 5.33 11.667L16.712 7.252C17.189 7.081 17.602 7.393 17.563 8.381Z" fill="white"/>
              </svg>
              Join Telegram
            </motion.a>
          </div>
        </motion.section>

        <motion.section 
          id="team" 
          className="bg-gray-50 rounded-xl p-8 space-y-4 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold flex items-center text-gray-800"><Brain className="mr-2" /> The Masterminds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "King Kong (@juanma_itiniera)", title: "Chief Banana Officer", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-04-09%20at%207.58.43%20PM-flm0n5yiMHqsvCM9AA0B2wfhK2F3WM.jpeg" },
              { name: "Dr. Ape (@kingstone5830)", title: "Blockchain Swinger", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-04-09%2020.24.27%20-%20Refine%20the%20avatar%20to%20feature%20a%20realistic%20military-style%20buzz%20cut%20with%20subtle%20widow's%20peaks%20resembling%20Vegeta's%20hairline,%20while%20maintaining%20the%20fuller%20-S6rYVRbwstPNk5NHYrG2QSNPtFfP0a.webp" },
              { name: "Banana Broker (@oramirezmolina)", title: "Jungle Finance Specialist", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-07-12%2012.26.03%20-%20Create%20an%20avatar%20based%20on%20a%20person%20sitting%20outdoors%20at%20a%20wooden%20table.%20The%20person%20is%20wearing%20a%20light-colored%20polo%20shirt,%20has%20short%20dark%20hair,%20and%20is%20s-J4o1bTM3W5pEAvcEH42mtJqlfwGE69.webp" }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400">
                  {member.image ? (
                    <Image 
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  ) : (
                    <Image
                      src={`/placeholder.svg?height=160&width=160&text=${member.name}`}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold flex items-center justify-center text-gray-800"><FileText className="mr-2" /> Whitepaper</h2>
          <p className="text-xl text-gray-700">Curious about the science behind our monkey business?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 text-xl py-4 px-6 rounded-full shadow-md"
              onClick={() => window.open('https://github.com/SuzanneToken/SuzanneDocs/blob/main/whitepaper.md', '_blank')}
            >
              Read Our Banana-Scented Whitepaper
            </Button>
          </motion.div>
          <div className="mt-4 text-gray-600">
            <p>Our whitepaper outlines our vision, technology, and roadmap for Suzanne The Monkey.</p>
            <p>It includes detailed information on our tokenomics, ecosystem, and future plans.</p>
          </div>
        </motion.section>

        <motion.section 
          id="tokenomics"
          className="bg-white rounded-xl p-8 space-y-4 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold flex items-center text-gray-800"><Coins className="mr-2" /> Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Total Supply</h3>
              <p className="text-xl text-gray-700">105,000,000 SUZANNE</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Token Allocation</h3>
              <ul className="list-disc list-inside text-xl text-gray-700">
                {tokenAllocationData.map((item, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="w-4 h-4 mr-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.name}: {item.percentage}% ({item.value.toLocaleString()} tokens)
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenAllocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {tokenAllocationData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke={index === activeIndex ? '#fff' : 'none'}
                        strokeWidth={index === activeIndex ? 2 : 0}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name, props) => [`${props.payload.percentage}% (${value.toLocaleString()} tokens)`, name]}
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px', border: 'none' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-white py-8 relative">
        <div className="container mx-auto text-center">
          <p>© 2023 Suzanne The Monkey. All rights reserved. No monkeys were harmed in the making of this token.</p>
          <div className="mt-4 space-x-4">
            {['Twitter', 'Telegram', 'Discord'].map((platform, index) => (
              <motion.a
                key={index}
                href="#"
                className="inline-block hover:text-yellow-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>

      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 p-2 bg-yellow-500 rounded-full cursor-pointer"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp className="text-gray-800" />
        </motion.div>
      )}

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  )
}