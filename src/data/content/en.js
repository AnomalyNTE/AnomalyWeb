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
    lede: `Unzip the Runtime and point the launcher at the folder holding <code>HTGame.exe</code> to install the
      proxy entry point — or map the Core straight into a running game with <b>live attach</b> and leave the game
      folder untouched. Press <kbd>Insert</kbd> for the in-game manager, then enable built-in plugins, browse
      community plugins and read diagnostics from one entry point.`,
    support: {
      label: 'If Anomaly is useful to you, you can buy me a coffee:',
      afdian: 'Support Anomaly on Afdian',
      kofi: 'Support Anomaly on Ko-fi',
      afdianLabel: 'Support me on Afdian',
      kofiLabel: 'Support me on Ko-fi'
    }
  },

  promoTeaser: {
    eyebrow: 'Anomaly UI · Liquid Glass',
    title: 'Look through the glass. See your world.',
    text: 'Real-time refraction, soft highlights, selection lenses that flow. The Liquid Glass interface rebuilt for the in-game overlay has landed in mainline and ships with the runtime since v2.6.0; the preview page still offers a side-by-side comparison and playable controls.',
    points: [
      'Side-by-side before/after with a draggable divider',
      'Segmented controls, switches, sliders and a floating tab bar you can try',
      'Backgrounds, palettes and the sticker system all kept',
      'A glass status bar plugin ships as well since v2.6.0'
    ],
    cta: 'View the preview',
    imageAlt: 'Liquid Glass plugin page',
    sub: 'A Liquid Glass interface rebuilt for the in-game overlay.',
    announce: {
      badge: 'v2.6.0',
      title: 'Anomaly UI · Liquid Glass is in mainline',
      text: 'Real-time refraction, flowing lenses — shipping with the runtime',
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
        text: 'Unzip the Runtime and pick the folder holding HTGame.exe on the proxy-install page, or use live attach to map the Core into a running game. Updates keep your config, logs and custom plugins.'
      },
      {
        icon: '🪟',
        title: 'In-game manager',
        text: 'Press Insert for a Chinese or English UI with three main tabs — Plugins, Diagnostics and Settings — plus a Liquid Glass look and customizable palettes and backgrounds layouts.'
      },
      {
        icon: '🌐',
        title: 'Community plugin downloads',
        text: 'Browse and install under Plugins > Available, upgrade under Updates, disable or uninstall under Installed, or add your own trusted HTTPS plugin sources.'
      },
      {
        icon: '🔌',
        title: 'Practical built-ins',
        text: '{plugins} player-facing built-in plugins ship with the runtime — ESP, camera, summoning, automation, a status bar and character looks — all off by default; developer mode reveals the debug set.'
      },
      {
        icon: '🎥',
        title: 'Camera tools, unified',
        text: 'Camera Tools folds view distance, FOV, forced-rotation blocking and the free camera into one camera hook, so two camera plugins no longer fight over it.'
      },
      {
        icon: '🤖',
        title: 'Automation tasks',
        text: 'Resource pickup, combat points, auto dungeons, wallet collection, the Night 999 script and AutoTaxi teleport, fight or collect on their own — and stop whenever you want.'
      },
      {
        icon: '🎨',
        title: 'Themes and backgrounds',
        text: 'Several built-in palettes (Naiwa by default), backgrounds in center, crop or stretch mode, up to 64 stickers that may overflow the window, and an offline web editor that exports the layout JSON.'
      },
      {
        icon: '🧭',
        title: 'Status and troubleshooting',
        text: 'Incompatible plugins, missing dependencies or an unready profile state the reason right away, with details in Diagnostics, the logs and a named-pipe diagnostics CLI.'
      },
      {
        icon: '🧩',
        title: 'Open plugin framework',
        text: 'A pure C ABI v1 SDK with unified V1 services, so plugins never depend on the Runtime source or the C++ ABI; plugin ids are namespaced as <author>.<plugin>.'
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
        text: 'Inspect process modules, PE sections and memory regions, with byte-signature scanning, one-click memory dumps, the diagnostics CLI and an offline TestHost.'
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
    sub: 'Shipped with the runtime and disabled by default. Type to filter — try "summon", "camera" or "ESP".',
    placeholder: 'Search built-in plugins…',
    searchAria: 'Search built-in plugins',
    empty: 'No built-in plugin matches that. Try another keyword.',
    groups: {
      user: 'For players',
      developer: 'Developer mode'
    },
    groupNotes: {
      user: 'Installed with the runtime — enable each one under Plugins > Installed.',
      developer: 'Debug and development plugins, listed only when developer mode is enabled for the session.'
    }
  },

  plugins: [
    {
      group: 'user',
      name: 'Coordinate Display',
      text: 'Shows player and camera coordinates, session state and snapshot sampling metrics.',
      tags: 'coordinate session debug sampling nteposition 坐标'
    },
    {
      group: 'user',
      name: 'Entity ESP',
      text: 'Draws configurable 2D and 3D world-space bounds and labels for NTE entities.',
      tags: 'esp entity bounds overlay entityesp 实体'
    },
    {
      group: 'user',
      name: 'Deserted',
      text: 'Stops crowd and traffic spawns without touching stationary NPCs.',
      tags: 'scene crowd traffic npc deserted 场景'
    },
    {
      group: 'user',
      name: 'Pink Paw Heist ESP',
      text: 'Reveals loot and extraction points in the Pink Paw Heist, with value filtering, pickup controls and an entry-animation skip.',
      tags: 'esp pink paw heist extraction bank loot 粉爪'
    },
    {
      group: 'user',
      name: 'NTE Damage Dashboard',
      text: 'Live damage, hits and skill breakdown for the characters you control, with same-name skills merged.',
      tags: 'damage stats dashboard crit party damagedashboard 伤害'
    },
    {
      group: 'user',
      name: 'Summon Lab',
      text: 'Summons and manages entities by blueprint, initializing level, health and attributes during native spawning, with presets, grouped battles and advanced aggro.',
      tags: 'summon blueprint entity battle health summonlab 召唤'
    },
    {
      group: 'user',
      name: 'Character Studio',
      text: 'Spawns local character models with a full catalog and Chinese names, unlimited duplicates, looping idle animations, movement and removal.',
      tags: 'character model studio idle characterstudio 角色'
    },
    {
      group: 'user',
      name: 'NPC Summon',
      text: 'Lists the NPC classes actually running in the world, filters them by keyword, spawns one in front of you and clears the ones you spawned.',
      tags: 'npc summon spawn npcsummon 召唤'
    },
    {
      group: 'user',
      name: 'Training Dummy',
      text: 'Spawns training dummies through the character’s own summon path — steadier than stuffing a panel into the in-game tab wheel.',
      tags: 'training dummy damage test trainingdummy 木桩'
    },
    {
      group: 'user',
      name: 'NaiLong',
      text: 'Engine-native model replacement that turns you and nearby NPCs into NaiLong, restoring automatically on range exit.',
      tags: 'model replacement costume nailong 奶龙'
    },
    {
      group: 'user',
      name: 'SkinChanger Lite',
      text: 'Previews accessories, gliders and awakened looks, sets a custom license plate and switches the appearance of the vehicle you drive.',
      tags: 'skin appearance accessory glider plate skinchanger 换肤'
    },
    {
      group: 'user',
      name: 'Model Scale',
      text: 'Rescales the local character mesh by a factor without touching movement or collision.',
      tags: 'model scale mesh modelscale 缩放'
    },
    {
      group: 'user',
      name: 'Custom UID',
      text: 'Customizes the UID shown in the client UI, including color and animation, without touching account data.',
      tags: 'uid interface custom fakeuid 界面'
    },
    {
      group: 'user',
      name: 'Status Bar',
      text: 'A liquid glass status bar with frame rate, 1% low, clock, memory, and CPU/GPU load, clock, power and temperature.',
      tags: 'status bar fps cpu gpu overlay statusbar 状态条'
    },
    {
      group: 'user',
      name: 'Camera Tools',
      text: 'Adjusts view distance and FOV, blocks forced camera rotation, switches to a free camera and can stream the scene around it.',
      tags: 'camera distance fov free cam cameratools 相机'
    },
    {
      group: 'user',
      name: 'Camera Blur Fix',
      text: 'Removes camera-induced fading for the player, NPCs and crowds, including pitch-based fading and close-range hiding.',
      tags: 'camera blur fade camerablurfix 虚化'
    },
    {
      group: 'user',
      name: 'Better Pose',
      text: 'Adjusts animation rate, pause and root-motion scale, edits joint poses per bone, imports MMD motions and cameras, and links to a Blender rig.',
      tags: 'animation pose mmd blender skeleton betterpose 动作'
    },
    {
      group: 'user',
      name: 'HiFi Vehicle Music',
      text: 'Replaces in-car music with a local lossless library over exclusive or shared WASAPI, DirectSound or ASIO.',
      tags: 'music car wasapi asio audio hifivehiclemusic 车载'
    },
    {
      group: 'user',
      name: 'Quick Ultimate',
      text: 'Hold Alt+1 through Alt+4 to switch to that character and keep firing the ultimate; release to stop.',
      tags: 'combo ultimate hotkey character switch quickultimate 连招'
    },
    {
      group: 'user',
      name: 'Resource Auto Pickup',
      text: 'Reads resource tables and collects XP books, furniture, food, prison resources, wallets, shop items and similar nodes, by teleport.',
      tags: 'resource auto pickup teleport boxauto 资源'
    },
    {
      group: 'user',
      name: 'Combat Resource Points',
      text: 'Teleports to monster chests and Anomaly furniture material nodes, fights them, then flags and caches each locally.',
      tags: 'resource combat chest auto combatbox 战斗'
    },
    {
      group: 'user',
      name: 'Clone Enter',
      text: 'Enters, fights, loots and exits a dungeon per difficulty automatically, with optional looping.',
      tags: 'dungeon auto entry reward cloneenter 副本'
    },
    {
      group: 'user',
      name: 'Auto Fish',
      text: 'Casts, hooks and reels automatically, with continuous fishing, bait restocking and threshold selling.',
      tags: 'fishing auto bait autofish 钓鱼'
    },
    {
      group: 'user',
      name: 'AutoTaxi',
      text: 'Requests pickup, delivers the passenger and takes the next order automatically, showing the completions the game confirms.',
      tags: 'taxi order auto drive autotaxi 出租车'
    },
    {
      group: 'user',
      name: 'Night 999',
      text: 'Loops monster farming in the Night 999 Crimson Dragon Castle: camp teleport and refresh, auto combat at two fight points, repeated for the configured rounds (0 = unlimited).',
      tags: 'night 999 spawner auto combat script night999 刷怪'
    },
    {
      group: 'user',
      name: 'Scene Loader',
      text: 'Lists game scenes and switches through the game’s own entrances, forces a return to the big world and toggles the current scene’s data layers.',
      tags: 'scene switch data layer sceneloader 场景'
    },
    {
      group: 'user',
      name: 'Free Fly',
      text: 'Free flight and noclip: WASD to move, Space to rise, Ctrl to descend; the toggle hotkey is captured in the panel.',
      tags: 'flight noclip movement explore freefly 飞行 穿墙'
    },
    {
      group: 'user',
      name: 'WalletCollector',
      text: 'Scans wallet spawn points, plans a route for a target count and collects the wallets automatically.',
      tags: 'wallet auto route pickup walletcollector 钱包'
    },
    {
      group: 'user',
      name: 'UI Buttons',
      text: 'Lists in-game UI buttons as clickable, unclickable or hidden, picks the button under the cursor and fires its click event directly.',
      tags: 'ui button click dev uibuttons 按钮'
    },
    {
      group: 'user',
      name: 'Jelly',
      text: 'Keeps squashing and stretching characters, vehicles and dynamic models on screen, with adjustable strength, frequency, pause interval and self-rotation.',
      tags: 'fun squash stretch model jelly 挤压'
    },
    {
      group: 'developer',
      name: 'Teleport',
      text: 'Teleports the player to entered or saved world coordinates, with crosshair-direction and fixed-distance teleports plus JSON point categories.',
      tags: 'teleport coordinates landmark dev 传送'
    },
    {
      group: 'developer',
      name: 'Vehicle Control',
      text: 'Spawns vehicles plainly or per model, tunes performance and wheel friction, keeps durability full and reports diagnostics.',
      tags: 'vehicle speed torque tune dev 载具'
    },
    {
      group: 'developer',
      name: 'Time Accel',
      text: 'Sets a world time-dilation multiplier with rebindable hotkeys; character damage may be off at 2x and above.',
      tags: 'time dilation speed dev timeaccel 时间'
    },
    {
      group: 'developer',
      name: 'Memory Dump',
      text: 'Dumps the live game module image in one click: raw image, a section-remapped copy and a metadata record.',
      tags: 'memory dump image dev memorydump 转储'
    },
    {
      group: 'developer',
      name: 'DLL Loader',
      text: 'Loads a configured native DLL from the plugin package while the game is running.',
      tags: 'dll loader native dev dllloader 加载'
    },
    {
      group: 'developer',
      name: 'Nearby Pickup',
      text: 'Requests the framework pickup service for nearby items and displays the confirmation state.',
      tags: 'pickup nearby items dev 拾取'
    },
    {
      group: 'developer',
      name: 'Navigation',
      text: 'Starts and stops native NTE navigation through the host ABI.',
      tags: 'navigation navmesh path dev 寻路'
    },
    {
      group: 'developer',
      name: 'Movement Hold Probe',
      text: 'Toggles the host player-hold service to exercise the character freeze and reports live gravity, velocity and movement mode.',
      tags: 'movement freeze probe dev 移动'
    },
    {
      group: 'developer',
      name: 'Map Spawn Exporter',
      text: 'Reads static map spawn tables without scanning loaded actors and exports their coordinates as JSON.',
      tags: 'map spawn export json dev 地图'
    },
    {
      group: 'developer',
      name: 'Teleport Landmarks Probe',
      text: 'Enumerates every framework teleport landmark with its ID, world and coordinates, and submits transfers directly.',
      tags: 'landmark teleport probe dev 地标'
    }
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
    sub: 'No build required — download the Runtime and follow four steps.',
    steps: [
      {
        title: 'Download and install the Runtime',
        html: `Grab <code>Anomaly-&lt;version&gt;-runtime.zip</code> from any of ${channelLinks}.
          <strong>Unzip the whole archive</strong> into an ordinary folder (do not pull out just the launcher) and run
          <code>AnomalyLauncher.exe</code>. For a first install use <b>Proxy install</b>: choose the folder that
          directly contains <code>HTGame.exe</code> and click <b>Install</b>. To leave the game folder untouched,
          use <b>Launch &amp; attach</b> on the <b>Live attach</b> page instead.`
      },
      {
        title: 'Launch the game and accept the notice',
        html: `Start the game the way you always do and press <kbd>Insert</kbd> once you are in. The first time, a
          <b>first-run notice</b> appears — plugin features unlock after you accept it. A successful start writes
          <code>Anomaly\\logs\\anomaly-runtime.log</code> and <code>Anomaly\\anomaly-platform.log</code>.`
      },
      {
        title: 'Enable built-in plugins',
        html: `Open <b>Plugins &gt; Installed</b>, select a plugin and enable it. Every built-in plugin starts disabled,
          and required dependencies are enabled along with it.`
      },
      {
        title: 'Install community plugins',
        html: `Open <b>Plugins &gt; Available</b> and click <b>Install</b>, then enable it under <b>Installed</b>.
          When a new version shows up, upgrade it under <b>Plugins &gt; Updates</b>. The installer does not fetch
          dependencies, so install those separately.`
      }
    ],
    directoryTitle: 'Game directory',
    layoutTitle: 'Layout after install',
    directoryNote: `The launcher folder does not need to be copied into the game directory; to update, unzip a newer
      Runtime into a new folder and click <b>Update</b>. The launcher compares the SHA-256 of the old and new
      <code>Anomaly.Core.dll</code> and replaces only the Core, profiles and bundled plugins —
      <code>anomaly.ini</code>, <code>config\\</code>, <code>state\\</code>, <code>logs\\</code> and plugins you
      added yourself stay as they are.`,
    buildTitle: 'Build from source (developers)',
    buildNote: `<code>build.cmd</code> is a thin wrapper around the only supported build path
      (CMake presets <code>windows-vs2022</code> + <code>windows-relwithdebinfo</code>); opt into dev fixtures,
      developer test plugins and PDBs with <code>build.cmd fixtures|testplugins|symbols</code>.`
  },

  faq: {
    title: 'FAQ',
    sub: `More answers in the
      <a href="${links.troubleshooting}" target="_blank" rel="noreferrer">troubleshooting and FAQ</a> guide.`,
    items: [
      {
        q: 'Insert does nothing?',
        a: `First confirm the Runtime injected: does <code>Anomaly\\logs\\anomaly-runtime.log</code> exist and record the
          game PID? Then check the hotkey — change it in <b>Anomaly Launcher &gt; Launch settings</b>, or edit
          <code>[Platform] ToggleKey</code> in <code>anomaly.ini</code> (a Win32 virtual-key code; the default
          <code>45</code> is <code>VK_INSERT</code>) — and confirm <code>Enabled=1</code> and <code>Embedded=1</code>.`
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
        q: 'Why are "Launch & attach" or "Attach to running process" greyed out?',
        a: `They are complementary: once the page lists a running <code>HTGame.exe</code>, <b>Launch &amp; attach</b> is
          disabled because it starts a new process. With no game running it is the other way round. A listed process
          that cannot be attached usually differs in elevation or is not a 64-bit process.`
      },
      {
        q: 'D3D12 Present errors after enabling DLSS or frame generation?',
        a: `The embedded backend converts Streamline proxy devices and command queues back to native D3D12 interfaces
          before submitting its own commands. If it still fails, set <code>[Platform] Embedded</code> to
          <code>0</code> in <code>anomaly.ini</code>, keep <code>AttachToProcessWindow=1</code>, then restart the game
          to use the standalone window overlay backend.`
      },
      {
        q: 'Does it conflict with RE-UE4SS?',
        a: `Both use <code>dwmapi.dll</code> as the proxy name, so they cannot share a directory. Anomaly is a
          standalone entry point and does not load <code>UE4SS.dll</code>. Having both <code>dwmapi.dll</code> and
          <code>dwmapi.dll.disabled</code> in place also counts as a conflict.`
      },
      {
        q: 'Where do plugin settings and enablement live?',
        a: `Plugin JSON config is under <code>Anomaly\\config\\plugins\\</code>, global enablement in
          <code>Anomaly\\config\\plugin-enablement.json</code>; the UI palette and background layouts live in
          <code>Anomaly\\config\\platform-settings.json</code> and <code>Anomaly\\config\\themes\\</code>.`
      },
      {
        q: 'How do I remove Anomaly completely?',
        a: `The launcher has no uninstall button yet: quit the game and the launcher, delete <code>dwmapi.dll</code>
          (or <code>dwmapi.dll.disabled</code>) and the <code>Anomaly\\</code> folder from the game directory, then
          delete <code>AnomalyLauncher.json</code> in the extracted folder if you want the remembered paths gone.
          Back up settings and custom plugins first.`
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
