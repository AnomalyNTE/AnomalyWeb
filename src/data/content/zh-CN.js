/**
 * 简体中文文案（站点根目录 /）。
 * 与 en.js 保持完全相同的结构 —— 加字段时两边一起加，缺字段会直接渲染成空白。
 */

import { downloadChannels, links } from '../links.js'

const channelLabels = {
  github: { label: 'GitHub 下载', note: '官方发布页，含 runtime / sdk / tools' },
  quark: { label: '夸克网盘', note: '提取码 gGdV' },
  baidu: { label: '百度网盘', note: '提取码 hfs5' }
}

const downloads = downloadChannels.map((channel) => ({ ...channel, ...channelLabels[channel.key] }))

const channelLinks = downloads
  .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
  .join('、')

export default {
  locale: 'zh',
  htmlLang: 'zh-CN',
  /** 语言按钮上显示的目标语言名 */
  switchLabel: 'English',
  switchTitle: '切换到英文页面',

  meta: {
    name: 'Anomaly',
    cnName: '异象',
    tagline: '稳定、灵活、开放的《异环》插件平台',
    qq: '1037114140',
    license: 'AGPL-3.0-only'
  },

  ui: {
    skip: '跳到主要内容',
    navAria: '主导航',
    themeTitle: '切换主题',
    themeToDark: '切换到深色主题',
    themeToLight: '切换到浅色主题'
  },

  nav: [
    { href: '#features', label: '特性' },
    { href: '#plugins', label: '内建插件' },
    { href: '#market', label: '第三方插件' },
    { href: '#install', label: '快速上手' },
    { href: '#faq', label: '常见问题' },
    { href: '#docs', label: '文档' },
    { page: 'promo', label: '界面预览' }
  ],

  downloads,

  hero: {
    lede: `解压 Runtime，选中 <code>HTGame.exe</code> 所在目录即可安装；按 <kbd>Insert</kbd>
      呼出游戏内管理界面，启用内建插件、浏览社区插件、查看诊断状态，一个入口全部搞定。`
  },

  promoTeaser: {
    eyebrow: 'Anomaly UI · 全新设计',
    title: '透过玻璃，看见你的世界。',
    text: '实时折射、柔和高光、会流动的选择镜片。一套为游戏内覆盖层重新打造的 Liquid Glass 界面，已在界面预览页开放逐项对比与控件试玩。',
    points: [
      '新旧版逐项对比，可拖动分割线',
      '分段控件、开关、滑块、浮动标签栏都能直接试玩',
      '背景图、配色与贴纸系统全部保留'
    ],
    cta: '查看界面预览',
    imageAlt: 'Liquid Glass 版插件页',
    sub: '为游戏内覆盖层重新打造的一套 Liquid Glass 界面。',
    announce: {
      badge: 'NEW',
      title: 'Anomaly UI · Liquid Glass 全新界面',
      text: '实时折射、流动镜片，新旧版逐项对比',
      cta: '查看界面预览'
    }
  },

  features: {
    title: '核心特性',
    sub: '从安装、游戏内管理到插件框架，全链路打通。',
    items: [
      {
        icon: '🚀',
        title: '安装与更新',
        text: '解压 Runtime，打开启动器选中 HTGame.exe 所在目录即可安装，后续版本也能直接更新，用户配置与自定义插件不会被覆盖。'
      },
      {
        icon: '🪟',
        title: '游戏内管理界面',
        text: '按 Insert 呼出中文或英文界面，统一管理插件的启用、停用、重载和设置，并支持配色与背景布局自定义。'
      },
      {
        icon: '🌐',
        title: '第三方插件下载',
        text: '在 Plugins > 可用 中浏览安装社区插件，在 更新 中升级，也可以自行添加可信插件源。'
      },
      {
        icon: '🔌',
        title: '实用内建插件',
        text: '坐标显示、实体 ESP、相机工具、伤害仪表盘、资源自动拾取等数十个插件随包提供，全部默认关闭，按需启用。'
      },
      {
        icon: '🧩',
        title: '开放插件框架',
        text: '纯 C ABI v1 SDK 与统一 V1 服务，插件工程无需依赖 Runtime 源码或 C++ ABI。'
      },
      {
        icon: '🔄',
        title: '完整插件生命周期',
        text: 'Manifest、SemVer、依赖与 capability 校验、包校验、文件监控热重载和失败回滚。'
      },
      {
        icon: '🧬',
        title: 'UE5 / NTE 适配',
        text: '经过校验的 UE5 符号解析，以及会话、玩家、相机、实体、地图地标、传送和载具等高层服务；条件不满足时按功能降级。'
      },
      {
        icon: '🔍',
        title: '内存分析与开发工具',
        text: '查看进程模块、PE 节区和内存区域，提供字节签名扫描与离线 TestHost 等开发工具。'
      },
      {
        icon: '🛡️',
        title: '故障隔离',
        text: '单个插件异常后会被隔离；新版本加载失败时自动回滚到上一代，主界面的诊断页直接给出原因。'
      }
    ]
  },

  pluginsSection: {
    title: '内建插件',
    sub: '随运行包提供，默认全部关闭。输入关键词可筛选，例如「相机」「自动」「ESP」。',
    placeholder: '搜索内建插件…',
    searchAria: '搜索内建插件',
    empty: '没有匹配的内建插件，换个关键词试试。'
  },

  plugins: [
    { name: 'Coordinate Display', text: '显示玩家坐标、会话状态与采样指标。', tags: '坐标 会话 调试 采样' },
    { name: 'Entity ESP', text: '绘制实体边界框与标签。', tags: 'esp 实体 透视 绘制' },
    { name: 'Deserted', text: '阻止人流和车流生成，不影响站桩 NPC。', tags: '场景 人流 车流 npc' },
    {
      name: 'Pink Paw Heist ESP',
      text: '显示粉爪大劫案的战利品与撤离点，支持价值筛选、银行循环拾取、次数限制及入场动画跳过。',
      tags: 'esp 粉爪 大劫案 撤离点 银行 拾取'
    },
    {
      name: 'NTE Vehicle',
      text: '查看、召唤和调校当前载具，支持载具目录、显示名称、速度、扭矩、车轮摩擦及非玩家载具控制。',
      tags: '载具 车辆 速度 扭矩 开发者'
    },
    {
      name: '999夜脚本',
      text: '在 999 夜赤龙古堡按指定次数循环刷怪：营地刷新、双战斗点自动战斗。',
      tags: '999夜 刷怪 自动 战斗 脚本'
    },
    {
      name: 'NTE Damage Dashboard',
      text: '实时统计玩家角色伤害、命中、暴击、队伍与技能分布及最近命中记录。',
      tags: '伤害 统计 仪表盘 暴击 队伍'
    },
    { name: 'Custom UID', text: '自定义客户端界面上显示的 UID。', tags: 'uid 界面 自定义' },
    {
      name: '换肤器 Lite',
      text: '提供角色配饰、滑翔翼、觉醒外观预览与自定义车牌。',
      tags: '换肤 外观 配饰 滑翔翼 车牌'
    },
    {
      name: 'Camera Tools',
      text: '增加视距、调整视角 FOV 和自由相机视角，并可选按自由相机位置加载场景。',
      tags: '相机 视距 fov 自由相机'
    },
    { name: 'CameraBlurFix', text: '取消抬头时角色身上的虚化效果。', tags: '相机 虚化 画面' },
    {
      name: 'Better Pose',
      text: '调整角色动作速率、暂停与位移缩放，编辑关节姿态，并可导入 MMD 动作与镜头。',
      tags: '动作 姿态 mmd 骨骼 关节'
    },
    {
      name: 'HiFi Vehicle Music',
      text: '使用本地无损曲库替换车载音乐，支持 WASAPI、DirectSound 与 ASIO。',
      tags: '音乐 车载 wasapi asio 音频'
    },
    {
      name: 'Quick Ultimate',
      text: '按住 Alt+1/2/3/4，自动切换角色并持续发送 Q，松开后停止。',
      tags: '连招 终极 快捷键 切换角色'
    },
    {
      name: 'Resource Auto Pickup',
      text: '读取资源点表，按传送或寻路自动拾取角色经验书、家具、食物、钱包等资源点。',
      tags: '资源 自动 拾取 传送 寻路'
    },
    {
      name: 'Combat Resource Points',
      text: '逐个前往打怪宝箱与异像家具材料点自动战斗，完成后标记并本地缓存。',
      tags: '资源 战斗 宝箱 自动'
    },
    {
      name: 'Clone Enter',
      text: '按副本与难度自动进本、战斗、领奖并退出，支持循环执行。',
      tags: '副本 自动 进本 领奖'
    },
    {
      name: 'AutoFish',
      text: '自动抛竿、提竿与遛鱼，支持连续钓鱼、鱼饵补购及按阈值卖鱼。',
      tags: '钓鱼 自动 鱼饵'
    },
    {
      name: 'Free Fly',
      text: '自由飞行与穿墙：WASD 移动、空格上升、Ctrl 下降，方向跟随视角，开关快捷键可自定义。',
      tags: '飞行 穿墙 移动 探索'
    },
    {
      name: 'WalletCollector',
      text: '扫描钱包刷新点，按目标数量规划路线并自动拾取。',
      tags: '钱包 自动 路线 拾取'
    },
    { name: 'Model Scale', text: '缩放本地角色网格，不影响移动或碰撞。', tags: '模型 缩放 网格' },
    {
      name: 'UI Buttons',
      text: '列出可点击的游戏 UI 按钮，并可通过界面服务执行点击。',
      tags: 'ui 按钮 点击 开发'
    },
    {
      name: 'Jelly',
      text: '让镜头内的人物、载具与动态模型持续挤压拉伸，可调强度、频率、停止间隔与自转。',
      tags: '趣味 挤压 拉伸 模型'
    }
  ],

  market: {
    title: '第三方插件',
    sub: '按 <kbd>Insert</kbd> 打开 <b>Plugins</b>，就能完成社区插件的日常管理。',
    colPage: '页面',
    colUse: '用来做什么',
    rows: [
      { page: '可用', desc: '搜索插件并下载安装' },
      { page: '更新', desc: '查看已安装插件的新版本' },
      { page: '已安装', desc: '启用、停用、重载或卸载插件' },
      { page: '第三方插件', desc: '添加、停用或移除插件源' }
    ],
    footnote: `运行包预置了一个已启用的插件源，实际地址以 <code>Anomaly\\plugin-repositories.json</code> 为准。
      也可以在界面中添加自己信任的 HTTPS 插件源。完整步骤见
      <a href="${links.thirdParty}" target="_blank" rel="noreferrer">第三方插件文档</a>。`,
    warningTitle: '⚠️ 第三方插件安全提示',
    warning: `第三方插件是会在游戏进程中运行的原生 DLL，不是受限脚本。插件列表和插件包目前没有发布者签名；
      Anomaly 会检查下载地址、ZIP 路径、Manifest、版本、游戏与 API 是否匹配，但这些检查不能证明插件本身安全。
      <strong>只安装你信任的来源和作者提供的插件。</strong>`
  },

  install: {
    title: '快速上手',
    sub: '普通用户无需构建源码，下载 Runtime 并按下面四步走即可。',
    steps: [
      {
        title: '下载并安装 Runtime',
        html: `从 ${channelLinks} 任选一个渠道下载
          <code>Anomaly-&lt;版本号&gt;-runtime.zip</code>，<strong>完整解压</strong>到一个普通文件夹（不要只拿出启动器），
          运行 <code>AnomalyLauncher.exe</code>，在<b>代理安装</b>页面选择直接包含 <code>HTGame.exe</code> 的文件夹后点击<b>安装</b>。`
      },
      {
        title: '正常启动游戏',
        html: `像平时一样启动游戏，进入后按 <kbd>Insert</kbd> 呼出管理界面。成功启动会生成
          <code>anomaly-runtime.log</code> 与 <code>anomaly-platform.log</code>。`
      },
      {
        title: '启用内建插件',
        html: `打开 <b>Plugins &gt; 已安装</b>，选中插件后启用。内建插件默认全部关闭。`
      },
      {
        title: '安装社区插件',
        html: `打开 <b>Plugins &gt; 可用</b> 点击<b>安装</b>，回到<b>已安装</b>启用；有新版本时在
          <b>Plugins &gt; 更新</b> 中升级。`
      }
    ],
    directoryTitle: '游戏目录',
    layoutTitle: '安装后结构',
    directoryNote: '启动器本体不需要复制进游戏目录；更新时把新版 Runtime 解压到新文件夹再点<b>更新</b>。',
    buildTitle: '从源码构建（开发者）',
    buildNote: `<code>build.cmd</code> 是唯一受支持构建路径（CMake Preset <code>windows-vs2022</code> +
      <code>windows-relwithdebinfo</code>）的薄包装器；开发夹具、诊断探针与 PDB 用
      <code>build.cmd fixtures|probes|symbols</code> 按需开启。`
  },

  faq: {
    title: '常见问题',
    sub: `更多问题见<a href="${links.troubleshooting}" target="_blank" rel="noreferrer">故障排查与 FAQ</a>。`,
    items: [
      {
        q: '按 Insert 没反应？',
        a: `在 <b>Anomaly Launcher &gt; 启动设置</b> 中修改主窗口快捷键；也可编辑 <code>anomaly.ini</code> 的
          <code>[Platform] ToggleKey</code>（Win32 虚拟键码，默认 <code>45</code> = <code>VK_INSERT</code>）。`
      },
      {
        q: '「可用」里没有插件？',
        a: `到 <b>Plugins &gt; 第三方插件</b> 确认总开关和插件源都已启用，再回到<b>可用</b>点击刷新。`
      },
      {
        q: '第三方插件安装失败？',
        a: `常见原因是下载地址不可用、ZIP 结构不对，或插件 ID、版本、游戏和 API 与列表不一致。
          界面会显示失败原因，详细记录在 <code>Anomaly\\anomaly-platform.log</code>。`
      },
      {
        q: '插件加载失败？',
        a: `确认它是含 <code>manifest.json</code> 的目录包；根级 DLL 与无 Manifest 的目录不会被加载。`
      },
      {
        q: '坐标 / 实体等功能显示不可用？',
        a: `通常是活动 Profile 中缺少所需签名，或符号、布局校验未通过。见
          <a href="${links.profiles}" target="_blank" rel="noreferrer">NTE Build Profile</a>。`
      },
      {
        q: '和 RE-UE4SS 冲突吗？',
        a: `代理文件名同为 <code>dwmapi.dll</code>，两者不能共用同一目录；Anomaly 是独立入口，不加载 <code>UE4SS.dll</code>。`
      }
    ]
  },

  docs: {
    title: '文档',
    sub: '全部文档托管在主仓库。',
    cards: [
      {
        icon: '📘',
        title: '用户文档',
        text: '安装、内建与第三方插件、更新、配置和故障排查。',
        url: links.userGuide
      },
      {
        icon: '🛠️',
        title: '开发者文档',
        text: '插件开发与发布、从源码构建、架构和贡献流程。',
        url: links.developerGuide
      },
      {
        icon: '📑',
        title: 'API 参考',
        text: '完整的纯 C ABI v1：生命周期、全部服务表、Manifest 与 capability。',
        url: links.apiReference
      }
    ],
    footnote: `仓库内另有
      <a href="${links.architecture}" target="_blank" rel="noreferrer">架构概览</a>
      与四个独立 SDK 示例，新插件仓库可从
      <a href="${links.template}" target="_blank" rel="noreferrer">Anomaly 插件模板</a> 开始。`
  },

  risk: {
    summary: '⚠️ 免责声明与风险提示',
    p1: `Anomaly 是<strong>面向研究、诊断与插件开发</strong>的工具，不得用于作弊行为。内存读写、hook、patch、
      实体扫描会修改或读取其他进程的运行状态，可能导致游戏崩溃、数据损坏或账号封禁。日志、崩溃转储、
      Profile 数据与诊断包<strong>可能包含敏感信息</strong>，分享前请审查并脱敏。`,
    p2: `根据<a href="${links.fairPlay}" target="_blank" rel="noreferrer">《异环》公平游戏宣言</a>，
      严禁使用任何第三方工具破坏游戏公平性。<strong>您应充分了解并自愿承担使用本工具可能带来的所有风险。</strong>`
  },

  footer: {
    project: '项目',
    docs: '文档',
    community: '社区',
    source: '源码仓库',
    releases: '发布页',
    license: '许可证',
    notice: 'NOTICE',
    userGuide: '用户文档',
    developerGuide: '开发者文档',
    apiReference: 'API 参考',
    qq: 'QQ 群',
    issues: '问题反馈',
    copyright: '© {year} AnomalyNTE · 以 GNU Affero General Public License v3.0（{license}）分发.'
  },

  promo: {
    hero: {
      eyebrow: 'Anomaly UI · 全新设计',
      title: '透过玻璃，<br /><span class="grad">看见你的世界。</span>',
      lede: `实时折射、柔和高光、会流动的选择镜片。<br />一套为游戏内覆盖层重新打造的 Liquid Glass 界面。`,
      shotAlt: 'Liquid Glass 版插件页',
      jumpAria: '页内导航',
      jumps: [
        { href: '#compare', label: '新旧对比' },
        { href: '#glass', label: '液态玻璃' },
        { href: '#details', label: '细节' },
        { href: '#gallery', label: '插件画廊' }
      ],
      scrollHint: '向下滚动',
      meta: `现已在
        <a href="${links.repo}" target="_blank" rel="noreferrer">Anomaly 主仓库</a>
        的 <code>feat/liquid-glass-ui</code> 分支开发。`
    },
    compare: {
      title: '拖动，看看变化有多大。',
      sub: '左边是旧版，右边是全新的 Liquid Glass。',
      tabsAria: '对比项目',
      tabs: [
        { key: 'plugins', label: '插件' },
        { key: 'diagnostics', label: '诊断' },
        { key: 'settings', label: '设置' },
        { key: 'developer', label: '开发者' },
        { key: 'naiwa', label: '奶蛙主题' }
      ],
      newAlt: '新版界面',
      oldAlt: '旧版界面',
      tagOld: '旧版',
      tagNew: '新版'
    },
    glass: {
      title: '每一个控件，都是一块玻璃。',
      sub: '选择镜片会被拉伸、会回弹，背景在它下面折射。动手试试。',
      segAria: '分段控件演示',
      dockAria: '浮动标签栏演示',
      segItems: [
        { key: 'installed', label: '已安装' },
        { key: 'available', label: '可用' },
        { key: 'updates', label: '更新' },
        { key: 'thirdparty', label: '第三方' }
      ],
      dockItems: [
        { key: 'plugins', label: '插件', icon: '▦' },
        { key: 'diagnostics', label: '诊断', icon: '◫' },
        { key: 'settings', label: '设置', icon: '⚙' }
      ],
      seg: { title: '分段控件', text: '镜片在选项之间滑动，移动时会被拉长。' },
      switches: { title: '开关', text: '所有复选框都换成了开关，按下时拇指会变宽。' },
      slider: { title: '滑块', text: '拖动时拇指变成透明镜片，能看到下面的轨道。' },
      dock: { title: '浮动标签栏', text: '导航沉到底部，浮在内容上方。' }
    },
    details: {
      title: '藏在细节里。',
      hint: '把鼠标移到这里',
      videoFallback: '你的浏览器不支持内嵌视频播放。',
      features: [
        {
          title: '搜索，只在需要时出现',
          text: '平时只是一个放大镜。指针靠近，搜索框向左展开。',
          alt: '插件页',
          altAlt: '搜索框展开'
        },
        {
          title: '一行顶栏',
          text: '标签、搜索、筛选、排序收进同一行，内容区更大。',
          alt: '顶栏高亮',
          altAlt: ''
        },
        {
          title: '主题依然由你决定',
          text: '自定义背景、配色和贴纸系统全部保留。奶蛙主题也换上了玻璃。',
          alt: '奶蛙主题',
          altAlt: ''
        }
      ]
    },
    gallery: {
      title: '插件，也是玻璃做的。',
      sub: '插件窗口直接浮在游戏画面上，背景透过来，界面仍然清楚。',
      items: [
        { alt: '旧版插件窗口', caption: '旧版' },
        { alt: '新版插件窗口', caption: '新版' }
      ]
    },
    end: {
      title: '<span class="grad">Anomaly</span> Liquid Glass',
      text: '现已在 <code>feat/liquid-glass-ui</code> 分支。',
      home: '返回官网首页',
      plugins: '内建插件',
      repo: '源码仓库'
    }
  }
}
