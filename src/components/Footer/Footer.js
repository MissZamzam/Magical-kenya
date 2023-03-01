import './Footer.css'

const Footer = () => {
    return ( 
        
        
<footer>

  <div class="footer-content">
        <h3>Welcome to Magical Kenya!</h3>
        <p>Kenya is a multi-experiential destination offering unique, diverse, memorable and authentic travel experiences that lasts a lifetime. The magic of Kenya cannot be fully captured in written or spoken word.             </p>

          <div class="social">
            <h3>Follow us</h3>
            {/* <a href="#"><i class="fa fa-facebook"></i> </a> */}
            <a href="https://twitter.com/ZamuHajji"><i class="fa fa-twitter"></i> </a>
            {/* <a href="#"><i class="fa fa-snapchat-ghost"></i> </a> */}
            <a href="https://www.instagram.com/zamuhajji/?hl=el"><i class="fa fa-instagram"></i> </a>
            <a href="https://www.linkedin.com/in/zamzam-hassan-16a7557a/"><i class="fa fa-linkedin"></i> </a>
            <a href="https://github.com/MissZamzam"><i class="fa fa-github"></i> </a>
            <a href='mailto:zamzamhassan44@gmail.com'><i class="fa fa-google"></i></a>
            <a href="https://api.whatsapp.com/send?phone=254725853719&text=Hello Zamzam"><i class="fa fa-whatsapp"></i> </a>

          </div> 
      </div>
      <div className='footer-bottom'>
        <p>copyright &copy;2023 MagicalKenya. designed by <span className='designer'>Zamzam</span></p>
      </div>
    </footer>


        
     );
}
 
export default Footer;