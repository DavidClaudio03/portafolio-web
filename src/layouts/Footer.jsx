import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa'


function Footer() {
  return (
    <footer className="text-white py-1">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/DavidClaudio03" target='_blank' className="text-2xl hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/david-claudio-8aa81a337/" target='_blank' className="text-2xl hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://wa.link/uo7roo" target='_blank' className="text-2xl hover:text-blue-400">
            <FaWhatsapp />
          </a>
          <a href="mailto:davidclaudio5000@gmail.com" target='_blank' className="text-2xl hover:text-blue-400">
            <FaMailBulk />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} David Claudio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;