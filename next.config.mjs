/** @type {import('next').NextConfig} */

export const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors youtube.com https://www.youtube.com;
    block-all-mixed-content;
    upgrade-insecure-requests;
    frame-src youtube.com https://www.youtube.com;
`;

export const exports = {
  // images: {
  //   deviceSizes: [600, 900, 1200, 1536],
  // },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // {key:
          // value:},
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};
