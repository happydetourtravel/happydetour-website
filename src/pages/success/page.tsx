<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Detour Starts Now! | Happy Detour Travel</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #007298;
      --blue-dark: #005a78;
      --blue-light: #e6f4f8;
      --blue-mid: #cce9f1;
      --amber: #F59E0B;
      --amber-dark: #d97706;
      --bg: #F9FAFB;
      --white: #FFFFFF;
      --text: #1F2937;
      --soft: #6B7280;
      --border: #E5E7EB;
      --font: 'Plus Jakarta Sans', sans-serif;
    }

    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      -webkit-font-smoothing: antialiased;
    }

    /* NAV */
    nav {
      background: linear-gradient(to right, #1a0e00, #2c1800);
      padding: 0.85rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo img { height: 48px; width: auto; display: block; }

    nav ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    nav ul a {
      text-decoration: none;
      color: rgba(255,255,255,0.8);
      font-size: 0.875rem;
      font-weight: 600;
      transition: color 0.2s;
    }

    nav ul a:hover { color: var(--amber); }

    /* MAIN */
    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem 1.5rem;
    }

    .container {
      max-width: 560px;
      width: 100%;
      text-align: center;
    }

    /* PLANE ANIMATION */
    .plane-wrap {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      display: inline-block;
      animation: bounce 1.5s infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }

    /* HEADING */
    h1 {
      font-size: clamp(2.2rem, 6vw, 3rem);
      font-weight: 800;
      color: var(--blue);
      line-height: 1.2;
      margin-bottom: 1.75rem;
      letter-spacing: -0.02em;
    }

    /* MESSAGE CARD */
    .message-card {
      background: var(--blue-light);
      border: 1px solid var(--blue-mid);
      border-radius: 20px;
      padding: 1.75rem 2rem;
      margin-bottom: 2rem;
      text-align: left;
    }

    .message-card p {
      font-size: 1rem;
      color: #1e4d5e;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .message-card p:last-child { margin-bottom: 0; }

    .message-card strong { color: var(--blue-dark); }

    .message-card .sign-off {
      font-weight: 700;
      color: var(--blue);
      font-size: 1rem;
    }

    /* BUTTONS */
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .btn-amber {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--amber);
      color: var(--white);
      font-weight: 700;
      font-size: 0.95rem;
      padding: 0.85rem 2rem;
      border-radius: 100px;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
      box-shadow: 0 4px 14px rgba(245,158,11,0.3);
    }

    .btn-amber:hover { background: var(--amber-dark); transform: translateY(-2px); }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--white);
      color: var(--blue);
      font-weight: 700;
      font-size: 0.95rem;
      padding: 0.85rem 2rem;
      border-radius: 100px;
      text-decoration: none;
      border: 2px solid var(--blue);
      transition: background 0.2s, transform 0.2s;
    }

    .btn-outline:hover { background: var(--blue-light); transform: translateY(-2px); }

    /* WHILE YOU WAIT */
    .while-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 1.5rem 1.75rem;
      margin-bottom: 2rem;
      text-align: left;
    }

    .while-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--amber);
      margin-bottom: 1rem;
    }

    .while-card ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .while-card li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.92rem;
      color: var(--soft);
      line-height: 1.6;
    }

    .while-card li .wi { flex-shrink: 0; font-size: 1.1rem; margin-top: 0.1rem; }

    .while-card li a {
      color: var(--blue);
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    /* SOCIAL ROW */
    .social-row {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .social-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--white);
      border: 1.5px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: border-color 0.2s, transform 0.2s;
      font-size: 1.1rem;
    }

    .social-btn:hover {
      border-color: var(--blue);
      transform: translateY(-2px);
    }

    /* Facebook SVG icon */
    .fb-icon {
      width: 20px;
      height: 20px;
      fill: #1877F2;
    }

    /* TAGLINE */
    .tagline {
      font-size: 0.85rem;
      font-style: italic;
      color: var(--soft);
      opacity: 0.7;
    }

    /* FOOTER */
    footer {
      background: #1F2937;
      color: rgba(255,255,255,0.35);
      text-align: center;
      padding: 1.25rem;
      font-size: 0.8rem;
    }

    footer a { color: var(--amber); text-decoration: none; }

    @media (max-width: 600px) {
      nav ul { display: none; }
      .message-card { padding: 1.25rem; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <a href="https://www.happydetour.com" class="nav-logo">
      <img src="https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/logo.30fb1e8b14fa58c29568cadc94d36a72b9c0ae687633fcc7be077d2afe4d4a70.png" alt="Happy Detour Travel" />
    </a>
    <ul>
      <li><a href="https://www.happydetour.com">Home</a></li>
      <li><a href="https://www.happydetour.com/about">About</a></li>
      <li><a href="https://happydetourtravel.wordpress.com/" target="_blank" rel="noopener">Blog</a></li>
    </ul>
  </nav>

  <!-- MAIN -->
  <main>
    <div class="container">

      <!-- Plane -->
      <div class="plane-wrap">✈️</div>

      <!-- Heading -->
      <h1>Your Detour<br />Starts Now!</h1>

      <!-- Message Card -->
      <div class="message-card">
        <p>Thanks for reaching out! I've received your details and I'm already starting to look at the possibilities.</p>
        <p>I do this personally, so give me a little time to dig in and find the right options for you. I'll be in touch within <strong>24–48 hours</strong> to start our conversation.</p>
        <p class="sign-off">You just made travel planning a whole lot easier. 🙌</p>
      </div>

      <!-- Buttons -->
      <div class="btn-group">
        <a href="https://happydetourtravel.wordpress.com/" target="_blank" rel="noopener" class="btn-amber">
          📝 Read the Blog
        </a>
        <a href="https://www.happydetour.com" class="btn-outline">
          🏠 Back to Home
        </a>
      </div>

      <!-- While You Wait -->
      <div class="while-card">
        <p class="label">☕ While You Wait</p>
        <ul>
          <li>
            <span class="wi">📖</span>
            <span>Check out my <a href="https://happydetourtravel.wordpress.com/" target="_blank" rel="noopener">latest cruise tips on the blog.</a> Good stuff in there.</span>
          </li>
          <li>
            <span class="wi">☕</span>
            <span>I'm currently on my second Dunkin' of the day and already deep in research mode for you.</span>
          </li>
        </ul>
      </div>

      <!-- Social Row -->
      <div class="social-row">
        <a href="https://www.instagram.com/happydetourtravel/" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">📸</a>
        <a href="https://www.facebook.com/profile.php?id=61582209485454" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook">
          <svg class="fb-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@happydetourtravel" target="_blank" rel="noopener" class="social-btn" aria-label="TikTok">🎵</a>
      </div>

      <!-- Tagline -->
      <p class="tagline">Affordable vacations. Fun experiences. Everyone welcome.</p>

    </div>
  </main>

  <!-- FOOTER -->
  <footer>
    <p>© 2026 Happy Detour Travel &nbsp;·&nbsp; <strong style="color:rgba(255,255,255,0.5)">Eric Carney</strong> &nbsp;·&nbsp; Affiliated with WorldVia Travel Network &nbsp;·&nbsp; <a href="mailto:eric@happydetour.com">eric@happydetour.com</a></p>
  </footer>

</body>
</html>
