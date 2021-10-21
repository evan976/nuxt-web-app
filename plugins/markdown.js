import marked from 'marked'
import hljs from '@/plugins/highlight'

marked.setOptions({

  renderer: new marked.Renderer(),
  highlight (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

const renderer = {
  heading (text, level, raw) {
    const escapedText = raw.toLowerCase().replace(/[^a-zA-Z0-9\u4E00-\u9FA5]+/g, '-')
    return `
      <h${level} id=${escapedText} alt=${escapedText} title=${escapedText}>${text}</h${level}>
    `
  },
  paragrap (text) {
    return `<p>${text}</p>`
  }
}

marked.use({ renderer })

export default (content) => {
  if (typeof content !== 'string') {
    return ''
  }
  return marked(content)
}
