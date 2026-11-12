/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms-of-service", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/data-safety-declaration", destination: "/data-safety", permanent: true },
      { source: "/account-deletion", destination: "/delete-account", permanent: true },
      { source: "/delete-account-policy", destination: "/delete-account", permanent: true },
    ];
  },
};
export default nextConfig;
