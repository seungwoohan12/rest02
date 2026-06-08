import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoImg} alt="EVERGUIDE" className="footer__logo-mark" />
              <span className="footer__logo-text">EVERGUIDE</span>
            </div>
            <p className="footer__tagline">
              디지털 세상에서 당신의 비전을 현실로 만드는<br />IT 전문 개발 파트너
            </p>
          </div>

          <div className="footer__links-group">
            <h4>서비스</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>프로그램 개발</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>웹 개발</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>기술 컨설팅</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>유지보수</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>회사</h4>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>회사 소개</a></li>
              <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollTo('#team'); }}>팀 소개</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollTo('#portfolio'); }}>포트폴리오</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>채용 문의</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>연락처</h4>
            <ul>
              <li>📧 contact@everguide.kr</li>
              <li>🏢 설립: 2026. 06. 08</li>
              <li>💼 프로그램 · 웹 개발</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 EVERGUIDE. All rights reserved.</p>
          <p className="footer__bottom-sub">IT 전문 개발사 · 대한민국</p>
        </div>
      </div>
    </footer>
  );
}
