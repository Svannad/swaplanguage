import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useLocation } from 'react-router-dom';

export default function Copyright() {

    const location = useLocation();
    const hideOnPages = ['/languagehub', '/members'];
    const isHidden = hideOnPages.includes(location.pathname);

    return (
        <>
        {!isHidden &&(<section className='copyright'>
            <p className='txtexsmall'>&copy;2022 SwapLanguage. All rights reserved</p>
            <div className='some'>
                <LinkedInIcon />
                <FacebookIcon />
                <InstagramIcon />
            </div>
        </section>)}
        </>
    )
  }