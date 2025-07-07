# TinyWags: Your Fur-ever Friend Adoption Platform

TinyWags is a modern, responsive web application that connects loving homes with pets in need of adoption. With detailed pet profiles, intuitive browsing, and a seamless adoption process, TinyWags helps users find their perfect furry (or feathery) friend. The platform is powered by a robust GraphQL API and secure Clerk-based authentication.

---

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Folder Structure](#folder-structure)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running the Development Server](#running-the-development-server)
  * [Building for Production](#building-for-production)
* [GraphQL API](#graphql-api)
* [Authentication](#authentication)
* [Data Management](#data-management)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* **Homepage:** A welcoming landing page highlighting the platform's mission and featured pet categories.
* **Pet Listing:** Browse pets by category (Dogs, Cats, Rabbits, Birds).
* **Pet Detail Pages:** In-depth profiles with breed, age, health status, temperament, location, adoption fees, and fun facts.
* **Agent Information:** Interactive tooltips display adoption agent details on pet profiles.
* **Adoption Process:** Initiate adoption applications via a secure modal form.
* **User Authentication:** Sign-in and session management via Clerk.
* **Responsive Design:** Optimized for all devices—desktop, tablet, and mobile.
* **GraphQL API:** Powerful and flexible backend for fetching pets and agents.
* **How It Works Section:** Step-by-step adoption guidance for users.
* **Testimonials:** Real adoption stories to build credibility and community.
* **"Meet More Pets" Section:** Encourages deeper browsing by showcasing additional pets on detail pages.

---

## Technologies Used

* **Next.js 15.3.4** – Full-stack React framework
* **React 19.0.0** – Component-based UI building
* **TypeScript 5** – Static typing for improved development
* **GraphQL**:

  * **Apollo Server 4.12.2** – GraphQL API backend
  * **@as-integrations/next** – Apollo + Next.js integration
  * **graphql** – Core GraphQL specification
  * **@apollo/client** – Apollo frontend client
* **Clerk/Next.js 6.23.2** – Authentication provider
* **Tailwind CSS 4** – Utility-first styling
* **Lucide React 0.525.0** – Open-source icons
* **React Tooltip 5.29.1** – Tooltip integration
* **Google Fonts: Josefin Sans** – Elegant typography

---

## Folder Structure

```
tinywags/
├── .next/                     # Next.js build output
├── .yarn/                     # Yarn package files
├── app/                       # App Router-based pages
│   ├── (root)/
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Layout wrapper
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico
│   ├── about/
│   │   └── page.tsx           # About Us
│   ├── api/
│   │   └── graph/
│   │       └── route.ts       # GraphQL endpoint
│   ├── donations/
│   │   └── page.tsx           # Donations page
│   └── pet/
│       └── [id]/
│           └── page.tsx       # Dynamic pet detail
├── components/                # UI components
│   ├── AdoptionFormModal.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── PetCard.tsx
├── data/                      # Mock pet/agent data
│   ├── adoptionAgents.ts
│   └── petData.ts
├── graphql/                   # GraphQL schema & logic
│   ├── queries.ts
│   ├── resolvers.ts
│   └── schema.ts
├── public/                    # Static assets
│   ├── icons/
│   │   └── google.png
│   └── images/
│       ├── landing1.png
│       ├── landing2.png
│       ├── landing3.png
│       └── testimonial.jpeg
├── types/                     # TypeScript definitions
│   ├── adoptionAgent.ts
│   └── petData.ts
├── .env.local                 # Environment variables
├── package.json               # Project config
├── tsconfig.json              # TypeScript config
└── yarn.lock                  # Dependency lock file
```

---

## Getting Started

### Prerequisites

* Node.js (v18 or newer)
* Yarn (v1.22.x or Yarn Berry v4.9.2)

### Installation

```bash
git clone https://github.com/your-username/tinywags.git
cd tinywags
yarn install
```

### Set Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=sk_test_YOUR_SECRET_KEY
```

Sign up at [Clerk.dev](https://clerk.dev) to get your keys.

### Running the Development Server

```bash
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)
GraphQL API: [http://localhost:3000/api/graph](http://localhost:3000/api/graph)

### Building for Production

```bash
yarn build
yarn start
```

---

## GraphQL API

* **Endpoint**: `/api/graph`
* **Schema**: Defined in `graphql/schema.ts`
* **Resolvers**: Logic in `graphql/resolvers.ts`
* **Client Queries**: Located in `graphql/queries.ts`

#### Example Query:

```graphql
query GetPetById($id: ID!) {
  pet(id: $id) {
    id
    name
    breed
    age
    description
    location
    temperament
    health
    adoptionFee
    imageUrl
    funFact
    agent {
      id
      name
      phone
      email
      location
      petsResponsibleFor
    }
    randomPets {
      id
      name
      breed
      age
      imageUrl
    }
  }
}
```

---

## Authentication

Authentication is powered by **Clerk**:

* Secure and seamless Sign In/Up flows
* Managed user sessions
* Access to `isSignedIn` and `user` objects in components

Only signed-in users can begin the adoption process.

---

## Data Management

Currently, TinyWags uses **in-memory static TypeScript files**:

* `data/petData.ts`
* `data/adoptionAgents.ts`

For production, replace these with a real database (PostgreSQL, MongoDB, Firestore, etc.) and update the GraphQL resolvers accordingly.

---

## Contributing

We welcome contributions! 🚀

### How to Contribute:

1. Fork the repo
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Commit: `git commit -m 'feat: Add my feature'`
5. Push: `git push origin feature/my-feature`
6. Open a Pull Request

Please follow existing code styles and naming conventions.

---

## License

This project is licensed under the **MIT License**. 