import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__left">
            <span className="tag tag-red">Contact</span>
            <h2 className="section-title">프로젝트 문의</h2>
            <p className="contact__desc">
              개발 프로젝트에 대해 궁금한 점이 있으신가요?<br />
              부담 없이 문의해 주세요. 빠르게 답변 드립니다.
            </p>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div>
                  <span className="contact__info-label">이메일</span>
                  <span className="contact__info-val">contact@everguide.kr</span>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">🏢</span>
                <div>
                  <span className="contact__info-label">설립일</span>
                  <span className="contact__info-val">2026년 6월 8일</span>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">💼</span>
                <div>
                  <span className="contact__info-label">전문 분야</span>
                  <span className="contact__info-val">프로그램 개발 · 웹 개발</span>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">⏰</span>
                <div>
                  <span className="contact__info-label">응답 시간</span>
                  <span className="contact__info-val">영업일 기준 24시간 이내</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__right">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✅</span>
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시일 내에 연락 드리겠습니다.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>
                  새 문의하기
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name">이름 *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="홍길동"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email">이메일 *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="company">회사명</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="(주)회사명"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="service">문의 서비스</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">선택해 주세요</option>
                      <option value="web">웹 개발</option>
                      <option value="app">앱 개발</option>
                      <option value="system">시스템 개발</option>
                      <option value="consult">기술 컨설팅</option>
                    </select>
                  </div>
                </div>
                <div className="contact__form-group">
                  <label htmlFor="message">문의 내용 *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="프로젝트에 대해 자세히 설명해 주세요."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="btn btn-primary contact__submit" type="submit">
                  문의 보내기 →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
