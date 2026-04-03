export const siteContent = {
  brand: {
    name: "LI JIACHENG",
    chineseName: "李佳成",
    age: "26岁",
    role: "AI 训练师 / 模型评测 / 多模态数据构建",
    edition: "AI TRAINER PORTFOLIO 2026",
    slogan: "把数据质量做实，把模型效果做准。",
    heroLines: ["让数据更贴近任务", "让质检形成闭环", "让模型持续变好"],
    heroSubtitle:
      "聚焦 Agent 工具调用、多模态图文对话和数据质量管控。做过数据构建、质检抽检、模型评测与 SOP 制定，也会用 AI 工具把重复流程做成自动化。",
    heroCardKicker: "Candidate Snapshot",
    heroCardTitle: "能做数据构建，也能把质量体系落下来",
    heroCardText:
      "从基础标注员成长为 AI 训练师，覆盖文本与多模态两条线，擅长把规则、数据和效果串成闭环。",
    heroCardTags: ["Agent", "多模态", "质量管控"],
    heroCardNote: "杭州 · 随时到岗",
    ctas: [
      { label: "查看项目", href: "#projects" },
      { label: "下载简历", href: "/li-jiacheng-ai-trainer-resume.docx", download: true },
      { label: "联系我", href: "#contact" },
    ],
  },
  about: {
    intro:
      "拥有 1 年+ AI 数据标注与训练经验，从基础标注员成长为 AI 训练师，覆盖文本与多模态两大方向。熟悉 Agent 工具调用数据构建、模型评测，以及多模态图文对话的数据构建与质检，也做过 SOP 制定和团队质量对齐。",
    principles: [
      "先对齐标准，再追求速度",
      "Bad Case 必须进入可复用规则库",
      "质检结果要反哺数据与模型迭代",
    ],
    metrics: [
      { value: "1年+", label: "AI 训练与标注经验" },
      { value: "97%+", label: "稳定质检通过表现" },
      { value: "双方向", label: "文本 + 多模态经验" },
    ],
    education: {
      school: "浙江广厦建设职业技术大学",
      major: "工程造价（大专）",
      period: "2019.09 - 2023.06",
    },
    tools: ["Claude", "Codex", "ChatGPT", "豆包", "Kimi", "飞书", "自动化脚本", "浏览器插件"],
    highlights: [
      {
        title: "数据构建",
        text: "做过 Agent 工具调用、多轮图文对话等场景的数据设计与样本构建，能快速把任务目标转成可执行的数据方案。",
      },
      {
        title: "模型评测",
        text: "围绕准确性、事实性、安全性和指令遵循做效果判断，也参与偏好排序和评测结论整理。",
      },
      {
        title: "质量管控",
        text: "做过 SOP、抽检和 Bad Case 归类，知道怎么把团队执行质量稳住，并把问题沉淀成可复用规则。",
      },
    ],
  },
  projects: [
    {
      title: "多模态图文对话训练数据构建项目",
      category: "多模态 · 图文对话",
      description:
        "围绕看图问答、图片描述和图片指令执行等核心场景开展数据构建，并负责抽检与质量反馈。",
      role: "任务设计、样本构建、抽检、安全审核、质量复盘",
      result:
        "对应了我在简历里的多模态训练、质检和安全审核经历。",
      status: "持续迭代",
      tech: ["图文问答", "图片描述", "图片指令执行", "多轮对话", "安全审核", "质量分析"],
    },
    {
      title: "Agent 智能问答助手训练与评测项目",
      category: "Agent · Function Calling",
      description:
        "围绕 Function Calling 场景参与数据构建、评测与规则优化，覆盖工具调用、条件分支和错误恢复等复杂任务。",
      role: "数据构建、规则对齐、抽检复核、Bad Case 归类、Prompt 迭代",
      result:
        "对应了我在简历里的 Agent 项目训练、评测支持和团队质量提升经历。",
      status: "已交付",
      tech: ["Function Calling", "多步骤工具链", "条件分支", "错误恢复", "Prompt 优化", "Bad Case 库"],
    },
    {
      title: "工具与自动化提效",
      category: "Tooling · Automation",
      description:
        "借助 Claude、Codex、ChatGPT 等工具开发脚本与插件，把 JSON 校验、图片抓取和批量清洗做成流程化工具。",
      role: "问题定位、AI 辅助开发、工具调试、团队落地",
      result:
        "对应了我在简历里的自动化提效能力，也说明我不只会做标注，还会主动优化流程。",
      status: "内部使用中",
      tech: ["JSON 校验", "浏览器插件", "批量抓取", "自动化脚本", "AI 辅助开发", "数据清洗"],
    },
  ],
  experience: {
    timeline: [
      {
        period: "2025.10 - 至今",
        title: "多模态 AI 训练师",
        text: "负责图文问答、图片描述、图片指令执行等任务的数据构建与质检，也参与安全审核和质量分析。",
      },
      {
        period: "2025.04 - 2025.09",
        title: "Agent AI 训练师",
        text: "参与 Agent 标注规范、工具调用数据构建和效果评测，做过 SOP、抽检、Bad Case 归类和 Prompt 优化支持。",
      },
      {
        period: "2024.11 - 2025.03",
        title: "数据标注员",
        text: "执行文本和图像类数据标注任务，熟悉平台操作和质检流程，为后续转向训练师角色打下基础。",
      },
    ],
    services: [
      {
        title: "Agent 数据构建",
        text: "熟悉 Function Calling、条件分支、多步骤工具链和错误恢复场景的数据设计、标注与评测闭环。",
      },
      {
        title: "多模态训练数据",
        text: "能围绕图文问答、图片描述、图片指令执行与多轮图文交织对话设计任务、构建样本并做质量把控。",
      },
      {
        title: "质量体系搭建",
        text: "会用 SOP、抽检规则、Bad Case 库和一致性校验把团队交付质量拉稳，并把结论反哺模型优化。",
      },
    ],
    skills: [
      "Function Calling",
      "多轮对话",
      "图文问答",
      "偏好排序",
      "GSB 对比法",
      "1-5 分制评分",
      "安全审核",
      "SOP 制定",
      "抽检复核",
      "JSON / 数据处理",
    ],
  },
  strengths: [
    {
      tag: "成长路径",
      title: "从基础标注员走到 AI 训练师",
      excerpt:
        "1 年内完成从任务执行到数据构建、质检管控、规范制定的跨越，覆盖文本和多模态双方向，成长路径清晰，也更容易快速接手新项目。",
    },
    {
      tag: "质量意识",
      title: "能把抽象问题沉淀成可执行规则",
      excerpt:
        "擅长定位意图偏差、描述缺失、格式错误等高频问题，持续沉淀 Bad Case 库、Skip 规则和复核标准，推动质量体系真正落地。",
    },
    {
      tag: "工具能力",
      title: "会用 AI 工具把重复劳动自动化",
      excerpt:
        "熟练使用 Claude、Codex、ChatGPT、豆包、Kimi 等主流模型，能借助脚本和插件解决数据清洗、字段校验、素材整理等重复性任务。",
    },
  ],
  contact: {
    outro: "如果你在招聘 AI 训练师，或正在推进 Agent / 多模态数据项目，我们可以直接聊任务设计、质量标准和结果提升。",
    email: "1308760795@qq.com",
    phone: "18367502826",
    wechat: "a1308760795",
    city: "杭州",
    availability: "随时到岗",
    models: "Claude / Codex / ChatGPT / 豆包 / Kimi",
    links: [
      { label: "小红书", href: "https://www.xiaohongshu.com/user/profile/2619057995" },
      { label: "下载简历", href: "/li-jiacheng-ai-trainer-resume.docx", download: true },
    ],
    signature: "李佳成 · AI 训练师 / 模型评测 / 多模态数据构建 · 杭州",
  },
};

export const sections = [
  { id: "top", label: "首页" },
  { id: "about", label: "概况" },
  { id: "projects", label: "项目" },
  { id: "experience", label: "经历" },
  { id: "strengths", label: "优势" },
  { id: "contact", label: "联系" },
];
