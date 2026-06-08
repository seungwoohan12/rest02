import './Team.css';

const MEMBERS = [
  {
    initials: 'SH',
    name: '한승우',
    role: 'CEO · 풀스택 개발자',
    desc: '프로그램 및 웹 개발 전문가. EVERGUIDE의 설립자로 기술 방향성을 이끌고 있습니다.',
    skills: ['React', 'Kotlin', 'Java', 'Node.js'],
    color: '#1a3a6b',
  },
];

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="team__header">
          <span className="tag tag-yellow">Our Team</span>
          <h2 className="section-title">팀 소개</h2>
          <p className="section-subtitle">EVERGUIDE를 이끄는 전문가들을 만나보세요</p>
        </div>

        <div className="team__grid">
          {MEMBERS.map((m, i) => (
            <div key={i} className="team-card">
              <div className="team-card__avatar" style={{ background: m.color }}>
                {m.initials}
              </div>
              <h3 className="team-card__name">{m.name}</h3>
              <span className="team-card__role">{m.role}</span>
              <p className="team-card__desc">{m.desc}</p>
              <div className="team-card__skills">
                {m.skills.map((s, j) => (
                  <span key={j} className="tag tag-primary">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="team__hire">
          <p className="team__hire-text">함께 성장할 개발자를 찾고 있습니다</p>
          <a className="btn btn-outline" href="#contact">채용 문의하기</a>
        </div>
      </div>
    </section>
  );
}
