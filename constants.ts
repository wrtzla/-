import { Github, Youtube, Mail, BookOpen, Monitor, ExternalLink } from 'lucide-react';
import { SocialLink, LinkCategory } from './types';

export const PROFILE_DATA = {
  name: "Christof",
  title: "Full Stack Developer & Creative Coder",
  bio: "热爱技术，探索无限可能。专注于前端工程化、UI/UX 设计以及人工智能应用开发。欢迎来到我的数字花园。",
  avatarUrl: "https://picsum.photos/200/200", // Using placeholder as requested
};

export const LINKS: SocialLink[] = [
  {
    id: 'blog',
    title: '我的博客',
    description: '分享技术心得与生活随笔 (blog.teamkg.club)',
    url: 'https://blog.teamkg.club',
    icon: BookOpen,
    category: LinkCategory.BLOG,
    highlight: true,
  },
  {
    id: 'windows95',
    title: 'Windows 95 复古网页',
    description: '由 Gemini 3 生成的怀旧风格体验 (windows95.teamkg.club)',
    url: 'http://windows95.teamkg.club',
    icon: Monitor,
    category: LinkCategory.PROJECT,
    highlight: true,
  },
  {
    id: 'bilibili',
    title: 'Bilibili',
    description: '观看我的视频教程与生活分享',
    url: 'https://space.bilibili.com/246548743', // User to update specific ID
    icon: Youtube, // Using Youtube icon as generic video platform icon substitute
    category: LinkCategory.SOCIAL,
  },
  {
    id: 'github',
    title: 'GitHub',
    description: '查看我的开源项目与代码贡献',
    url: 'https://github.com/wrtzla?tab=repositories', // User to update specific ID
    icon: Github,
    category: LinkCategory.SOCIAL,
  },
  {
    id: 'email',
    title: 'Email',
    description: '有合作意向？发送邮件联系我',
    url: 'mailto:1664427585@qq.com', // Placeholder email
    icon: Mail,
    category: LinkCategory.CONTACT,
  },
];