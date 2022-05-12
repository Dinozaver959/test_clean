import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function index() {
  return (
    <div>
      <Head>
        <title>Crypto Lions</title>
      </Head>
      <Navbar />
      <Home />
      <About />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </div>
  )
}
