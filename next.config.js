const withMDX = require('@next/mdx')({
  extension : /\.mdx?$/,
  options: {
    rehypePlugins : [require('@mapbox/rehype-prism')],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withMDX({
  pageExtensions : ['ts','tsx','mdx'],
})
