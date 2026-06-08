import { useState } from 'react';
import './Portfolio.css';

const FILTERS = ['전체', '웹 개발', '앱 개발', '시스템'];

const PROJECTS = [
  {
    category: '웹 개발',
    title: '기업 브랜딩 홈페이지',
    desc: 'IT 스타트업을 위한 반응형 기업 홈페이지. 브랜드 아이덴티티와 SEO 최적화에 집중.',
    tags: ['React', 'Vite', 'CSS'],
    color: '#1a3a6b',
  },
  {
    category: '앱 개발',
    title: '물류 관리 안드로이드 앱',
    desc: '실시간 재고 추적과 배송 현황을 관리하는 기업용 안드로이드 애플리케이션.',
    tags: ['Kotlin', 'Firebase', 'REST API'],
    color: '#8b1a1a',
  },
  {
    category: '시스템',
    title: '사내 ERP 솔루션',
    desc: '중소기업 맞춤형 ERP 시스템. 인사, 회계, 프로젝트 관리 통합 플랫폼.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    color: '#c8960a',
  },
  {
    category: '웹 개발',
    title: '온라인 쇼핑몰 플랫폼',
    desc: '결제 연동과 재고 관리가 포함된 풀스택 이커머스 솔루션.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    color: '#2a4f8f',
  },
  {
    category: '앱 개발',
    title: '헬스케어 모바일 앱',
    desc: '건강 데이터 수집 및 분석, 의사와 환자를 연결하는 헬스케어 플랫폼.',
    tags: ['React Native', 'AWS', 'HL7'],
    color: '#1a3a6b',
  },
  {
    category: '시스템',
    title: '실시간 데이터 모니터링',
    desc: 'IoT 센서 데이터를 실시간으로 수집, 시각화하는 대시보드 시스템.',
    tags: ['Python', 'WebSocket', 'InfluxDB'],
    color: '#8b1a1a',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('전체');

  const filtered = active === '전체'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="portfolio__header">
          <span className="tag tag-red">Portfolio</span>
          <h2 className="section-title">프로젝트 사례</h2>
          <p className="section-subtitle">EVERGUIDE가 만들어온 결과물들을 확인해 보세요</p>
        </div>

        <div className="portfolio__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`portfolio__filter-btn${active === f ? ' portfolio__filter-btn--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((p, i) => (
            <div key={i} className="portfolio-card">
              <div className="portfolio-card__thumb" style={{ background: p.color }}>
                <span className="portfolio-card__cat">{p.category}</span>
              </div>
              <div className="portfolio-card__body">
                <h3 className="portfolio-card__title">{p.title}</h3>
                <p className="portfolio-card__desc">{p.desc}</p>
                <div className="portfolio-card__tags">
                  {p.tags.map((t, j) => (
                    <span key={j} className="tag tag-primary">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
