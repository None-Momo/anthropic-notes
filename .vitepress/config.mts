import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/anthropic-notes/', 
  title: "Anthropic Academy Notes",
  description: "My learning notes from Anthropic Academy",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AI Fluency', link: '/ai-fluency/' },
      { text: 'Claude Code', link: '/claude-code/' },
      { text: 'Claude API', link: '/claude-api/' },
    ],

    sidebar: {
      '/ai-fluency/': [
        {
          text: 'AI Fluency: Framework & Foundations',
          items: [
            { text: 'Overview', link: '/ai-fluency/' },
            { text: '01 - AI Fluency Framework', link: '/ai-fluency/01-ai-fluency-framework' },
            { text: '02 - Delegation', link: '/ai-fluency/02-delegation' },
            { text: '03 - Description', link: '/ai-fluency/03-description' },
            { text: '04 - Discernment', link: '/ai-fluency/04-discernment' },
            { text: '05 - Diligence', link: '/ai-fluency/05-diligence' },
          ]
        }
      ],
      '/claude-code/': [
        {
          text: 'Claude Code in Action',
          items: [
            { text: 'Overview', link: '/claude-code/' },
          ]
        }
      ],
    },

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME/anthropic-notes' }
    ]
  }
})