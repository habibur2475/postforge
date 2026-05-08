# SocialForge System Design Documentation (V1.1)

## 1. Vision
SocialForge is an AI-powered social media content engine for global creators, marketers, and brands. It generates platform-optimized posts, captions, scripts, hashtags, and content strategy for Facebook, YouTube, X, LinkedIn, Instagram, TikTok, Pinterest, Behance, Dribbble, Medium, and more.

## 2. Core Product Goal
Create a scalable SaaS product that helps users build audience growth, brand identity, and high-performing content using AI.

### Goals
- Generate engaging, hook-based posts
- Create platform-specific output
- Support multi-provider AI keys
- Store and protect user API credentials
- Save generated posts and history
- Enforce subscription limits and usage
- Provide a beautiful responsive dashboard

## 3. Technology Stack
- Frontend: Next.js (App Router), Tailwind CSS, TypeScript
- Backend: NestJS, TypeScript, Prisma ORM
- Database: PostgreSQL (Neon)
- Hosting: Vercel (frontend), Render (backend)
- AI Providers: OpenAI, Gemini, Claude, OpenRouter
- Encryption: backend-only API key encryption/decryption

## 4. Architecture
Modular monolith with clean separation:
- `apps/web/` → frontend UI and pages
- `apps/api/` → backend API and business logic
- `apps/api/src/modules/content/` → content intelligence layer
- `apps/api/src/modules/ai/` → AI provider routing
- `apps/api/src/modules/auth/` → user auth and security
- `apps/api/src/modules/post/` → save and retrieve generated posts

## 5. Deployment Flow
1. GitHub stores all source code and folders
2. Vercel connects to `apps/web` and deploys frontend automatically on push
3. Render connects to `apps/api` and redeploys backend automatically on push
4. Neon stores PostgreSQL data with `DATABASE_URL`

## 6. User API Key Security Flow
1. User submits provider + API key in dashboard
2. Backend encrypts key with `ENCRYPTION_KEY`
3. Store encrypted key in PostgreSQL
4. On generation request, backend decrypts in memory only
5. Use provider, then clear decrypted secret from memory

## 7. MVP Scope (Phase 1)
### Frontend
- Landing page
- Auth pages: login, register, forgot password
- Dashboard home
- Generator page
- History page
- Settings page

### Backend
- Auth module with login/register
- User profile and settings
- AI key storage and encryption
- Generate API endpoint
- Post save/history endpoint
- Usage limits / subscription checks
- Basic admin panel structure

### Database
- `users`
- `posts`
- `subscriptions`
- `user_ai_keys`
- `usage_logs`
- `daily_usage`

## 8. Content Intelligence Layer
### Core engines
- Intent engine: parse user topic, platform, audience, goal
- Strategy engine: choose hook, emotion, CTA, story style
- Prompt engine: build structured multi-part prompts
- Audience engine: apply audience profile and behavior
- Sequence engine: keep content journey and funnel stage
- Identity engine: preserve brand tone and style

### Prompt strategy
Use combined prompt blocks:
- System prompt
- Platform rules
- Audience prompt
- Brand identity prompt
- Strategy prompt
- Output format prompt

## 9. Platform Support
Initial platforms for Phase 1:
- Facebook
- Instagram
- TikTok
- YouTube
- LinkedIn
- X (Twitter)
- Pinterest
- Medium
- Behance
- Dribbble

Platform rules should control:
- tone
- hook style
- length
- content focus
- CTA type

## 10. Subscription and Usage Limits
### Free / Pro / Premium
- Free: low daily generation limit
- Pro: medium daily limit
- Premium: high daily limit

### Enforcement flow
- Authenticate user
- Check active plan
- Check today’s usage
- If limit exceeded, return error
- Otherwise allow generation and increment usage

## 11. Deployment & Environment Variables
### Backend (`Render`)
- `DATABASE_URL`
- `JWT_SECRET`
- `ENCRYPTION_KEY`
- `NODE_ENV=production`

### Frontend (`Vercel`)
- `NEXT_PUBLIC_API_URL`
- `NEXTAUTH_URL` or equivalent if auth uses cookies

## 12. Mobile-First Development Workflow
Use GitHub as the dev panel:
- edit files in GitHub web editor
- commit changes
- Vercel and Render auto deploy
- visit website URL to verify

## 13. First Implementation Steps
1. Create GitHub repo named `socialforge`
2. Add the `apps/web` and `apps/api` folders
3. Create `apps/web/package.json`, `apps/api/package.json`, and config files
4. Build frontend pages and UI components
5. Build backend modules and Prisma schema
6. Connect backend to PostgreSQL
7. Add auth, AI key storage, generator endpoint, and post save
8. Deploy frontend and backend to Vercel and Render

## 14. Important Notes
- Never send API keys to frontend
- Always encrypt keys in database
- Keep backend logic clean and modular
- Make UI responsive for mobile screens
- Keep token / cost control small (e.g. `max_tokens=500`)
- Use clear error handling and toasts for users

## 15. Recommended Phase 1 Feature List
- Auth: login/register/forgot password
- Dashboard with generate button
- AI provider selection
- Save generated posts
- View generation history
- Settings with API key management
- Basic admin pages for users/posts
- Usage counter
- Responsive landing page

## 16. What you should do now
1. If you do not yet have a GitHub repo, create one
2. Connect the repo to Vercel and Render
3. Create Neon PostgreSQL database
4. Add required env vars in Render and Vercel
5. Use `scripts/generate-structure.js` to scaffold missing file structure
6. Start building core frontend and backend features in the repo
7. Commit every change so deployment updates automatically

---

*SocialForge is a disciplined SaaS architecture: GitHub for code, Vercel for frontend, Render for backend, Neon for PostgreSQL.*
