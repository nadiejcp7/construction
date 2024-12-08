import './footer.css'
import Navigator from './Navigator';

interface Props {
    indexSelected: number
    logo: string
    socialSrc: string[]
    contactSrc: string[]
    links: string[]
}

function footer({ indexSelected, logo, socialSrc, contactSrc, links }: Props) {
    const elementsNav = ['Home', 'About', 'Services', 'Projects', 'Contact'];

    const elementsContact = ['(289) 681-3004', 'darwinconstructinc@gmail.com', '310 Barton St E Hamilton, ON']
    const hrefsContact = ['tel:+12896813004', 'mailto:darwinconstructinc@gmail.com', 'https://maps.app.goo.gl/hDeMg2C1bCQN6SsT7']

    const elementsSocial = ['YouTube', 'TikTok', 'Instagram', 'Facebook']
    const hrefSocial = ['https://www.youtube.com/channel/UCKRg5ErjbF4lnaijgZ4AJag',
        'https://www.tiktok.com/@darwinconstructioninc',
        'https://www.instagram.com/darwinconstructioninc',
        'https://www.facebook.com/darwinconstructinc/']

    return (<>
        <div className='hidden footer-container'>
            <div className='footer-subcontainer'>
                <div className='contact-last'>
                    <a href='tel:+12896813004' target='_blank'>
                        <h2 className='title-footer'>Claim a Free Consult</h2>
                    </a>
                    <h3 className='subtitle-footer'>Trusted by homeowners nationwide</h3>
                </div>
                <div className='hidden footer-container-info'>
                    <div className='footer-container-info-description'>
                        <div className='footer-logo-container'>
                            <a href='/home'><img src={logo} alt="" className='footer-logo' /></a>
                        </div>
                        <p className='catchy-phrase-bottom'>Your vision, our expertise. Let's create extraordinary things together.</p>
                    </div>
                    <Navigator title='Navigator' elements={elementsNav} hrefs={links} newPage={false} indexSelected={indexSelected} />
                    <Navigator title='Contact Us' elements={elementsContact} hrefs={hrefsContact} imgs={contactSrc} />
                    <Navigator title='Social Media' elements={elementsSocial} hrefs={hrefSocial} imgs={socialSrc} />
                </div>
            </div>
        </div>
    </>);
}

export default footer;