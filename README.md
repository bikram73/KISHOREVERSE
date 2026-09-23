# 🎙️ KISHOREVERSE

> **A cinematic full-screen music experience dedicated to the timeless songs of Kishore Kumar.** 🎶

KISHOREVERSE is a lightweight, browser-based music player inspired by the visual atmosphere of classic Indian cinema. It uses a Kishore Kumar artwork background, a glassmorphism player, and the YouTube IFrame Player API to play a configurable YouTube / YouTube Music playlist directly in the browser.

![KISHOREVERSE Preview](./assets/Kishore_Kumar.png)

<div align="center">

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/bikram73/KISHOREVERSE)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-yellow?style=for-the-badge&logo=github)](https://bikram73.github.io/KISHOREVERSE/)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://github.com/bikram73/KISHOREVERSE/blob/main/LICENSE)

</div>

---

## ✨ Features

- 🎙️ **Kishore Kumar themed interface** with a cinematic vintage aesthetic.
- 🖼️ **Device-optimized background artwork** — separate images for desktop, tablet and mobile screens.
- 🔊 **Intro audio on every page load** — `Kishore_Kumar.mp3` plays first, then the Hindi playlist starts automatically.
- 🔈 **Speaker button** to replay the Kishore Kumar intro audio (disabled while any music is playing).
- 🎵 **Two built-in Kishore Kumar playlists** — Hindi and Bengali, each with a **Load Hindi** / **Load Bengali** button.
- ▶️ **Play / Pause** controls with a small **loading ring** while YouTube is buffering.
- 📢 **Ad indicator** — shows "Please wait… Ad is playing" while YouTube plays an ad before the song.
- ⏮️ **Previous** and ⏭️ **Next** track controls.
- ⏪ **Rewind 5 seconds** and ⏩ **Forward 5 seconds** buttons.
- 🎚️ **Interactive progress bar** with mouse/touch seeking.
- 💿 **Dynamic YouTube thumbnail** shown as the circular album artwork.
- 🔄 **Animated spinning artwork** while music is playing.
- 🕐 **Live clock** in the top-left corner.
- 🔗 **Open Playlist** buttons (top-right) that take visitors directly to the Hindi or Bengali YouTube playlist.
- 🔀 **Load another YouTube playlist or song** by pasting its URL.
- 🛡️ **Playlist error recovery** that skips unavailable and non-embeddable YouTube items without crashing the player.
- 🖼️ **Change Image** to use a custom local background.
- ♻️ **Reset Image** to restore the KISHOREVERSE artwork.
- 💾 **Local persistence** for your custom background image.
- 🔒 **No login and no database**.
- ⚡ **No build process or package installation required**.
- 📱 **Responsive layout** for desktop, tablet and mobile browsers, with touch-friendly controls.
- ♿ **Keyboard-friendly seeking** with Left / Right arrow keys.
- 🌐 **GitHub Pages ready** with a static deployment workflow.
- 🖱️ **Smooth draggable YouTube window** — move it with mouse or touch toward the top, bottom, left, or right; it gently snaps to the nearest edge.
- ✕ **YouTube window close/open control** — close the floating video and bring it back any time with the blinking **Show Video** button.
- 📱 **Video hidden by default on mobile** — tap **Show Video** whenever you want to see it.
- 🧹 **Minimal-screen mode** — the bottom-left **×** button hides the interface while preserving the background, KISHOREVERSE title, floating video (if open) and GitHub button. A round thumbnail button with a live progress ring brings everything back.
- 🐙 **Persistent GitHub repository button** linking to the KISHOREVERSE source repository (slightly more compact on mobile).

---

## 🔊 Intro Audio & Autoplay

Every time the page loads, KISHOREVERSE plays `Kishore_Kumar.mp3` and then hands off to the Hindi playlist automatically.

Browsers often block audio with sound until the visitor interacts with the page, so the app handles this in two steps:

1. It first tries to play the intro with sound.
2. If the browser blocks it, the intro starts **muted** and switches the sound on with your first tap, click, key press or scroll. If even that is blocked, playback waits for your first interaction.

Starting any YouTube song (or pressing Play) stops the intro audio.

---

## 🎵 Playlists

This project is preconfigured to play the Hindi and Bengali playlists:

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

You can replace it from the UI by pasting another public YouTube / YouTube Music playlist or song URL and pressing **Load**, or by using the **Load Hindi** / **Load Bengali** buttons. A newly loaded source is queued up — press ▶ **Play** to start it.

> **Note:** YouTube controls playback, embedding permissions, and advertising. Some individual videos may not allow embedding because of rights, region, or uploader settings. When a playlist item is unavailable or blocked (IFrame errors **100, 101 and 150**), KISHOREVERSE automatically moves on to the next item. Other errors (such as **2, 5 and 153**) show a clear message in the player instead. YouTube still controls which individual videos can be embedded.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| 🧱 **HTML5** | Page structure and semantic UI |
| 🎨 **CSS3** | Glassmorphism, responsive layout, animations and visual styling |
| ⚙️ **Vanilla JavaScript (ES6+)** | Player logic, URL parsing, controls, persistence and interactions |
| ▶️ **YouTube IFrame Player API** | YouTube / playlist playback and player control |
| 🔊 **HTML5 Audio** | Intro audio and speaker button |
| 💾 **localStorage** | Saves the last loaded playlist / song source |
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
│   ├── Kishore_Kumar.png            # Main (desktop) background artwork
│   ├── Kishore_Kumar_mobile.png     # Mobile-optimized background
│   ├── Kishore_Kumar_tab.png        # Tablet-optimized background
│   ├── Kishore_Kumar_title.png      # Favicon / apple-touch-icon / tile image
│   ├── Kishore_Kumar_social.jpg     # 1200×630 Open Graph / link-preview image
│   ├── Kishore_Kumar_status.jpg     # 1080×1920 (9:16) image for WhatsApp Status sharing
│   ├── Kishore_Kumar.mp3            # Intro audio played on every page load
│   └── Kishore_Kumar.mp4            # Audio/video used by the speaker button
│
├── .gitignore
├── .nojekyll
├── index.html                       # Complete KISHOREVERSE application
└── README.md                        # Project documentation
```

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
| Last loaded playlist / song URL | `localStorage` | ❌ No |
| Custom background image | `IndexedDB` | ❌ No |
| Default artwork and audio | Project `assets/` folder | ❌ No |

The custom background is resized in the browser before being stored locally, and it is restored automatically the next time you visit.

---

## 🎮 Controls

| Control | Action |
|---|---|
| ▶️ | Play (shows a loading ring while buffering) |
| ⏸️ | Pause |
| ⏮️ | Previous song |
| ⏭️ | Next song |
| ⏪ / ⏩ | Rewind / forward 5 seconds |
| 🎚️ Progress bar | Seek through the current song |
| ⬅️ / ➡️ | Seek backward / forward by 5 seconds when the progress bar is focused |
| 🔈 Speaker | Play the Kishore Kumar intro audio (available only when nothing else is playing) |
| 🎵 Hindi / Bengali (top-right) | Open the YouTube playlist in a new tab |
| Load Hindi / Load Bengali | Queue the Hindi or Bengali playlist in the player |
| 🔗 URL box + Load | Queue any public YouTube / YouTube Music playlist or song |
| 🖱️ Drag player | Move the YouTube window with mouse or touch; release near an edge for a smooth snap |
| ✕ Player close | Close the floating YouTube window |
| ▶ Show Video | Bring the YouTube window back (blinks while the video is hidden) |
| ✕ Bottom-left close | Enter minimal mode and keep only the background, KISHOREVERSE title, floating video and GitHub button |
| 🔘 Round thumbnail (minimal mode) | Show the full interface again; its ring shows song progress |
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
  ├── HTML5 Audio
  │     └── Intro audio from assets/
  │
  ├── localStorage
  │     └── Last loaded playlist / song
  │
  └── IndexedDB
        └── Custom background image
```

There is **no application server, database, login system, or server-side secret API key** in this project. YouTube playback is handled directly by the official IFrame Player API.

---

## ⚠️ YouTube & Content Notes

KISHOREVERSE embeds YouTube content using the official YouTube IFrame Player API. YouTube may show skippable or non-skippable ads according to its own policies and the video's monetization settings. There is no supported IFrame API setting to turn off YouTube ads for embedded videos, so KISHOREVERSE does not attempt to cover, manipulate, or automatically skip them; it only shows an "Ad is playing" notice while an ad runs. The application does not download, copy, or redistribute YouTube audio.

The playlist link and embedded media remain hosted by YouTube. KISHOREVERSE does not bypass YouTube embedding restrictions; it only skips playlist items that YouTube reports as unavailable or non-embeddable.

---

## ❤️ Credits

**KISHOREVERSE** is a fan-made music UI concept celebrating the legacy of **Kishore Kumar** and the timeless Hindi and Bengali music associated with his work.

Built as a static web project with ❤️, 🎶 and a little vintage cinema magic of Kishore Kumar.

---

## 📜 License

This project is licensed under the **MIT License** — see the full license text in the [LICENSE](./LICENSE) file.