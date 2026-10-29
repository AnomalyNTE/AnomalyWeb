/**
 * English copy (/en/). Structure mirrors zh-CN.js — keep both in sync field by field.
 */

import { downloadChannels, links } from '../links.js'

const channelLabels = {
  github: {
    label: 'Download on GitHub',
    note: 'Official release page with runtime / sdk / tools'
  },
  quark: { label: 'Quark Drive', note: 'code gGdV' },
  baidu: { label: 'Baidu Drive', note: 'code hfs5' }
}

const downloads = downloadChannels.map((channel) => ({ ...channel, ...channelLabels[channel.key] }))

const channelLinks = downloads
  .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
  .join(', ')

export default {
  locale: 'en',
  htmlLang: 'en',
  switchLabel: '中文',
  switchTitle: 'Switch to the Chinese site',

  meta: {
    name: 'Anomaly',
    cnName: '',
    tagline: 'A stable, flexible and open plugin platform for Neverness To Everness',
    qq: '1037114140',
    license: 'AGPL-3.0-only'
  },

  ui: {
    skip: 'Skip to main content',
    navAria: 'Main navigation',
    themeTitle: 'Toggle theme',
    themeToDark: 'Switch to the dark theme',
    themeToLight: 'Switch to the light theme'
  },

  nav: [
    { href: '#features', label: 'Features' },
    { href: '#plugins', label: 'Built-in plugins' },
    { href: '#market', label: 'Community plugins' },
    { href: '#install', label: 'Quick start' },
    { href: '#faq', label: 'FAQ' },
    { href: '#docs', label: 'Docs' },
    { page: 'promo', label: 'UI preview' }
  ],

  downloads,

  hero: {
    lede: `Unzip the Runtime and point it at the folder holding <code>HTGame.exe</code> — that is the
      whole install. Press <kbd>Insert</kbd> for the in-game manager, then enable built-in plugins,
      browse community plugins and read diagnostics from one entry point.`
  },

  promoTeaser: {
    eyebrow: 'Anomaly UI · New design',
    title: 'Look through the glass. See your world.',
    text: 'Real-time refraction, soft highlights, selection lenses that flow. A Liquid Glass interface rebuilt for the in-game overlay, with a side-by-side comparison and playable controls on the preview page.',
    points: [
      'Side-by-side before/after with a draggable divider',
      'Segmented controls, switches, sliders and a floating tab bar you can try',
      'Backgrounds, palettes and the sticker system all kept'
    ],
    cta: 'View the preview',
    imageAlt: 'Liquid Glass plugin page',
    sub: 'A Liquid Glass interface rebuilt for the in-game overlay.',
    announce: {
      badge: 'NEW',
      title: 'Anomaly UI · Liquid Glass redesign',
      text: 'Real-time refraction, flowing lenses, side-by-side comparison',
      cta: 'See the interface preview'
    }
  },

  features: {
    title: 'Core features',
    sub: 'Install, manage in game, extend through the plugin framework — the whole chain is covered.',
    items: [
      {
        icon: '🚀',
        title: 'Install and update',
        text: 'Unzip the Runtime and pick the folder holding HTGame.exe in the launcher. Later versions update in place; your config and custom plugins are left untouched.'
      },
      {
        icon: '🪟',
        title: 'In-game manager',
        text: 'Press Insert for a Chinese or English UI that enables, disables, reloads and configures plugins, with customizable color schemes and background layouts.'
      },
      {
        icon: '🌐',
        title: 'Community plugin downloads',
        text: 'Browse and install community plugins under Plugins > Available, upgrade under Updates, or add your own trusted plugin sources.'
      },
      {
        icon: '🔌',
        title: 'Practical built-ins',
        text: 'Coordinate display, entity ESP, camera tools, a damage dashboard, resource auto pickup and dozens more ship with the package — all off by default.'
      },
      {
        icon: '🧩',
        title: 'Open plugin framework',
        text: 'A pure C ABI v1 SDK with unified V1 services, so plugins never depend on the Runtime source or the C++ ABI.'
      },
      {
        icon: '🔄',
        title: 'Full plugin lifecycle',
        text: 'Manifests, SemVer, dependency and capability checks, package verification, file-watch hot reload and rollback on failure.'
      },
      {
        icon: '🧬',
        title: 'UE5 / NTE adaptation',
        text: 'Verified UE5 symbol resolution plus high-level services for session, player, camera, entities, map landmarks, teleport and vehicles; features degrade gracefully when conditions are unmet.'
      },
      {
        icon: '🔍',
        title: 'Memory analysis and dev tools',
        text: 'Inspect process modules, PE sections and memory regions, with byte-signature scanning and an offline TestHost.'
      },
      {
        icon: '🛡️',
        title: 'Fault isolation',
        text: 'A failing plugin is quarantined; when a new version fails to load it rolls back to the previous one, and the diagnostics page tells you why.'
      }
    ]
  },

  pluginsSection: {
    title: 'Built-in plugins',
    sub: 'Shipped with the runtime and disabled by default. Type to filter — try "camera", "auto" or "ESP".',
    placeholder: 'Search built-in plugins…',
    searchAria: 'Search built-in plugins',
    empty: 'No built-in plugin matches that. Try another keyword.'
  },

  plugins: [
    {
      name: 'Coordinate Display',
      text: 'Shows player coordinates, session state and sampling metrics.',
      tags: 'coordinate session debug sampling'
    },
    {
      name: 'Entity ESP',
      text: 'Draws bounding boxes and labels around entities.',
      tags: 'esp entity box overlay'
    },
    {
      name: 'Deserted',
      text: 'Stops crowd and traffic spawns without touching stationary NPCs.',
      tags: 'scene crowd traffic npc'
    },
    {
      name: 'Pink Paw Heist ESP',
      text: 'Reveals loot and extraction points in the Pink Paw Heist, with value filtering, bank pickup loops, run limits and an entry-animation skip.',
      tags: 'esp pink paw heist extraction bank loot 粉爪 大劫案'
    },
    {
      name: 'NTE Vehicle',
      text: 'View, summon and tune the current vehicle: catalog, display name, speed, torque, wheel friction and control of non-player vehicles.',
      tags: 'vehicle speed torque dev 载具'
    },
    {
      name: '999 Nights Script',
      text: 'Loops enemy spawns in the 999 Nights Red Dragon Castle: camp respawns and auto combat at two battle points.',
      tags: '999 nights spawner auto combat script 刷怪'
    },
    {
      name: 'NTE Damage Dashboard',
      text: 'Live stats for character damage, hits, crits, party and skill breakdown, plus recent hit history.',
      tags: 'damage stats dashboard crit party 伤害'
    },
    {
      name: 'Custom UID',
      text: 'Lets you set the UID shown in the client UI.',
      tags: 'uid interface custom'
    },
    {
      name: 'Skin Changer Lite',
      text: 'Previews character accessories, gliders and awakened looks, and sets a custom license plate.',
      tags: 'skin appearance accessory glider plate 换肤'
    },
    {
      name: 'Camera Tools',
      text: 'Extends view distance, adjusts FOV and free-camera view, and can optionally stream the scene around the free-camera position.',
      tags: 'camera distance fov free cam 相机'
    },
    {
      name: 'CameraBlurFix',
      text: 'Removes the blur applied to your character when you look up.',
      tags: 'camera blur image 虚化'
    },
    {
      name: 'Better Pose',
      text: 'Change animation speed, pause and translation scale, edit joint poses, and import MMD motions and cameras.',
      tags: 'animation pose mmd skeleton joint 动作'
    },
    {
      name: 'HiFi Vehicle Music',
      text: 'Replaces in-car music with a local lossless library over WASAPI, DirectSound or ASIO.',
      tags: 'music car wasapi asio audio 车载'
    },
    {
      name: 'Quick Ultimate',
      text: 'Hold Alt+1/2/3/4 to switch characters and keep firing Q; release to stop.',
      tags: 'combo ultimate hotkey character switch 连招'
    },
    {
      name: 'Resource Auto Pickup',
      text: 'Reads resource tables and collects XP books, furniture, food, wallets and similar nodes by teleport or pathfinding.',
      tags: 'resource auto pickup teleport pathfinding 资源'
    },
    {
      name: 'Combat Resource Points',
      text: 'Visits monster chests and Anomaly furniture material nodes one by one, fights them, then flags and caches each locally.',
      tags: 'resource combat chest auto 战斗'
    },
    {
      name: 'Clone Enter',
      text: 'Enters, fights, loots and exits a dungeon per difficulty automatically, with optional looping.',
      tags: 'dungeon auto entry reward 副本'
    },
    {
      name: 'AutoFish',
      text: 'Casts, reels and plays the fish automatically, with continuous fishing, bait restocking and threshold selling.',
      tags: 'fishing auto bait 钓鱼'
    },
    {
      name: 'Free Fly',
      text: 'Free flight and noclip: WASD to move, Space to rise, Ctrl to descend, direction follows the view; the toggle hotkey is configurable.',
      tags: 'flight noclip movement explore 飞行 穿墙'
    },
    {
      name: 'WalletCollector',
      text: 'Scans wallet spawn points, plans a route for a target count and collects automatically.',
      tags: 'wallet auto route pickup 钱包'
    },
    {
      name: 'Model Scale',
      text: 'Scales the local character mesh without affecting movement or collision.',
      tags: 'model scale mesh 模型'
    },
    {
      name: 'UI Buttons',
      text: 'Lists clickable game UI buttons and can press them through the UI service.',
      tags: 'ui button click dev 按钮'
    },
    {
      name: 'Jelly',
      text: 'Keeps squashing and stretching characters, vehicles and dynamic models on screen, with adjustable strength, frequency, pause interval and self-rotation.',
      tags: 'fun squash stretch model 挤压'
    }
  ],

  market: {
    title: 'Community plugins',
    sub: 'Press <kbd>Insert</kbd> to open <b>Plugins</b> and handle day-to-day community plugin management.',
    colPage: 'Page',
    colUse: 'What it is for',
    rows: [
      { page: 'Available', desc: 'Search, download and install plugins' },
      { page: 'Updates', desc: 'See new versions of installed plugins' },
      { page: 'Installed', desc: 'Enable, disable, reload or uninstall plugins' },
      { page: 'Third-party', desc: 'Add, disable or remove plugin sources' }
    ],
    footnote: `The runtime ships with one plugin source already enabled; the effective address lives in
      <code>Anomaly\\plugin-repositories.json</code>. You can also add your own trusted HTTPS sources in the UI.
      Full steps are in the
      <a href="${links.thirdParty}" target="_blank" rel="noreferrer">third-party plugin docs</a>.`,
    warningTitle: '⚠️ Third-party plugin safety',
    warning: `Third-party plugins are native DLLs running inside the game process, not sandboxed scripts.
      Plugin lists and packages are not code-signed at the moment; Anomaly verifies the download URL, ZIP paths,
      manifest, version, game and API compatibility, but none of that proves a plugin is safe.
      <strong>Only install plugins from sources and authors you trust.</strong>`
  },

  install: {
    title: 'Quick start',
    sub: 'No build required — download the Runtime and follow four steps.',
    steps: [
      {
        title: 'Download and install the Runtime',
        html: `Grab <code>Anomaly-&lt;version&gt;-runtime.zip</code> from any of ${channelLinks}.
          <strong>Unzip the whole archive</strong> into an ordinary folder (do not pull out just the launcher),
          run <code>AnomalyLauncher.exe</code>, then on the <b>Proxy install</b> page choose the folder that
          directly contains <code>HTGame.exe</code> and click <b>Install</b>.`
      },
      {
        title: 'Launch the game as usual',
        html: `Start the game the way you always do and press <kbd>Insert</kbd> once you are in.
          A successful start produces <code>anomaly-runtime.log</code> and <code>anomaly-platform.log</code>.`
      },
      {
        title: 'Enable built-in plugins',
        html: `Open <b>Plugins &gt; Installed</b>, select a plugin and enable it. Every built-in plugin starts disabled.`
      },
      {
        title: 'Install community plugins',
        html: `Open <b>Plugins &gt; Available</b> and click <b>Install</b>, then enable it under <b>Installed</b>.
          When a new version shows up, upgrade it under <b>Plugins &gt; Updates</b>.`
      }
    ],
    directoryTitle: 'Game directory',
    layoutTitle: 'Layout after install',
    directoryNote: 'The launcher folder does not need to be copied into the game directory; to update, unzip a newer Runtime into a new folder and click <b>Update</b>.',
    buildTitle: 'Build from source (developers)',
    buildNote: `<code>build.cmd</code> is a thin wrapper around the only supported build path
      (CMake presets <code>windows-vs2022</code> + <code>windows-relwithdebinfo</code>); opt into dev fixtures,
      diagnostic probes and PDBs with <code>build.cmd fixtures|probes|symbols</code>.`
  },

  faq: {
    title: 'FAQ',
    sub: `More answers in the
      <a href="${links.troubleshooting}" target="_blank" rel="noreferrer">troubleshooting and FAQ</a> guide.`,
    items: [
      {
        q: 'Insert does nothing?',
        a: `Change the main-window hotkey in <b>Anomaly Launcher &gt; Launch settings</b>, or edit
          <code>[Platform] ToggleKey</code> in <code>anomaly.ini</code> (a Win32 virtual-key code;
          the default <code>45</code> is <code>VK_INSERT</code>).`
      },
      {
        q: 'The Available list is empty?',
        a: `Check <b>Plugins &gt; Third-party</b> and make sure both the master switch and the source are enabled,
          then go back to <b>Available</b> and hit refresh.`
      },
      {
        q: 'A community plugin fails to install?',
        a: `The usual causes are an unreachable download URL, a wrong ZIP layout, or a plugin ID, version, game or
          API that does not match the list. The UI shows the reason; details land in
          <code>Anomaly\\anomaly-platform.log</code>.`
      },
      {
        q: 'A plugin fails to load?',
        a: `Make sure it is a package directory containing <code>manifest.json</code>; root-level DLLs and
          directories without a manifest are not loaded.`
      },
      {
        q: 'Coordinates / entities report unavailable?',
        a: `Usually the active profile is missing the required signatures, or symbol and layout verification failed.
          See <a href="${links.profiles}" target="_blank" rel="noreferrer">NTE Build Profile</a>.`
      },
      {
        q: 'Does it conflict with RE-UE4SS?',
        a: `Both use <code>dwmapi.dll</code> as the proxy name, so they cannot share a directory. Anomaly is a
          standalone entry point and does not load <code>UE4SS.dll</code>.`
      }
    ]
  },

  docs: {
    title: 'Documentation',
    sub: 'All documentation is hosted in the main repository.',
    cards: [
      {
        icon: '📘',
        title: 'User guide',
        text: 'Installing, built-in and third-party plugins, updates, configuration and troubleshooting.',
        url: links.userGuide
      },
      {
        icon: '🛠️',
        title: 'Developer guide',
        text: 'Writing and publishing plugins, building from source, architecture and contribution flow.',
        url: links.developerGuide
      },
      {
        icon: '📑',
        title: 'API reference',
        text: 'The complete pure C ABI v1: lifecycle, every service table, manifests and capabilities.',
        url: links.apiReference
      }
    ],
    footnote: `The repository also ships an
      <a href="${links.architecture}" target="_blank" rel="noreferrer">architecture overview</a>
      and four standalone SDK samples; start a new plugin repo from the
      <a href="${links.template}" target="_blank" rel="noreferrer">Anomaly plugin template</a>.`
  },

  risk: {
    summary: '⚠️ Disclaimer and risk notice',
    p1: `Anomaly is a tool <strong>for research, diagnostics and plugin development</strong> and must not be used
      for cheating. Memory reads and writes, hooks, patches and entity scanning modify or inspect another process's
      runtime state, and can crash the game, corrupt data or get an account banned. Logs, crash dumps, profile data
      and diagnostic bundles <strong>may contain sensitive information</strong> — review and redact them before sharing.`,
    p2: `Under the <a href="${links.fairPlay}" target="_blank" rel="noreferrer">Neverness To Everness fair play
      statement</a>, third-party tools that undermine fair play are prohibited.
      <strong>You are expected to understand and voluntarily accept every risk that comes with using this tool.</strong>`
  },

  footer: {
    project: 'Project',
    docs: 'Docs',
    community: 'Community',
    source: 'Source repository',
    releases: 'Releases',
    license: 'License',
    notice: 'NOTICE',
    userGuide: 'User guide',
    developerGuide: 'Developer guide',
    apiReference: 'API reference',
    qq: 'QQ group',
    issues: 'Issues',
    copyright: '© {year} AnomalyNTE · Distributed under the GNU Affero General Public License v3.0 ({license}).'
  },

  promo: {
    hero: {
      eyebrow: 'Anomaly UI · New design',
      title: 'Through the glass,<br /><span class="grad">see your world.</span>',
      lede: `Real-time refraction, soft highlights, selection lenses that flow.<br />
        A Liquid Glass interface rebuilt for the in-game overlay.`,
      shotAlt: 'Liquid Glass plugin page',
      jumpAria: 'On this page',
      jumps: [
        { href: '#compare', label: 'Before / after' },
        { href: '#glass', label: 'Liquid glass' },
        { href: '#details', label: 'Details' },
        { href: '#gallery', label: 'Plugin gallery' }
      ],
      scrollHint: 'Scroll down',
      meta: `In development on the <code>feat/liquid-glass-ui</code> branch of the
        <a href="${links.repo}" target="_blank" rel="noreferrer">Anomaly main repository</a>.`
    },
    compare: {
      title: 'Drag it and see how much changed.',
      sub: 'The old UI on the left, the all-new Liquid Glass on the right.',
      tabsAria: 'Comparison screens',
      tabs: [
        { key: 'plugins', label: 'Plugins' },
        { key: 'diagnostics', label: 'Diagnostics' },
        { key: 'settings', label: 'Settings' },
        { key: 'developer', label: 'Developer' },
        { key: 'naiwa', label: 'Naiwa theme' }
      ],
      newAlt: 'New interface',
      oldAlt: 'Old interface',
      tagOld: 'Before',
      tagNew: 'After'
    },
    glass: {
      title: 'Every control is a piece of glass.',
      sub: 'The selection lens stretches, springs back, and the backdrop refracts underneath it. Try it yourself.',
      segAria: 'Segmented control demo',
      dockAria: 'Floating tab bar demo',
      segItems: [
        { key: 'installed', label: 'Installed' },
        { key: 'available', label: 'Available' },
        { key: 'updates', label: 'Updates' },
        { key: 'thirdparty', label: 'Third-party' }
      ],
      dockItems: [
        { key: 'plugins', label: 'Plugins', icon: '▦' },
        { key: 'diagnostics', label: 'Diagnostics', icon: '◫' },
        { key: 'settings', label: 'Settings', icon: '⚙' }
      ],
      seg: {
        title: 'Segmented control',
        text: 'The lens slides between options and stretches as it moves.'
      },
      switches: {
        title: 'Switches',
        text: 'Every checkbox became a switch, and the thumb widens while you press it.'
      },
      slider: {
        title: 'Slider',
        text: 'While dragging, the thumb turns into a clear lens so the track shows through.'
      },
      dock: {
        title: 'Floating tab bar',
        text: 'Navigation sinks to the bottom and floats above the content.'
      }
    },
    details: {
      title: 'Hidden in the details.',
      hint: 'Hover here',
      videoFallback: 'Your browser does not support embedded video playback.',
      features: [
        {
          title: 'Search that appears only when needed',
          text: 'Normally just a magnifier. Move the pointer closer and the field expands to the left.',
          alt: 'Plugin page',
          altAlt: 'Search field expanded'
        },
        {
          title: 'One bar for everything',
          text: 'Tabs, search, filter and sort share a single row, leaving more room for content.',
          alt: 'Top bar highlight',
          altAlt: ''
        },
        {
          title: 'The theme is still yours',
          text: 'Custom backgrounds, palettes and the sticker system all stay. The Naiwa theme wears glass too.',
          alt: 'Naiwa theme',
          altAlt: ''
        }
      ]
    },
    gallery: {
      title: 'Plugins are made of glass too.',
      sub: 'Plugin windows float directly over the game, the scene shows through, and the interface stays readable.',
      items: [
        { alt: 'Old plugin window', caption: 'Before' },
        { alt: 'New plugin window', caption: 'After' }
      ]
    },
    end: {
      title: '<span class="grad">Anomaly</span> Liquid Glass',
      text: 'Available now on the <code>feat/liquid-glass-ui</code> branch.',
      home: 'Back to the main page',
      plugins: 'Built-in plugins',
      repo: 'Source repository'
    }
  }
}
