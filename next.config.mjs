/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vercel-storage-optimization-blob.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
    
};

export default nextConfig;
