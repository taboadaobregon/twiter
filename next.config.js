/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    /* aca configuramos para poder utilizar el logo */
    domains:["help.twitter.com"]
  },
  swcMinify: true,
}

module.exports = nextConfig
