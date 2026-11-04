/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "framer-motion",
    "motion-dom",
    "motion-utils",
    "remark",
    "remark-gfm",
    "remark-html",
    "remark-prism",
    "gray-matter",
  ],
  async headers() {
    return [
      {
        source: "/api/sb-contact",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
