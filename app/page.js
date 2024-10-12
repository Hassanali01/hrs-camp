import Image from "next/image";
import Navbar from "./src/components/navbar/page";
import Contact from "./src/pages/contact/page";
import facebookFImg from '@/app/assests/facebook-f.png'
import twitterFImg from '@/app/assests/twitter-f.png'
import linkdinFImg from '@/app/assests/linkdin-f.png'
import whatsappFImg from '@/app/assests/whatsapp-f.png'
import './globals.css'

export default function Home() {
  return (
    <div style={{backgroundColor:"#FFFBD6"}}>
      <main >
    <Navbar/>
    <Contact/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" style={{backgroundColor:"#FFFBD6"}} >
      <section className=" section-h-getintouch d-flex align-items-center justify-content-center flex-column mb-5">
      <div className="footer-content text-center">
        <h2>Like it? Share</h2>
        <h2 className="my-3">with your friends!</h2>
      </div>
      <div className="footer-social my-3">
        <div className="social-bg-f">
          <div className="social-icons">
            <ul className="d-flex align-items-center mb-0">
              <li>
        
                  <Image
                    className="img-fluid"
                    src={facebookFImg}
                    alt="Facebook"
                    width={50} // Adjust width as needed
                    height={50} // Adjust height as needed
                  />
           
              </li>
              <li>
              
                  <Image
                    className=""
                    src={twitterFImg}
                    alt="Twitter"
                    width={50}
                    height={50}
                  />
             
              </li>
              <li>
           
                  <Image
                    className="img-fluid"
                    src={linkdinFImg}
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
               
              </li>
              <li>
            
                  <Image
                    className="img-fluid"
                    src={whatsappFImg}
                    alt="WhatsApp"
                    width={50}
                    height={50}
                  />
               
              </li>
              <li className="footer-text">
                <a href="https://hrscamp.com/" target="_blank" rel="noopener noreferrer">
                  https://hrscamp.com/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      </footer>
    </div>
  );
}
