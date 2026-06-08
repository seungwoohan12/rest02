import './About.css';

const VALUES = [
  {
    icon: 'favorite',
    bg: 'rgba(139, 26, 26, 0.08)',
    color: 'var(--color-accent-red)',
    title: '고객 중심',
    desc: '모든 결정의 기준은 고객의 성공입니다.',
  },
  {
    icon: 'rocket_launch',
    bg: 'rgba(26, 58, 107, 0.08)',
    color: 'var(--color-primary)',
    title: '기술 혁신',
    desc: '최신 기술로 더 나은 솔루션을 만듭니다.',
  },
  {
    icon: 'verified',
    bg: 'rgba(42, 79, 143, 0.08)',
    color: 'var(--color-primary-light)',
    title: '신뢰와 책임',
    desc: '약속을 지키고 결과에 책임을 집니다.',
  },
  {
    icon: 'trending_up',
    bg: 'rgba(200, 150, 10, 0.08)',
    color: 'var(--color-accent-yellow)',
    title: '지속 성장',
    desc: '고객과 함께 성장하는 파트너십을 추구합니다.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <span className="tag tag-primary">About Us</span>
            <h2 className="section-title">EVERGUIDE 소개</h2>
            <p className="about__desc">
              EVERGUIDE는 2026년 6월 8일에 설립된 프로그램 개발 · 웹 개발 전문 기업입니다.
              저희는 기술이 단순한 도구가 아니라 비즈니스의 성장 엔진이 되어야 한다고 믿습니다.
            </p>
            <p className="about__desc">
              작은 스타트업부터 중견 기업까지, 각 고객의 상황과 목표에 맞는 맞춤형 솔루션을
              제공합니다. 개발 완료 후에도 지속적인 기술 지원으로 장기적인 파트너십을 이어갑니다.
            </p>

            <div className="about__milestones">
              <div className="about__milestone">
                <span className="about__milestone-year">2026.06</span>
                <span className="about__milestone-text">EVERGUIDE 창업 · 개업</span>
              </div>
              <div className="about__milestone">
                <span className="about__milestone-year">2026.06</span>
                <span className="about__milestone-text">첫 번째 웹 개발 프로젝트 착수</span>
              </div>
              <div className="about__milestone">
                <span className="about__milestone-year">진행중</span>
                <span className="about__milestone-text">더 많은 고객과 함께 성장 중</span>
              </div>
            </div>
          </div>

          <div className="about__right">
            <div className="about__values">
              {VALUES.map((v, i) => (
                <div key={i} className="about__value-card">
                  <div
                    className="about__value-icon"
                    style={{ background: v.bg }}
                  >
                    <span
                      className="ms-icon"
                      style={{ color: v.color, fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
                    >
                      {v.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="about__value-title">{v.title}</h4>
                    <p className="about__value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__founded">
              <span className="about__founded-label">설립일</span>
              <span className="about__founded-date">2026년 6월 8일</span>
              <span className="about__founded-sub">대한민국 IT 전문 개발사</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
