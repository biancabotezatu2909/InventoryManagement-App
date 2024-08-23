/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3-inventory-management-b.s3.eu-north-1.amazonaws.com",
                port: "",
                pathname: "/**",
            }
        ]
    }

};

export default nextConfig;
