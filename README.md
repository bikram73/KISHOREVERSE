# 🎙️ KISHOREVERSE

> **A cinematic full-screen music experience dedicated to the timeless songs of Kishore Kumar.** 🎶

KISHOREVERSE is a lightweight, browser-based music player inspired by the visual atmosphere of classic Indian cinema. It uses a Kishore Kumar artwork background, a glassmorphism player, and the YouTube IFrame Player API to play a configurable YouTube / YouTube Music playlist directly in the browser.

![KISHOREVERSE Preview](./assets/Kishore_Kumar.png)

---

## ✨ Features

- 🎙️ **Kishore Kumar themed interface** with a cinematic vintage aesthetic.
- 🖼️ **Browser-optimized 16:9 background artwork** for desktop screens.
- 🎵 **Preloaded Kishore Kumar playlist** from YouTube.
- ▶️ **Play / Pause** controls.
- ⏮️ **Previous** and ⏭️ **Next** track controls.
- 🎚️ **Interactive progress bar** with mouse/touch seeking.
- 💿 **Dynamic YouTube thumbnail** shown as the circular album artwork.
- 🔄 **Animated spinning artwork** while music is playing.
- 🕐 **Live clock** in the top-left corner.
- 🔗 **Open Playlist** button that takes visitors directly to the configured YouTube playlist.
- 🔀 **Load another YouTube playlist or song** by pasting its URL.
- 🖼️ **Change Image** to use a custom local background.
- ♻️ **Reset Image** to restore the KISHOREVERSE artwork.
- 💾 **Local persistence** for the selected playlist and custom background.
- 🔒 **No login and no database**.
- ⚡ **No build process or package installation required**.
- 📱 **Responsive layout** for desktop and mobile browsers.
- ♿ **Keyboard-friendly seeking** with Left / Right arrow keys.
- 🌐 **GitHub Pages ready** with a static deployment workflow.

---

## 🎵 Playlists

The project is preconfigured to play the Hindi playlist:

**Kishore Kumar — Hindi & Bengali Songs**

👉 [Open the Kishore Kumar YouTube Playlist](https://www.youtube.com/playlist?list=PLUhKXbPpN0vEc-btqPyLsgZN8sIj-6UHV)

The playlist ID is:

```text
PLUhKXbPpN0vEc-btqPyLsgZN8sIj-6UHV
```

The Bengali playlist is also available from the top-right **Bengali** link:

👉 [Open the Kishore Kumar Bengali Playlist](https://youtube.com/playlist?list=PLteSRTKLf30zAi6_iCozS5OJZRysd1Smv&si=kHRGlwXRzKxdCSwn)

The Bengali playlist ID is:

```text
PLteSRTKLf30zAi6_iCozS5OJZRysd1Smv
```

You can replace it from the UI by pasting another public YouTube / YouTube Music playlist or song URL.

> **Note:** YouTube controls playback and embedding permissions. Some individual videos may not allow embedding because of rights, region, or uploader settings. The player handles playlist errors by attempting to move to another track.

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

No React, Node.js server, database, authentication system, or API key is required.

---

## 📁 Project Structure

```text
KISHOREVERSE/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml       # GitHub Pages deployment workflow
│
├── assets/
│   ├── Kishor_Kumar.png           # Original supplied artwork
│   ├── Kishor_Kumar_16x9.png      # Browser-friendly 16:9 artwork
│   ├── kishoreverse-bg.webp       # Optimized runtime background
│   ├── favicon.ico
│   ├── favicon-32.png
│   └── apple-touch-icon.png
│
├── .gitignore
├── .nojekyll
├── index.html                     # Complete KISHOREVERSE application
└── README.md                      # Project documentation
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
- 🎵 **Kishore Kumar Bengali Playlist:** https://youtube.com/playlist?list=PLteSRTKLf30zAi6_iCozS5OJZRysd1Smv

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

There is **no application server, database, login system, or secret API key** in this project.

---

## ⚠️ YouTube & Content Notes

KISHOREVERSE embeds YouTube content using the official YouTube IFrame Player API. Playback availability is controlled by YouTube and the rights/settings of individual videos. The application does not download, copy, or redistribute the audio.

The playlist link and embedded media remain hosted by YouTube.

---

## ❤️ Credits

**KISHOREVERSE** is a fan-made music UI concept celebrating the legacy of **Kishore Kumar** and the timeless Hindi and Bengali music associated with his work.

Built as a static web project with ❤️, 🎶 and a little vintage cinema magic.

---

## 📜 License

The application code can be reused and modified for learning and personal projects. The supplied Kishore Kumar artwork and third-party YouTube content should **not** be assumed to be covered by the same license as the code. Respect the rights of the original artists, publishers, and content owners.
