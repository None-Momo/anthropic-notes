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
            { text: '01 - 4D Framework', link: '/ai-fluency/01-4d-framework' },
            { text: '02 - Delegation', link: '/ai-fluency/02-delegation' },
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