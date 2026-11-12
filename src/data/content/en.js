/**
 * English copy (/en/). Structure mirrors zh-CN.js — keep both in sync field by field.
 *
 * Content follows the current AnomalyNTE/Anomaly docs (README + docs/en/, synced 2026-11):
 * built-in plugin names come from each plugin package manifest.json and its
 * locales/en-US.json, wording for install/config/troubleshooting from docs/en/user-guide/.
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
    support: {
      label: 'If Anomaly is useful to you, you can buy me a coffee:',
      afdian: 'Support Anomaly on Afdian',
      kofi: 'Support Anomaly on Ko-fi',
      afdianLabel: 'Support me on Afdian',
      kofiLabel: 'Support me on Ko-fi'
    }
  },

  features: {
    title: 'Core features',
    sub: 'Install, manage in game, extend through the plugin framework — the whole chain is covered.',
    items: [
      {
        icon: '🚀',
        title: 'Installation and updates',
        text: 'Extract the runtime package and attach the launcher to the game in inject mode, which writes nothing into the game directory; proxy mode is still available, and later versions update from inside the launcher.'
      },
      {
        icon: '🪟',
        title: 'In-game management UI',
        text: 'Press Insert to open the Chinese or English UI and manage plugin enablement, disabling, reload, and settings in one place, with customizable looks, palettes, and background layouts.'
      },
      {
        icon: '🌐',
        title: 'Third-party plugin downloads',
        text: 'Browse and install community plugins under Plugins > Available, upgrade under Updates, disable or uninstall under Installed, and add trusted HTTPS plugin sources yourself.'
      },
      {
        icon: '🔥',
        title: 'Hot mod loading',
        text: 'In hot mode, enabling, swapping, or removing a mod takes effect immediately and appearances refresh in place; resources that cannot be rebound fall back to Mod Manager world reload, and the game never restarts.'
      },
      {
        icon: '🔌',
        title: 'Practical built-in plugins',
        text: 'The package ships {plugins} player-facing built-in plugins covering coordinates and health, entity ESP, combat statistics, camera and blur removal, skins and model replacement, vehicles, scene switching, audio replacement, and automation — all disabled by default and enabled on demand.'
      },
      {
        icon: '🤖',
        title: 'Automation tasks',
        text: 'Resource Auto Pickup, Combat Resource Points, Clone Enter, WalletCollector, Night 999, AutoFish, AutoTaxi, and AutoClaw can teleport, fight, or pick up automatically, and you can stop them at any time from the plugin window.'
      },
      {
        icon: '🧩',
        title: 'Open plugin framework',
        text: 'A pure C ABI v1 SDK with unified V1 services, so a plugin project needs neither the runtime source nor the C++ ABI; plugin ids follow <author>.<plugin> and never collide.'
      },
      {
        icon: '🔍',
        title: 'Memory analysis and developer tools',
        text: 'Inspect process modules, PE sections, and memory regions, with a byte signature scan, one-click memory dump, diagnostics CLI, and the offline TestHost.'
      },
    ]
  },

  launcherShot: {
    image: 'launcher-en.png',
    alt: 'Anomaly Launcher',
    caption: 'Anomaly Launcher'
  },

  pluginsSection: {
    title: 'Built-in plugins',
    sub: 'Shipped with the runtime package and disabled by default. Filter by keyword, for example "summon", "camera", or "ESP".',
    placeholder: 'Search built-in plugins…',
    searchAria: 'Search built-in plugins',
    empty: 'No built-in plugin matches that keyword.',
    groups: {
      user: 'For players'
    },
    groupNotes: {
      user: 'Ships with the release runtime package; enable each one under Plugins > Installed.'
    }
  },

  plugins: [
    {
      group: 'user',
      name: 'Coordinate Display',
      text: 'Player and camera coordinates, session state, and snapshot sampling metrics.',
      tags: 'coordinates session sampling nteposition'
    },
    {
      group: 'user',
      name: 'Entity ESP',
      text: 'Configurable 2D/3D bounding boxes and labels for NTE entities.',
      tags: 'esp entity bounds labels entityesp'
    },
    {
      group: 'user',
      name: 'Health Display',
      text: 'Independent health bars with current/max HP for monsters and characters, with adjustable range, size, and text.',
      tags: 'health bar hp healthdisplay'
    },
    {
      group: 'user',
      name: 'NTE Combat Tracker',
      text: 'FF14-style DPS panel: capture runs inside the plugin, rendering in a bundled standalone overlay process.',
      tags: 'dps combat statistics damage overlay combattracker'
    },
    {
      group: 'user',
      name: 'Status Bar',
      text: 'Frame rate, 1% low, time, memory, and CPU/GPU load, clocks, power and temperature, with per-metric toggles, six screen positions, and adjustable spacing.',
      tags: 'status bar fps cpu gpu statusbar'
    },
    {
      group: 'user',
      name: 'UI Buttons',
      text: 'Lists in-game UI buttons by clickability and clicks them through the UI service without simulating a mouse.',
      tags: 'ui buttons click uibuttons'
    },
    {
      group: 'user',
      name: 'Camera Blur Fix',
      text: 'Removes camera fading for the player, NPCs, and crowds, including pitch-based fading and close-range hiding.',
      tags: 'camera blur depth camerablurfix'
    },
    {
      group: 'user',
      name: 'Camera Tools',
      text: 'View distance and FOV adjustment, forced camera rotation blocking, free camera, and optional scene loading around it.',
      tags: 'camera fov free camera cameratools'
    },
    {
      group: 'user',
      name: 'Model Scale',
      text: 'Rescales the local character mesh without touching movement or collision.',
      tags: 'model scale mesh modelscale'
    },
    {
      group: 'user',
      name: 'SkinChanger Lite',
      text: 'Character accessories, glider, awakened appearance, custom license plates, and the current vehicle appearance.',
      tags: 'skin appearance accessories plate skinchanger'
    },
    {
      group: 'user',
      name: 'NaiLong',
      text: 'Engine-native model replacement for the player and nearby NPCs with 36-bone source-rig skinning, restored when out of range.',
      tags: 'model replacement nailong'
    },
    {
      group: 'user',
      name: 'Jelly',
      text: 'Keeps characters, vehicles, and dynamic models in view squashing and stretching, with adjustable strength, frequency, rest interval, and spin.',
      tags: 'squash stretch jelly fun'
    },
    {
      group: 'user',
      name: 'Better Pose',
      text: 'Animation rate, pause, and displacement scale, joint pose editing, MMD motion and camera import, and Blender skeleton linking.',
      tags: 'pose mmd blender animation betterpose'
    },
    {
      group: 'user',
      name: 'Character Studio',
      text: 'Spawns local character models from a complete catalog with Chinese names, unlimited duplicates, idle loops, and per-model move/destroy.',
      tags: 'character model spawn idle characterstudio'
    },
    {
      group: 'user',
      name: 'Mod Manager',
      text: 'Mod toggles, classification, in-place appearance refresh, and world reload that pairs with hot loading.',
      tags: 'mod manager hot reload appearance modmanager'
    },
    {
      group: 'user',
      name: 'Custom UID',
      text: 'Custom UID, colors, and dynamic effects on the client UI, without touching account data.',
      tags: 'uid ui custom fakeuid'
    },
    {
      group: 'user',
      name: 'Pink Paw Heist ESP',
      text: 'Loot and extraction points with value filters, bank loop pickup, run limits, and entry animation skip.',
      tags: 'esp pink paw heist loot extraction pinkpaw'
    },
    {
      group: 'user',
      name: 'Quick Ultimate',
      text: 'Hold Alt+1..4 to switch characters and keep sending Q; release to stop.',
      tags: 'ultimate hotkey character switch quickultimate'
    },
    {
      group: 'user',
      name: 'Summon Lab',
      text: 'Spawns monsters and playable characters with custom attributes, hostile/pet modes, group battles, and unified management.',
      tags: 'summon blueprint entity battle summonlab'
    },
    {
      group: 'user',
      name: 'NPC Summon',
      text: 'Lists the NPC classes actually running in the world, filters them by keyword, spawns one in front of you, and clears your own spawns.',
      tags: 'npc summon spawn npcsummon'
    },
    {
      group: 'user',
      name: 'Training Dummy',
      text: 'Spawns dummies through the character own summon path, driven entirely from a panel.',
      tags: 'dummy training damage trainingdummy'
    },
    {
      group: 'user',
      name: 'Vehicle Control',
      text: 'Vehicle catalog, plain or customized summoning, speed/torque/wheel-friction tuning, and full durability for the current land vehicle.',
      tags: 'vehicle car speed torque vehicle'
    },
    {
      group: 'user',
      name: 'Scene Loader',
      text: 'Lists the game scenes and switches through the game own entrances, including in-scene entrances, world return, and data layers.',
      tags: 'scene loader data layer sceneloader'
    },
    {
      group: 'user',
      name: 'Deserted',
      text: 'Stops crowd and traffic spawning without affecting stationary NPCs.',
      tags: 'crowd traffic scene deserted'
    },
    {
      group: 'user',
      name: 'HiFi Vehicle Music',
      text: 'Replaces in-vehicle music with a local lossless library over WASAPI exclusive/shared, DirectSound, or ASIO.',
      tags: 'music vehicle wasapi asio hifivehiclemusic'
    },
    {
      group: 'user',
      name: 'Better TV',
      text: 'Replaces the residence TV video with a local clip or a Bilibili link; memory only, no game files written.',
      tags: 'tv video bilibili bettertv'
    },
    {
      group: 'user',
      name: 'Resource Auto Pickup',
      text: 'Reads the resource point table and picks up EXP books, gifts, furniture, food, wallets, Oracle stones, and more.',
      tags: 'resource auto pickup boxauto pickup'
    },
    {
      group: 'user',
      name: 'Combat Resource Points',
      text: 'Visits combat chests and Anomaly furniture material points one by one, fights, then marks and caches them locally.',
      tags: 'resource combat chest combatbox'
    },
    {
      group: 'user',
      name: 'Clone Enter',
      text: 'Enters a dungeon by dungeon and difficulty, fights, claims rewards, exits, and optionally loops.',
      tags: 'dungeon auto cloneenter'
    },
    {
      group: 'user',
      name: 'WalletCollector',
      text: 'Scans wallet spawn points, plans a route for the target count, and collects the wallets automatically.',
      tags: 'wallet pickup route walletcollector'
    },
    {
      group: 'user',
      name: 'Night 999',
      text: 'Loops enemy farming in Crimson Dragon Castle for the configured number of rounds: camp respawn plus automatic combat at two fight points.',
      tags: 'night 999 farming script night999'
    },
    {
      group: 'user',
      name: 'AutoFish',
      text: 'Automatic casting, hooking, and reeling with continuous fishing, bait restocking, and selling past a threshold.',
      tags: 'fish fishing bait autofish'
    },
    {
      group: 'user',
      name: 'AutoTaxi',
      text: 'Completes taxi orders automatically and shows the completion count the game confirms.',
      tags: 'taxi order auto autotaxi'
    },
    {
      group: 'user',
      name: 'AutoClaw',
      text: 'Picks a doll in the active machine, auto-submits one capture after you pay a round, and shows the game result.',
      tags: 'claw machine doll autoclaw'
    },
    {
      group: 'user',
      name: 'Free Fly',
      text: 'WASD flight and noclip with Space to ascend and Ctrl to descend, direction following the view; the toggle hotkey is configurable.',
      tags: 'fly noclip movement freefly'
    },
  ],

  market: {
    title: 'Community plugins',
    sub: 'Press <kbd>Insert</kbd> to open <b>Plugins</b> and handle day-to-day community plugin management.',
    colPage: 'Page',
    colUse: 'What it is for',
    rows: [
      { page: 'Available', desc: 'Search, download and install plugins; incompatible entries state why' },
      { page: 'Updates', desc: 'See and upgrade new versions of installed plugins' },
      { page: 'Installed', desc: 'Enable, disable, reload or uninstall plugins' },
      { page: 'Third-party', desc: 'Add, disable or remove plugin sources' }
    ],
    footnote: `The runtime ships with one plugin source already enabled; the effective address lives in
      <code>Anomaly\\plugin-repositories.json</code>. You can also add your own trusted HTTPS sources in the UI.
      Newly installed plugins stay disabled; uninstalling removes only the package, while settings and data under
      <code>Anomaly\\config\\plugins\\&lt;plugin id&gt;</code> and
      <code>Anomaly\\state\\plugins\\&lt;plugin id&gt;</code> are kept. Full steps are in the
      <a href="${links.thirdParty}" target="_blank" rel="noreferrer">third-party plugin docs</a>.`,
    warningTitle: '⚠️ Third-party plugin safety',
    warning: `Third-party plugins are native DLLs running inside the game process, not sandboxed scripts; manifest
      capabilities only limit which Anomaly services they may call. Plugin lists and packages are not code-signed at
      the moment; Anomaly verifies the download URL, ZIP paths, manifest, version, game and API compatibility, but none
      of that proves a plugin is safe. <strong>Only install plugins from sources and authors you trust.</strong>`
  },

  install: {
    title: 'Quick start',
    sub: 'No build required — download the Runtime and follow five steps.',
    steps: [
      {
        title: 'Download and fully extract the Runtime',
        html: `Grab <code>Anomaly-&lt;version&gt;-runtime.zip</code> from any of ${channelLinks}.
          <strong>Unzip the whole archive</strong> into an ordinary folder (do not run it from inside the archive,
          and do not pull out just <code>AnomalyLauncher.exe</code>), then run the bundled
          <code>AnomalyLauncher.exe</code>.`
      },
      {
        title: 'Confirm the two paths in the launcher',
        html: `On the <b>Launch</b> page, confirm the two paths at the top: <b>Launcher directory</b> points at the
          official <code>NTELauncher.exe</code> and <b>Game directory</b> at the folder that directly contains
          <code>HTGame.exe</code>. Repick either one with the button on the right.`
      },
      {
        title: 'Attach with inject mode',
        html: `Keep the default <b>Inject mode</b> and pick the button that matches the game state: <b>Launch and attach</b>
          when the game is not running, <b>Inject into running process</b> when it already is — neither writes anything
          into the game directory. To put the proxy inside the game folder so a shortcut always brings Anomaly along,
          switch to <b>Proxy mode</b> and click <b>Install</b>; the two modes are exclusive, so the inject buttons stay
          disabled until you click <b>Disable</b>.`
      },
      {
        title: 'Launch the game and accept the notice',
        html: `Start the game the way you always do and press <kbd>Insert</kbd> once you are in. The first time, a
          <b>first-run notice</b> appears — plugin features unlock after you accept it. A successful start writes
          <code>Anomaly\\logs\\anomaly-runtime.log</code> and <code>Anomaly\\anomaly-platform.log</code>.`
      },
      {
        title: 'Enable built-in plugins, install community ones',
        html: `Open <b>Plugins &gt; Installed</b>, select a built-in plugin and enable it (every one starts disabled, and
          required dependencies are enabled along with it). Community plugins: click <b>Install</b> under
          <b>Plugins &gt; Available</b>, enable them under <b>Installed</b>, and upgrade them under
          <b>Plugins &gt; Updates</b>.`
      }
    ],
    directoryTitle: 'Game directory',
    layoutTitle: 'Layout after a proxy install',
    directoryNote: `Inject mode writes nothing into the game directory — the layout above only appears with the proxy. The launcher folder does not need to be copied into the game directory; to update, unzip a newer
      Runtime into a new folder and click <b>Update</b>. The launcher compares the SHA-256 of the old and new
      <code>Anomaly.Core.dll</code> and replaces only the Core, profiles and bundled plugins —
      <code>anomaly.ini</code>, <code>config\\</code>, <code>state\\</code>, <code>logs\\</code> and plugins you
      added yourself stay as they are.`,
    buildTitle: 'Build from source (developers)',
    buildNote: `<code>build.cmd</code> is a thin wrapper around the only supported build path
      (CMake presets <code>windows-vs2022</code> + <code>windows-relwithdebinfo</code>); opt into dev fixtures,
      developer test plugins and PDBs with <code>build.cmd fixtures|testplugins|symbols</code>.`,
  },

  faq: {
    title: 'FAQ',
    sub: `More answers in the
      <a href="${links.troubleshooting}" target="_blank" rel="noreferrer">troubleshooting and FAQ</a> guide.`,
    items: [
      {
        q: 'Insert does nothing?',
        a: `First confirm the Runtime injected: does <code>Anomaly\\logs\\anomaly-runtime.log</code> exist and record the
          game PID? Then check the main-window hotkey — press a key in the launcher's
          <b>Settings &gt; Startup settings</b>, or edit <code>[Platform] ToggleKey</code> in <code>anomaly.ini</code>
          (a Win32 virtual-key code; the default <code>45</code> is <code>VK_INSERT</code>).`
      },
      {
        q: 'The Available list is empty?',
        a: `Check <b>Plugins &gt; Third-party</b> and make sure both the master switch and the source are enabled with an
          HTTPS address, then go back to <b>Available</b> and hit refresh. An offline source may leave only the last
          cached list.`
      },
      {
        q: 'A community plugin fails to install?',
        a: `The usual causes are a non-HTTPS or unreachable download URL, a ZIP with an extra directory level, or a
          plugin ID, version, game or API that does not match the list. The UI shows the reason; details land in
          <code>Anomaly\\anomaly-platform.log</code>.`
      },
      {
        q: 'A plugin fails to load?',
        a: `Make sure it is a package directory containing <code>manifest.json</code>; root-level DLLs and directories
          without a manifest are not loaded. Other frequent reasons are unknown capabilities, or a required service
          without its capability declaration.`
      },
      {
        q: 'Coordinates / entities report unavailable?',
        a: `Usually the active profile is missing the required signatures, or symbol and layout verification failed —
          the feature stays unavailable instead of crashing the plugin. Check the Feature Matrix with the CLI
          <code>ue</code> command or <b>Diagnostics &gt; Developer &gt; NTE Compatibility</b>, and see
          <a href="${links.profiles}" target="_blank" rel="noreferrer">NTE Build Profile</a>.`
      },
      {
        q: 'The inject mode buttons stay disabled?',
        a: `The inject actions are disabled while the proxy is enabled: go to <b>Launch &gt; Proxy mode</b>, click
          <b>Disable</b>, and exit the game first. <b>Launch and attach</b> only works when no <code>HTGame.exe</code>
          is running; if the game is already running, use <b>Inject into running process</b>, which maps the core only
          and does not restart the game.`
      },
      {
        q: 'D3D12 Present errors after enabling DLSS or frame generation?',
        a: `The embedded backend converts Streamline proxy devices and command queues back to native D3D12 interfaces
          before submitting its own commands. If it still fails, set <code>[Platform] Embedded</code> to
          <code>0</code> in <code>anomaly.ini</code>, keep <code>AttachToProcessWindow=1</code>, then restart the game
          to use the standalone window overlay backend.`
      },

      {
        q: 'Where do plugin settings and enablement live?',
        a: `Plugin JSON config is under <code>Anomaly\\config\\plugins\\</code>, global enablement in
          <code>Anomaly\\config\\plugin-enablement.json</code>; the UI palette and background layouts live in
          <code>Anomaly\\config\\platform-settings.json</code> and <code>Anomaly\\config\\themes\\</code>.`
      },
      {
        q: 'How do I remove Anomaly completely?',
        a: `The launcher ships an uninstall action: exit the game, open <b>Launch &gt; Proxy mode</b>, click
          <b>Uninstall</b>, then review the directory and deletion scope in the dialog and confirm. It removes
          <code>dwmapi.dll</code> (or <code>dwmapi.dll.disabled</code>) and the entire <code>Anomaly\\</code>
          folder in the game directory, including settings, plugins, and runtime data. Use <b>Disable</b> to stop
          loading Anomaly temporarily; inject-mode runs write nothing there, so deleting the extracted folder is enough.`
      }
    ]
  },

  docs: {
    title: 'Documentation',
    sub: 'All documentation lives in the main repository, page by page in both languages.',
    cards: [
      {
        icon: '📘',
        title: 'User guide',
        text: 'Installation, quick start, configuration, built-in plugins, diagnostics CLI, themes and troubleshooting.',
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
        text: 'The complete pure C ABI v1: lifecycle, every service table, IPC, manifests and capabilities.',
        url: links.apiReference
      }
    ],
    footnote: `The repository also ships an
      <a href="${links.architecture}" target="_blank" rel="noreferrer">architecture overview</a>,
      <a href="${links.theme}" target="_blank" rel="noreferrer">themes and backgrounds</a>,
      <a href="${links.diagnosticsCli}" target="_blank" rel="noreferrer">the diagnostics CLI</a>
      and <a href="${links.examples}" target="_blank" rel="noreferrer">standalone SDK examples</a>; start a new plugin
      repo from the <a href="${links.template}" target="_blank" rel="noreferrer">Anomaly plugin template</a>.`
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
    discord: 'Discord',
    issues: 'Issues',
    credits: 'Credits: ',
    creditSep: ', ',
    copyright: '© {year} AnomalyNTE · Distributed under the GNU Affero General Public License v3.0 ({license}).'
  },

  promo: {
    hero: {
      eyebrow: 'Anomaly UI · Liquid Glass',
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
      meta: `Shipping with the runtime since v2.6.0; the source lives in the
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
      text: 'Shipping with the runtime since v2.6.0 — press <kbd>Insert</kbd> to see it.',
      home: 'Back to the main page',
      plugins: 'Built-in plugins',
      repo: 'Source repository'
    }
  }
}
