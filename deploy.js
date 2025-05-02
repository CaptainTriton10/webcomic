process.env.NODE_EXTRA_CA_CERTS = 'C:\\Users\\jamja\\OneDrive - Brighton College\\Desktop\\brighton-college-ca-certificate.crt';

const { execSync } = require('child_process');
try {
    execSync('vercel deploy', { stdio: 'inherit' });
} catch (error) {
    console.error('Error during Vercel deployment:', error);
}