import NavBar from '@/components/NavBar';
import './globals.css'
import localFont from 'next/font/local';
import Providers from '../app/contexts/ThemeProvider';

const ttPoppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'black',
    },
  ],
});

export const metadata = {
  title: 'Mika-Ella Jarapa',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={ttPoppins.className} >
        <Providers>
          <NavBar />
          <div className='container mx-auto dark:bg-gray-800'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
