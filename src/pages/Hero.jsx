import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="container hero__content">
        <span className="tag tag-yellow hero__badge">Since 2026.06.08 · IT 전문 개발사</span>
        <h1 className="hero__title">
          디지털 미래를 함께<br />
          <span className="hero__title-accent">설계합니다</span>
        </h1>
        <p className="hero__desc">
          EVERGUIDE는 프로그램 개발과 웹 개발 전문 기업입니다.<br />
          고객의 비전을 현실로 만드는 기술 파트너가 되겠습니다.
        </p>
        <div className="hero__actions">
          <button className="btn btn-accent" onClick={() => scrollTo('#services')}>
            서비스 보기
          </button>
          <button className="btn btn-outline hero__btn-outline" onClick={() => scrollTo('#contact')}>
            무료 상담
          </button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">100<span className="hero__stat-unit">%</span></span>
            <span className="hero__stat-label">고객 만족 목표</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">2<span className="hero__stat-unit">개</span></span>
            <span className="hero__stat-label">핵심 서비스</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">24<span className="hero__stat-unit">시간</span></span>
            <span className="hero__stat-label">기술 지원</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-hint" onClick={() => scrollTo('#services')}>
        <span />
      </div>
    </section>
  );
}
