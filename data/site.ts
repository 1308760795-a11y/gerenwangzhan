export const siteContent = {
  brand: {
    name: "lijiacheng",
    chineseName: "李佳成",
    age: "Twenty Six",
    role: "AI 训练师 / 模型评测 / 数据标注",
    edition: "Personal Editions 2026",
    slogan: "聚焦大模型数据，把 AI 训练得更好用。",
    heroTitle: "让模型真正理解人类意图，而不只是生成答案。",
    heroLines: ["让模型真正理解", "人类意图，", "而不只是生成答案。"],
    heroSubtitle:
      "2 年 AI 训练与模型评测经验，专注 Agent 场景优化、Function Calling 数据构建与 Bad Case 驱动的迭代。这里是我的 2026 年度个人发布。",
    ctas: [
      { label: "查看项目", href: "#projects" },
      { label: "联系我", href: "#contact" },
    ],
  },
  about: {
    intro:
      "我在大模型数据与效果评测的交汇点工作。专注于把模糊的模型问题转化为可执行的优化方向——通过系统性的 Bad Case 分析、标注规则对齐和 Prompt 迭代，让 AI 输出更准确、更可靠。",
    principles: [
      "Bad Case 是最真实的改进起点",
      "标注一致性比标注速度更重要",
      "评测闭环驱动真实的模型提升",
    ],
    metrics: [
      { value: "2+", label: "年 AI 训练与模型评测经验" },
      { value: "98%", label: "Agent 项目最终准确率" },
      { value: "5人", label: "带领小组完成标注与评测任务" },
    ],
    highlights: [
      {
        title: "模型评测",
        text: "围绕准确性、完整性、事实性、安全性、一致性等维度评估模型输出，整理评测结论与问题清单。",
      },
      {
        title: "Agent 场景",
        text: "熟悉 Function Calling、多轮对话、工具调用意图设计与异常 Case 排查，能围绕实际回复效果做分析与优化。",
      },
      {
        title: "团队协同",
        text: "有 5 人小组带领经验，负责任务拆分、标准培训、抽检复核与结果反馈，推动标注节奏与质量并行。",
      },
    ],
  },
  projects: [
    {
      title: "Agent 智能问答助手训练与评测",
      category: "Agent · Function Calling",
      description:
        "面向 Agent 项目中的 Function Calling 数据场景，参与训练与评测工作，重点围绕工具调用意图识别、参数提取与调用链路稳定性开展数据构建和效果验证。",
      role: "训练数据构建、效果评测、Bad Case 归类、Prompt 优化迭代、5人小组带领",
      result: "项目正确率达到 98%，持续提升工具调用准确性和多轮交互体验，形成可复用评测标准与问题台账。",
      status: "已交付",
      tech: ["Function Calling", "数据标注", "模型评测", "Bad Case 分析", "Prompt 迭代", "多轮对话"],
    },
    {
      title: "数据质检自动化工具",
      category: "Tooling · Automation",
      description:
        "利用 AI 辅助编写扩展程序，批量校验 JSON 格式与图片素材，将重复性人工排查转化为自动化流程，提升数据清洗效率。",
      role: "需求分析、AI 辅助开发、工具调试、流程集成",
      result: "显著减少人工逐条排查时间，插件已应用于样本收集与素材整理类批量任务。",
      status: "工具落地",
      tech: ["JSON 校验", "自动化脚本", "AI 辅助开发", "批量处理", "效率工具"],
    },
  ],
  experience: {
    timeline: [
      {
        period: "2024.04 — 2026.03",
        title: "AI 训练师 / 模型评测",
        text: "参与 Agent 项目 Function Calling 数据构建、标注、质检和效果评测。负责项目全流程管理，带领 5 人小组完成阶段性标注及评测任务，推动 Prompt 与回复规则持续优化。",
      },
    ],
    services: [
      {
        title: "模型评测",
        text: "围绕准确性、完整性、事实性、安全性等维度评估模型输出，整理评测结论与 Bad Case 清单。",
      },
      {
        title: "数据标注与质检",
        text: "具备问答、分类、偏好排序、对话质检等任务经验，重视规则理解、执行一致性与复核闭环。",
      },
      {
        title: "Agent 场景优化",
        text: "熟悉 Function Calling、多轮对话、Prompt 迭代与工具调用意图设计，能围绕实际效果做分析优化。",
      },
    ],
    skills: [
      "模型评测",
      "数据标注与质检",
      "Agent 场景优化",
      "Prompt 迭代",
      "Bad Case 分析",
      "团队管理与协同",
      "自动化工具开发",
      "JSON / 数据处理",
    ],
  },
  writing: [
    {
      tag: "评测思考",
      title: "为什么 Bad Case 比正确答案更有价值？",
      excerpt:
        "在模型评测中，一条错误输出背后往往藏着系统性的问题。学会读懂失败，才能真正推动迭代。",
    },
    {
      tag: "方法论",
      title: '如何给 LLM 写一个"不累"的 Prompt？',
      excerpt:
        "好的提示词不是写给模型的命令，而是一份边界清晰、意图明确的协作协议。约束越少，越需要精准。",
    },
    {
      tag: "Agent 场景",
      title: "工具调用：意图识别才是核心，参数提取只是表象",
      excerpt:
        "Function Calling 真正难的不是格式对不对，而是模型能否理解用户在这句话背后真正想完成的事。",
    },
  ],
  contact: {
    outro: "如果你在推进 AI 训练、模型评测或 Agent 数据相关的项目，欢迎来聊。",
    email: "1308760795@qq.com",
    socials: [
      { label: "小红书 @2619057995", href: "https://www.xiaohongshu.com/user/profile/2619057995" },
      { label: "微信 a1308760795", href: "#" },
    ],
    signature: "李佳成 · AI 训练师 · 杭州 · 2026",
  },
};

export const sections = [
  { id: "top", label: "首页" },
  { id: "about", label: "关于我" },
  { id: "experience", label: "项目经历" },
  { id: "writing", label: "灵感随笔" },
  { id: "contact", label: "联系方式" },
];
