import './Services.css';

const SERVICES = [
  {
    icon: '💻',
    tag: '프로그램 개발',
    tagType: 'tag-red',
    title: '소프트웨어\n& 앱 개발',
    desc: '데스크톱, 모바일, 임베디드 등 다양한 플랫폼을 위한 맞춤형 소프트웨어를 개발합니다. 요구사항 분석부터 배포까지 전 과정을 책임집니다.',
    features: ['Windows / macOS 앱', 'Android / iOS 앱', 'API 설계 및 개발', '데이터베이스 설계'],
  },
  {
    icon: '🌐',
    tag: '웹 개발',
    tagType: 'tag-primary',
    title: '웹사이트\n& 웹앱 개발',
    desc: '브랜드 아이덴티티를 반영한 기업 홈페이지부터 복잡한 웹 애플리케이션까지, 성능과 경험을 모두 잡는 웹 솔루션을 제공합니다.',
    features: ['기업 홈페이지', '쇼핑몰 / 커머스', '관리자 대시보드', 'SEO 최적화'],
  },
  {
    icon: '🔧',
    tag: '기술 지원',
    tagType: 'tag-yellow',
    title: '유지보수\n& 기술 컨설팅',
    desc: '개발 이후에도 지속적인 유지보수와 기술 자문을 제공합니다. 시스템 최적화와 보안 점검으로 안정적인 서비스 운영을 지원합니다.',
    features: ['24시간 장애 대응', '성능 최적화', '보안 점검', '기술 자문'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services__header">
          <span className="tag tag-primary">Our Services</span>
          <h2 className="section-title">전문 개발 서비스</h2>
          <p className="section-subtitle">
            EVERGUIDE는 고객의 비즈니스 목표에 맞는 최적의 기술 솔루션을 제공합니다
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <span className={`tag ${s.tagType} service-card__tag`}>{s.tag}</span>
              <h3 className="service-card__title">
                {s.title.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </h3>
              <p className="service-card__desc">{s.desc}</p>
              <ul className="service-card__features">
                {s.features.map((f, j) => (
                  <li key={j}>
                    <span className="service-card__check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
