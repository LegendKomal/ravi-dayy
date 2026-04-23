// giftSharedStyles.js  — import and use in Gift1, Gift2, Gift3

export const sharedCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; }

  .gr-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #e8f4ff 0%, #f8fbff 50%, #eef2ff 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
    font-family: 'DM Sans', sans-serif;
    gap: 1.25rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .gr-page::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 70%);
    pointer-events: none;
  }

  .gr-badge {
    font-size: 0.67rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #3b82f6;
    background: rgba(59,130,246,0.08);
    border: 1px solid rgba(59,130,246,0.2);
    border-radius: 999px;
    padding: 0.28rem 1rem;
    font-weight: 500;
    position: relative; z-index: 1;
  }

  .gr-heading {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 2.8rem;
    color: #0f172a;
    line-height: 1.1;
    position: relative; z-index: 1;
  }

  .gr-heading.blue { color: #3b82f6; }
  .gr-heading.rose { color: #f43f5e; }

  .gr-rule {
    width: 40px; height: 2px;
    background: linear-gradient(90deg, #3b82f6, #7dd3fc);
    border-radius: 2px;
    position: relative; z-index: 1;
  }

  .gr-gif {
    width: 180px;
    border-radius: 0;
    background: transparent;
    filter: drop-shadow(0 8px 20px rgba(59,130,246,0.12));
    position: relative; z-index: 1;
  }

  .gr-text {
    font-size: 1.2rem;
    color: #334155;
    line-height: 1.6;
    max-width: 300px;
    font-style: italic;
    position: relative; z-index: 1;
  }

  .gr-text strong { color: #0f172a; font-style: normal; font-weight: 500; }

  .gr-text.lg { font-size: 1.5rem; color: #0f172a; font-style: normal; }

  .gr-back {
    display: inline-block;
    padding: 0.65rem 2rem;
    border: 1.5px solid rgba(59,130,246,0.35);
    background: #fff;
    color: #3b82f6;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 2px 8px rgba(59,130,246,0.08);
    position: relative; z-index: 1;
    font-weight: 500;
  }

  .gr-back:hover {
    background: #3b82f6;
    color: #fff;
    box-shadow: 0 6px 20px rgba(59,130,246,0.3);
    transform: translateY(-2px);
  }
`;