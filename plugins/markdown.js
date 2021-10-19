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

export default (content) => {
  if (typeof content !== 'string') {
    return ''
  }
  return marked(content)
}
