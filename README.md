# 🎙️ KISHOREVERSE

> **A cinematic full-screen music experience dedicated to the timeless songs of Kishore Kumar.** 🎶

KISHOREVERSE is a lightweight, browser-based music player inspired by the visual atmosphere of classic Indian cinema. It uses a Kishore Kumar artwork background, a glassmorphism player, and the YouTube IFrame Player API to play a configurable YouTube / YouTube Music playlist directly in the browser.

![KISHOREVERSE Preview](./assets/Kishore_Kumar.png)

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-yellow?style=for-the-badge&logo=github)](https://github.com/bikram73/KISHOREVERSE)

---

## ✨ Features

- 🎙️ **Kishore Kumar themed interface** with a cinematic vintage aesthetic.
- 🖼️ **Browser-optimized 16:9 background artwork** for desktop screens.
- 🎵 **Two built-in Kishore Kumar playlists** — Hindi and Bengali.
- ▶️ **Play / Pause** controls.
- ⏮️ **Previous** and ⏭️ **Next** track controls.
- 🎚️ **Interactive progress bar** with mouse/touch seeking.
- 💿 **Dynamic YouTube thumbnail** shown as the circular album artwork.
- 🔄 **Animated spinning artwork** while music is playing.
- 🕐 **Live clock** in the top-left corner.
- 🔗 **Open Playlist** buttons that take visitors directly to the selected YouTube playlist.
- 🔀 **Load another YouTube playlist or song** by pasting its URL.
- 🛡️ **Playlist error recovery** that handles unavailable and non-embeddable YouTube items without crashing the player.
- 🖼️ **Change Image** to use a custom local background.
- ♻️ **Reset Image** to restore the KISHOREVERSE artwork.
- 💾 **Local persistence** for the selected playlist and custom background.
- 🔒 **No login and no database**.
- ⚡ **No build process or package installation required**.
- 📱 **Responsive layout** for desktop and mobile browsers.
- ♿ **Keyboard-friendly seeking** with Left / Right arrow keys.
- 🌐 **GitHub Pages ready** with a static deployment workflow.
- 🖱️ **Smooth draggable YouTube window** — move it toward the top, bottom, left, or right; it gently snaps to the nearest edge.
- ✕ **YouTube window close/open control** with a compact restore option.
- 🧹 **Minimal-screen mode** — the bottom-right close button hides the interface while preserving the background, KISHOREVERSE title, bottom YouTube player, and GitHub button.
- 🐙 **Persistent GitHub repository button** linking to the KISHOREVERSE source repository.

---

## 🎵 Playlists

The project is preconfigured to play the Hindi playlist:

**Kishore Kumar — Hindi & Bengali Songs**

The Hindi playlist is also available from the top-right **Hindi** link:

👉 [Open the Kishore Kumar Hindi Playlist](https://www.youtube.com/playlist?list=PLUhKXbPpN0vEc-btqPyLsgZN8sIj-6UHV)

The playlist ID is:

```text
PLUhKXbPpN0vEc-btqPyLsgZN8sIj-6UHV
```

The Bengali playlist is also available from the top-right **Bengali** link:

👉 [Open the Kishore Kumar Bengali Playlist](https://www.youtube.com/playlist?list=PLZxwXvsjsA8s)

The Bengali playlist ID is:

```text
PLZxwXvsjsA8s
```

You can replace it from the UI by pasting another public YouTube / YouTube Music playlist or song URL.

> **Note:** YouTube controls playback, embedding permissions, and advertising. Some individual videos may not allow embedding because of rights, region, or uploader settings. KISHOREVERSE handles IFrame errors **100, 101, 150, and 153** and keeps the direct **Open on YouTube** link available. YouTube still controls which individual videos can be embedded.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| 🧱 **HTML5** | Page structure and semantic UI |
| 🎨 **CSS3** | Glassmorphism, responsive layout, animations and visual styling |
| ⚙️ **Vanilla JavaScript (ES6+)** | Player logic, URL parsing, controls, persistence and interactions |
| ▶️ **YouTube IFrame Player API** | YouTube / playlist playback and player control |
| 💾 **localStorage** | Saves the selected playlist / song source |
| 🗃️ **IndexedDB** | Stores the user's custom background image locally |
| 🖼️ **Canvas API** | Resizes and compresses uploaded background images |
| 🌐 **GitHub Pages** | Static website hosting |
| 🚀 **GitHub Actions** | Automated GitHub Pages deployment |

### Languages

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Markdown** for project documentation

No React, Node.js server, database, authentication system, or YouTube Data API key is required by this version.

---

## 📁 Project Structure

```text
KISHOREVERSE/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml         # GitHub Pages deployment workflow
│
├── assets/
│   ├── Kishore_Kumar.png            # Main background artwork
│   ├── Kishore_Kumar_mobile.png     # Mobile-optimized background
│   ├── Kishore_Kumar_tab.png        # Tablet-optimized background
│   ├── Kishore_Kumar_title.png      # Favicon / apple-touch-icon / tile image
│   ├── Kishore_Kumar_social.jpg     # 1200×630 Open Graph / link-preview image
│   ├── Kishore_Kumar.mp3            # Intro audio played on page reload
│   └── Kishore_Kumar.mp4            # Intro video asset
│
├── .gitignore
├── .nojekyll
├── index.html                       # Complete KISHOREVERSE application
└── README.md                        # Project documentation
```

### Why are there three background images?

- `Kishor_Kumar.png` keeps the **original artwork** exactly as supplied.
- `Kishor_Kumar_16x9.png` provides a **desktop/browser preview** suitable for the repository README.
- `kishoreverse-bg.webp` is the **compressed runtime version** used by the website for faster loading.

---

## 💻 Run Locally

KISHOREVERSE is a static website, so no `npm install` is necessary.

### 1. Clone the repository

```bash
git clone https://github.com/bikram73/KISHOREVERSE.git
cd KISHOREVERSE
```

### 2. Start a local HTTP server

Using Python:

```bash
python -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

### Alternative: VS Code Live Server

Open the project in VS Code and use the **Live Server** extension to launch `index.html`.

> Using an HTTP server is recommended instead of opening `index.html` directly with `file://`, because browser security rules can interfere with external YouTube API behavior.

---

The repository itself will be:

```text
https://github.com/bikram73/KISHOREVERSE
```

> GitHub Pages can publish static HTML, CSS and JavaScript directly from a repository. The included workflow uses GitHub's Pages deployment actions so future pushes can update the live site automatically.

---

## 🔗 Important Links

- 🐙 **GitHub Repository:** https://github.com/bikram73/KISHOREVERSE
- 🌐 **GitHub Pages:** https://bikram73.github.io/KISHOREVERSE/
- 🎵 **Kishore Kumar Hindi Playlist:** https://www.youtube.com/playlist?list=PLUhKXbPpN0vEc-btqPyLsgZN8sIj-6UHV
- 🎵 **Kishore Kumar Bengali Playlist:** https://www.youtube.com/playlist?list=PLZxwXvsjsA8s

---

## 💾 What Is Stored Locally?

| Information | Browser storage | Uploaded to server? |
|---|---|---|
| Playlist / song URL | `localStorage` | ❌ No |
| Custom background image | `IndexedDB` | ❌ No |
| Default artwork | Project `assets/` folder | ❌ No |

The custom background is resized in the browser before being stored locally.

---

## 🎮 Controls

| Control | Action |
|---|---|
| ▶️ | Play |
| ⏸️ | Pause |
| ⏮️ | Previous song |
| ⏭️ | Next song |
| 🎚️ Progress bar | Seek through the current song |
| ⬅️ / ➡️ | Seek backward / forward by 5 seconds when the progress bar is focused |
| 🎵 Open Playlist | Open the configured YouTube playlist in a new tab |
| 🖱️ Drag player | Move the YouTube window; release near an edge for a smooth snap |
| ✕ Player close | Close the floating YouTube window; use **Open Player** to restore it |
| ✕ Bottom-right close | Enter minimal mode and keep only the background, KISHOREVERSE title, bottom player and GitHub button |
| 🐙 GitHub | Open the KISHOREVERSE GitHub repository |
| 🖼️ Change image | Select a local background image |
| ♻️ Reset image | Restore the default Kishore Kumar artwork |

---

## 🔐 Privacy & Architecture

KISHOREVERSE is intentionally simple:

```text
Browser
  │
  ├── index.html
  │     ├── UI + CSS
  │     └── JavaScript player logic
  │
  ├── YouTube IFrame Player API
  │     └── YouTube playlist / video playback
  │
  ├── localStorage
  │     └── Playlist preference
  │
  └── IndexedDB
        └── Custom background image
```

There is **no application server, database, login system, or server-side secret API key** in this project. YouTube playback is handled directly by the official IFrame Player API.

---

## ⚠️ YouTube & Content Notes

KISHOREVERSE embeds YouTube content using the official YouTube IFrame Player API in YouTube's privacy-enhanced `youtube-nocookie.com` mode. Privacy-enhanced mode does not disable ads: YouTube may show skippable or non-skippable ads according to its own policies and the video's monetization settings. There is no supported IFrame API setting to turn off YouTube ads for embedded videos, so KISHOREVERSE does not attempt to cover, manipulate, or automatically skip them. The application does not download, copy, or redistribute the audio.

The playlist link and embedded media remain hosted by YouTube. KISHOREVERSE does not bypass YouTube embedding restrictions; it only skips playlist items that YouTube reports as unavailable or non-embeddable.

---

## ❤️ Credits

**KISHOREVERSE** is a fan-made music UI concept celebrating the legacy of **Kishore Kumar** and the timeless Hindi and Bengali music associated with his work.

Built as a static web project with ❤️, 🎶 and a little vintage cinema magic.

---

## 📜 License

This project is licensed under the **MIT License** — see the full license text in the [LICENSE](./LICENSE) file.
