import { Header } from '@/components';
import About from './about/page';
import Projects from './projects/page';
import Blogs from './blogs/page';
import Contact from './contact/page';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='pb-10 sm:pb-26 px-5'>
      <Header />
      <About />
      <Blogs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
