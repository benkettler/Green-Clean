/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === 'true'

const nextConfig = {
  ...(isStatic && { output: 'export', trailingSlash: true }),
  images: { unoptimized: isStatic },
}

export default nextConfig
