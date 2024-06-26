import "../Styles/Footer.css"
import { useTranslation } from 'react-i18next';

function Logo() {
  const { t } = useTranslation();
return (
    <div className="logo-container">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a34c02b9024f62d769913b63499274280d88fd408bccd49c90d3ad2f37fd643d?apiKey=8fb93ef11d1d48708e95df373a13e52c&" alt="Nostalgia logo" className="logo-img" />
    <div className="title">{t('footer.title')}</div>
    </div>
);
}

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
};

function Heading() {
return <h1 className="slogan">Your perfect escape</h1>;
}

function NavItem({ children, section }) {
return <div className="nav-item" onClick={() => scrollToSection(section)}>{children}</div>;
}

function SocialIcon({ src, alt }) {
return <img src={src} alt={alt} className="social-icon" />;
}

function Footer() {
return (
    <>
    <div className="separator" />
    <div className="copyright">© 2024 Nostalgia</div>
    </>
);
}

const SiteFooter = () => {
  const { t } = useTranslation();
    return (
        <div className="container">
        <div className="content">
          <div className="left-section">
            <Logo />
            <Heading />
          </div>
          <div className="right-section">
            <nav className="navigation">
              <div className="nav-group">
              <div className="category-text">{t('footer.g')}</div>
                <NavItem section={'about-section'}>{t('footer.about')}</NavItem>
              </div>
              <div className="nav-group">
              <div className="category-text">{t('footer.h')}</div>
                <NavItem section={'activities-section'}>{t('footer.activities')}</NavItem>
                <NavItem section={'nearby-section'}>{t('footer.nearby')}</NavItem>
              </div>
              <div className="nav-group">
                <div className="category-text">{t('footer.connect')}</div>
                <div className="social-icons">
                  <SocialIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca986cbfea5675824de2d1b8f24e5b2c3c53b1643b361cab0c8fe94e787d4a72?apiKey=8fb93ef11d1d48708e95df373a13e52c&"
                    alt="Social media icon 1"
                  />
                  <SocialIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/916a85dde1f5bf44114d6aa35caf2f5fe3ade33d09ddc41f5b3cb9ba30f32880?apiKey=8fb93ef11d1d48708e95df373a13e52c&"
                    alt="Social media icon 2"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default SiteFooter