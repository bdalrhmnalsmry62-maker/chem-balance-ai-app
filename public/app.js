:root {
  --navy: #102a43;
  --navy-2: #17324d;
  --blue: #0f66b7;
  --cyan: #1ea7c3;
  --bg: #edf4fb;
  --card: #ffffff;
  --soft: #f6fafc;
  --text: #18314a;
  --muted: #5f7088;
  --success: #176b4a;
  --success-bg: #eafaf2;
  --error: #b92d3b;
  --error-bg: #fff0f2;
  --shadow: 0 16px 40px rgba(16, 42, 67, 0.12);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Cairo", Tahoma, Arial, sans-serif;
  background: linear-gradient(180deg, #edf5ff 0%, #f5f8fb 100%);
  color: var(--text);
}

a { text-decoration: none; }
button, input, select { font: inherit; }

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(16, 42, 67, 0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  color: var(--blue);
  font-weight: 800;
  font-size: 1.8rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-links a {
  color: var(--text);
  padding: 10px 14px;
  border-radius: 10px;
  transition: 0.2s ease;
}

.nav-links a:hover, .nav-links a.active {
  background: #eef6ff;
  color: var(--blue);
}

.hero {
  background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 52%, var(--cyan) 100%);
  color: #fff;
  padding: 80px 0 100px;
}

.hero-content {
  text-align: center;
}

.mini-badge {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.9rem;
}

.hero h1 {
  margin: 24px 0 8px;
  font-size: clamp(2.3rem, 5vw, 4rem);
}

.subtitle {
  font-size: 1.15rem;
  opacity: 0.95;
}

.college-box {
  max-width: 420px;
  margin: 26px auto 0;
  text-align: right;
}

.college-box label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
}

.college-box select,
.search-input,
#equationInput,
#chatInput {
  width: 100%;
  border: 0;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 1rem;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(16,42,67,0.08);
}

.main-content {
  margin-top: -36px;
  padding-bottom: 40px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.feature-card,
.card {
  background: var(--card);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.feature-card {
  padding: 28px 22px;
  border: 1px solid rgba(16, 42, 67, 0.05);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.feature-card h3, .card h1, .card h2, .card h3 {
  margin-top: 0;
  color: var(--navy);
}

.feature-card p, .section-text, .method-list {
  color: var(--muted);
  line-height: 1.8;
}

.text-link {
  display: inline-block;
  margin-top: 8px;
  color: var(--blue);
  font-weight: 700;
}

.info-panel {
  background: linear-gradient(135deg, #f3fbff 0%, #eff7fb 100%);
  border-radius: 22px;
  box-shadow: var(--shadow);
  margin-top: 30px;
  padding: 26px 22px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
  align-items: center;
}

.info-panel h2 {
  margin-top: 0;
  color: var(--navy);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.stats div {
  background: rgba(255,255,255,0.8);
  border-radius: 16px;
  padding: 18px 12px;
  text-align: center;
}

.stats strong {
  display: block;
  color: var(--blue);
  font-size: 2rem;
}

.stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.page-content {
  padding: 42px 0 60px;
}

.card {
  padding: 26px 22px;
}

.compound-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.compound-item {
  padding: 18px 16px;
  border: 1px solid rgba(16, 42, 67, 0.08);
  border-radius: 16px;
  background: var(--soft);
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  transition: 0.2s ease;
}

.compound-item:hover {
  border-color: rgba(15, 102, 183, 0.25);
  transform: translateY(-2px);
}

.compound-name {
  font-weight: 700;
  color: var(--navy-2);
}

.compound-formula {
  font-family: "Segoe UI", Tahoma, sans-serif;
  direction: ltr;
  color: var(--blue);
  font-weight: 700;
}

.two-column {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
}

.calculator-box {
  margin-top: 18px;
}

.action-row {
  display: flex;
  gap: 12px;
  margin-top: 14px;
}

.primary-btn, .secondary-btn {
  border: 0;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  color: white;
}

.secondary-btn {
  background: #ebf1f8;
  color: var(--navy);
}

.primary-btn:hover, .secondary-btn:hover {
  transform: translateY(-1px);
}

.status-box {
  margin-top: 18px;
  border-radius: 16px;
  padding: 18px 16px;
}

.status-box.hidden {
  display: none;
}

.success {
  background: var(--success-bg);
  color: var(--success);
  border: 1px solid rgba(23, 107, 74, 0.12);
}

.error {
  background: var(--error-bg);
  color: var(--error);
  border: 1px solid rgba(185, 45, 59, 0.12);
}

.final-equation {
  font-size: clamp(1.1rem, 2vw, 1.7rem);
  margin: 8px 0;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.explanation {
  margin-top: 10px;
  color: var(--navy-2);
  line-height: 1.8;
}

.method-list {
  padding-right: 18px;
  margin: 0;
}

.method-list li {
  margin-bottom: 10px;
}

.method-list.small {
  padding-right: 18px;
}

.assistant-box {
  max-width: 900px;
  margin: 30px auto 0;
}

.chat-box {
  border: 1px solid rgba(16,42,67,0.08);
  background: #f8fbff;
  border-radius: 18px;
  min-height: 300px;
  max-height: 420px;
  overflow: auto;
  padding: 18px;
  margin-top: 20px;
}

.message {
  max-width: 80%;
  margin: 8px 0;
  padding: 12px 14px;
  border-radius: 14px;
  line-height: 1.8;
  white-space: pre-wrap;
}

.message.bot {
  background: #eaf5ff;
  color: var(--navy);
}

.message.user {
  margin-right: auto;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  color: white;
}

.chat-input-row {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

.footer {
  padding: 18px 0 30px;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 820px) {
  .feature-grid,
  .info-panel,
  .two-column {
    grid-template-columns: 1fr;
  }

  .nav-inner {
    flex-direction: column;
    justify-content: center;
    padding: 12px 0;
  }

  .nav-links {
    justify-content: center;
  }

  .action-row,
  .chat-input-row {
    flex-direction: column;
  }
}
