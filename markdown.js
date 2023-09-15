const MarkdownTransformer = require('markdown-html-transformer')

const fs = require('fs')

const markdownContent = `
# Hello, World!

This is **bold** and *italic* text.

- Item 1
- Item 2
- Item 3
`

const htmlContent = MarkdownTransformer.convertMarkdownToHTML(markdownContent)

console.log(htmlContent)