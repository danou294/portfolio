import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "levy-daniel.fr" }],
        destination: "https://www.levy-daniel.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
