# Deployment Guide

This guide explains how to deploy the Grief Support Network application using Next.js integration.

## Quick Deploy with Vercel (Recommended)

Vercel is the recommended deployment platform for Next.js applications, offering seamless integration and zero-configuration deployment.

### Deploy with One Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/awakeninginbelfast-svg/Grief_support_network)

### Manual Deployment Steps

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from Command Line**:
   ```bash
   vercel
   ```

3. **Deploy via GitHub Integration**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Import your repository
   - Vercel will automatically detect Next.js and configure everything
   - Click "Deploy"

### Configuration

The deployment is pre-configured with:
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x or later

### Security Headers

The following security headers are automatically configured:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Alternative Deployment Options

### Netlify

1. Connect your repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Functions directory**: Leave empty (Next.js handles this)

3. Add environment variables if needed
4. Deploy

### Docker

Build and run using Docker:

```bash
# Build the Docker image
docker build -t grief-support-network .

# Run the container
docker run -p 3000:3000 grief-support-network
```

### Self-Hosted

For self-hosted deployment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Use a process manager like PM2:
   ```bash
   pm2 start npm --name "grief-support-network" -- start
   ```

4. Configure a reverse proxy (nginx/Apache) to forward requests

## Environment Variables

If you need to add environment variables:

1. Create a `.env.local` file (for local development)
2. Add variables to your deployment platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables

Example:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Production Checklist

Before deploying to production, ensure:

- [x] All dependencies are up to date
- [x] Application builds successfully (`npm run build`)
- [x] No console errors in production build
- [x] Environment variables are configured
- [x] Security headers are enabled
- [x] Analytics/monitoring is set up (optional)

## Continuous Deployment

### Automatic Deployment

Vercel and Netlify automatically deploy:
- **Production**: When you push to the `main` branch
- **Preview**: When you create a pull request

### GitHub Actions (Optional)

For custom deployment workflows, you can use GitHub Actions. See `.github/workflows/` directory for examples.

## Monitoring and Analytics

Consider adding:
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error tracking and monitoring

## Support

For deployment issues:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Repository Issues**: [GitHub Issues](https://github.com/awakeninginbelfast-svg/Grief_support_network/issues)

---

**Note**: This application uses Next.js 15 with the App Router. Ensure your deployment platform supports this version.
