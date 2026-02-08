# Grief Support Network

A compassionate web application that connects people experiencing grief with resources, peer support groups, and community. Built with [Next.js](https://nextjs.org), React, TypeScript, and Tailwind CSS.

## Features

- **Home** – Welcome page with an overview of the network and quick links.
- **Resources** – Crisis hotlines, articles, guides, and recommended reading for grief support.
- **Support Groups** – Directory of free, virtual support groups covering various types of loss.
- **About** – Mission, values, and information on getting involved.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18.18 or later
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/awakeninginbelfast-svg/Grief_support_network.git
cd Grief_support_network

# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist (via `next/font`)

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with navigation and footer
    page.tsx            # Home page
    globals.css         # Global styles
    resources/
      page.tsx          # Resources page
    support-groups/
      page.tsx          # Support Groups page
    about/
      page.tsx          # About page
```

## Crisis Resources

If you or someone you know is in crisis, please reach out:

- **988 Suicide & Crisis Lifeline** – Call or text **988**
- **Crisis Text Line** – Text **HELLO** to **741741**
- **SAMHSA National Helpline** – **1-800-662-4357**

## License

This project is licensed under the Apache 2.0 License. See [LICENSE](LICENSE) for details.
