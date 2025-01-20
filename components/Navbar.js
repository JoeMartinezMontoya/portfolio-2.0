import Link from 'next/link';

const Navbar = () => (
  <nav className='fixed w-full flex justify-around p-4 bg-white dark:bg-gray-900 shadow-md'>
    <Link href='#hero'>Accueil</Link>
    <Link href='#activities'>Activités</Link>
    <Link href='#projects'>Projets</Link>
    <Link href='#contact'>Contact</Link>
  </nav>
);

export default Navbar;
