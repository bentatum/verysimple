import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'
// import redent from 'redent'
// import { parse } from 'acorn'

loadLanguages()

// ... other code ...

Prism.hooks.add('after-tokenize', ({ language, tokens }) => {
  if (language === 'css') {
    fixSelectorEscapeTokens(tokens)
  }
})

export function fixSelectorEscapeTokens(tokens) {
  for (let token of tokens) {
    if (typeof token === 'string') continue
    if (token.type !== 'selector') continue
    for (let i = 0; i < token.content.length; i++) {
      if (token.content[i] === '\\' && token.content[i - 1]?.type === 'class') {
        token.content[i] = new Prism.Token('punctuation', token.content[i])
        token.content[i + 1].type = 'class'
      }
    }
  }
}

// ... other code ...

export function highlightCode(code, prismLanguage) {
  const isDiff = prismLanguage.startsWith('diff-')
  const language = isDiff ? prismLanguage.substr(5) : prismLanguage
  const grammar = Prism.languages[language]
  if (!grammar) {
    console.warn(`Unrecognised language: ${prismLanguage}`)
    return Prism.util.encode(code)
  }
  // ... other code ...
}