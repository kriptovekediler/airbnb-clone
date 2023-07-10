/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },

  loaders: {[
    {
      test: /\.css$/,
      include: [path.resolve(__dirname, "not_exist_path")],
      loader: "style!.css",
    },
  ]}
};

module.exports = nextConfig;
