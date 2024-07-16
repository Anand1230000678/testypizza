import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon />
            <LinkedInIcon/>
            <FacebookIcon/>

 </div>
        <p>@copy: 2024 Renderpizza.com</p>
    
    </div>
  )
}
