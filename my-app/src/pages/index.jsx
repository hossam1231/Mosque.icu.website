import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#173300' }}>
      <Head>
        <title>Mosque.icu - Find a mosque.</title>
        <meta
          name="description"
          content="By promoting institutions from our network, you’ll know exactly when to pray, where to pray and what you missed out on."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Reviews /> */}
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </div>
  )
}
