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

const body = document.getElementById("markdown-content")

body.innerHTML = body
