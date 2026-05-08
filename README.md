# postforge
Social content generator
🚀 SocialForge — Final System Design Documentation (V1.1)

আমি একটা SocialForge নামে সোস্যাল মিডিয়া পোস্ট ম্যানেজমেন্ট/জেনারেটর টুল তৈরি করতে চাই যেটা দিয়ে ফেসবুক, ইউটিউব, টুইটার, লিংকড-ইন, ইন্সটাগ্রাম, টিকটক, পিন্টারেস্ট, behance, Dribbble, মিডিয়াম, ইত্যাদি সোস্যাল মিডিয়া গুলোতে যেভাবে পোস্ট করলে এবং প্রত্যেক টা প্লার্টফর্মের ধরণ অনুযায়ী বা অডিয়েন্স অনুযায়ী সেই সেই সোস্যাল মিডিয়ার জন্য টেক্সট অথবা ইমেজ অথবা দুটোই জেনারেট করবে, বা কি ধরনের ভিডিও দিতে হবে তার স্ক্রিপ্ট লিখে দিবে সে অনুযায়ী ভিডিও তৈরি করে পোস্ট করা যাবে সেভাবে তৈরি করতে চাই। পেজ তৈরির প্রথম থেকে বা যেকোনো সময় থেকে জেনারেট করা আগের পোস্ট অনুযায়ী সিকোয়েন্স অনুযায়ী অডিয়েন্সকে টার্গেটিং করে তাদের চাহিদা বুঝে ভালো লাগা বুঝে ইনফ্লেশনারী ভাবে একটা পেইজ বা সোস্যাল নেটওয়ার্ক বা নিজস্ব  আইডেন্টিটি তৈরি করা যায় এবং হাজার হাজার ইউজার ভালো লাগা থেকে বা তাদের প্রয়োজনে সেই সোস্যাল পেইজ বা একাউন্টকে ফলো করে সেরকম কিছু তৈরি করতে চাই। এবং এটা আনুমানিক ১০/১৫ দিনেই পেইজের বা একাউন্টে ভালো রেজাল্ট আসে সেরকম কন্টেন্ট তৈরি করার টুল তৈরি করতে চাই। 

ফ্রন্টএন্ড (UI/UX):
Framework: next js, Tailwind CSS ব্যবহার করে তৈরি করতে হবে।
ব্যাকএন্ড:
ব্যাকএন্ড হিসাবে Nestjs ব্যবহার করতে হবে। 
ডাটাবেইজ:
ডাটাবেইজ হিসাবে PostgreSQL ব্যবহার করতে হবে। এবং ইউজার এখানে একাউন্ট খুলে তার একাউন্টে (ড্যাশবোর্ডে গিয়ে সেখানে সেটিং থেকে) নিজের Gemini বা Claude বা OpenAI বা open router এর এপিআই কী সেট করে নিবে পোস্ট জেনারেটের জন্য। এবং এডমিন প্যানেল থেকে এডমিনের ডায়নামিক ভাবে তৈরি করা কোনো একটা প্যাকেজ কিনে সেই প্যাকেজ অনুযায়ী পোস্ট জেনারেট করতে পারবে। 

এই টুলটা হবে আন্তর্জাতিক/প্রোফেশনাল মানের SaaS এজন্য আর্কিটেকচারটা খুব ডিসিপ্লিনড হতে হবে এবং স্কেলেবল ভাবে আর্কিটেকচার এবং স্টাকচার ডিজাইন করতে হবে। এবং অবশ্যই অবশ্যই কোড গুলো সহজ, সুন্দর, গোছানো, বেস্ট প্রাকটিস অনুযায়ী প্রোফেশনালরা যেভাবে লেখে সেভাবে লিখতে হবে। এবং ইউ আই এবং ইউ এক্স দারুণ ও আকর্ষণীয় ভাবে তৈরি করতে হবে এবং সকল ডিভাইসে/স্কিনে রেসপন্সিভ ভাবে শো করতে হবে। এখানে ৩০+ গুরুত্বপূর্ণ ফিচার নিয়ে তৈরি করতে চাই প্রথম ভার্সন। এবং এখান থেকে ইউজার যেন পৃথিবীর যেকোনো জায়গা থেকে বেটার রেজাল্ট বা আউটপুট পায় সেদিকে খেয়াল করে সেভাবে তৈরি করতে হবে যেন পোস্ট গুলো অডিয়েন্স এর মনের মতো হয় তাদের উপকারে আসে তাদের চাওয়া অনুযায়ী ভালো লাগা অনুযায়ী পোস্ট তৈরি জেনারেট করা যায়। এককথায় এটা যেন সোস্যাল মিডিয়া পোস্ট তৈরির বা যেকোনো বিষয়ে টেক্সট বা ছবি জেনারেট করার সবচেয়ে পাওয়ারফুল টুল হয়। Prompt Engineering জিনিসটাই খুব powerful ভাবে তৈরি করতে হবে যেন ইউজার কাস্টমাইজ ভাবে মনের মতো করে টার্গেটেড অডিয়েন্সের জন্য রেজাল্ট বের করে আনতে পারে সেদিকে খেয়াল করতে হবে। সেজন্য প্রত্যেক টা পোষ্ট engaging, hook-based, informative, scroll stopping, Human writing, Senior writer আরও অনেক কিছু অনেক ফিলোসোফি, সাইকোলজি, ইমোশন মাথায় রেখে সঠিকভাবে তৈরি করতে হবে।

ইউজারের নিজের যে API key দেবে সেই API key কখনো ফন্টএন্ডে আনা যাবে না বা থাকবে না এটা database এ store থাকবে এবং সেটা শুধুমাত্র ব্যাকএন্ড ব্যবহার করে রেজাল্ট জেনারেট করে ডাটাবেইজে সেভ করবে এবং ফন্টএন্ডে রেজাল্ট শো করাবে। 
User submits API key
→ Encrypt 
→ Store in postgresql

On request:
→ Decrypt in backend memory
→ Use
→ Destroy

এবং আমার কম্পিউটার নেই আমি মোবাইলের ব্রাউজার দিয়ে chatgpt এআই ব্যবহার করে কোড লিখে সেটা কপি করে গিটহাবে আমার ফোল্ডার ও ফাইল স্টাকচার অনুযায়ী সাজিয়ে রাখবো এবং এখানে কোনো ফাইলের কোড এডিট করলে বা কোনো পরিবর্তন করলে বা নতুন কোনো ফোল্ডার বা ফাইল তৈরি করে সেখানে কোড লিখলে সেটা সার্ভার অটোমেটিক আপডেট করে নেবে বা ওয়েবসাইটে ভিজিট করলে দেখা যাবে এরকম চাই অর্থাৎ আমি ফাইল ফোল্ডার বা কোড সবকিছু গিটহাবে করবো এবং সেটা অটোমেটিক সার্ভারে রান হবে আমি ওয়েবসাইট ভিজিট করলে সব দেখতে পারবো কাজ করছে কিনা ব্যাস এতটুকুই। তাহলে সবকিছু কিভাবে তৈরি করলে ভালো হবে বলো। 
তাহলে বলো আমি এখন কি করবো?? কোথায় কিভাবে কি করবো??

অর্থাৎ GitHub = আমার পুরো development panel”
আমি শুধু GitHub এ file/folder manage করবো
ChatGPT/AI দিয়ে code generate করবো
GitHub এ paste করবো
Save/commit করবো
Server auto deploy হবে
Website visit করে result দেখবো

✅ আমার জন্য FINAL SYSTEM SETUP
1. GitHub → Code Storage
এখানে থাকবে:
সব file/folder
Repo structure
socialforge/
├── apps/
│   ├── web/   → Next.js
│   └── api/   → NestJS
├── README.md
👉 শুরুতে এটুকুই যথেষ্ট
frontend code
backend code
configs
মোবাইল থেকেই edit করবো।

✅ 2. Vercel → Frontend Hosting
এখানে থাকবে:
Next.js frontend
যখন GitHub এ code push করবেন:→ Vercel auto build করবে→ auto deploy করবে→ website update হবে

✅ 3. Render → Backend Hosting
এখানে থাকবে:
NestJS API
GitHub এ backend repo update হলেই:→ Render auto deploy করবে

✅ 4. Neon → PostgreSQL Database
এখানে থাকবে:
users
posts
subscriptions
analytics
api keys
এটা auto online থাকবে।

✅ FINAL FLOW
Mobile Browser
   ↓
ChatGPT generates code
   ↓
You copy code
   ↓
Paste into GitHub files
   ↓
Commit changes
   ↓
Vercel/Render auto deploy
   ↓
Visit website URL
   ↓
See live result

এটাই আমার full development system।

✅ এখন EXACTLY কী করতে হবে (Step-by-Step)
🔥 STEP 1 — GitHub Account
Create:
GitHub account
তারপর:Create socialforge repositories:

🔥 STEP 2 — Frontend Deploy
Go to:
Vercel
তারপর:
GitHub login
Import repository
select:socialforge/apps/web
Framework:
Next.js
Deploy.

🔥 STEP 3 — Backend Deploy
Go to:
Render
তারপর:
GitHub connect
New Web Service
select:socialforge/apps/api
Runtime:
Node.js
Build command:
npm install && npm run build

Start command:
npm run start:prod


🔥 STEP 4 — Database Create
Go to:
Neon
Create:
PostgreSQL database
Copy:
DATABASE_URL

🔥 STEP 5 — Environment Variables
Render এ add করবো:
DATABASE_URL=
JWT_SECRET=
ENCRYPTION_KEY=

Vercel এ add করবো:
NEXT_PUBLIC_API_URL=


✅ সবচেয়ে গুরুত্বপূর্ণ বিষয়
আমি GitHub এ file edit করলেই:
FRONTEND:
Vercel automatically rebuild করবে।
BACKEND:
Render automatically redeploy করবে।
আমার manually server touch করতে হবে না।

✅ মোবাইল দিয়ে GitHub কিভাবে manage করবো
সবচেয়ে ভালো:
Option 1 (BEST)
Chrome browser → Desktop mode
কারণ:GitHub web editor full access পাবো।

✅ আমি AI দিয়ে কোড লিখে কিভাবে build করবে?
আমার workflow হবে:
Step A
ChatGPT কে বলবো:
আমার ফাইল স্টাকচার দিয়ে Create Next.js login page component
using Tailwind CSS

Step B
Generated code copy করবো

Step C
GitHub file এ paste করবো

Step D
Commit changes

Step E
৩০-৬০ সেকেন্ড wait

Step F
Website visit
দেখবো live update হয়ে গেছে।

✅ আমার MVP এর জন্য এখন কী build করবো
FIRST TARGET:
FRONTEND
Landing page
Login/Register
Dashboard
Generator page

BACKEND
Auth
Generate API
Save posts
API key system
Usage limit

DATABASE
users
posts
subscriptions
user_ai_keys

✅ একটা খুব গুরুত্বপূর্ণ reality
আপনি mobile-only workflow করছেন।
তাই:

✅ আপনি যেটা avoid করবেন
❌ Kubernetes❌ Microservices❌ Complex DevOps❌ Self-hosted PostgreSQL❌ VPS management❌ Docker swarm❌ Redis cluster initially

✅ আপনি যেটা use করবেন
✅ GitHub✅ Vercel✅ Render✅ Neon✅ Next.js✅ NestJS✅ PostgreSQL

1. Vision
SocialForge হলো AI-powered multi-platform content intelligence SaaS platform যেটা:
audience-aware
psychology-driven
platform-optimized
identity-consistent
sequence-based
analytics-enhanced content generate করবে।
এটা শুধুমাত্র “AI post generator” না।
এটা:
content operating system
audience growth engine
brand identity engine
AI content strategist হিসেবে কাজ করবে।

Core Capabilities:
Multi-provider AI (OpenAI / Gemini / Claude)
high engaging most powerful post generation
Prompt customization system
Subscription-based usage
high-quality, structured, conversion-optimized content
Platform-specific content generation
Audience-personalized output
Template-driven writing system
Multi-AI provider support
SaaS subscription + usage control

2. Core Product Goal
System-এর উদ্দেশ্য:
✔ High-performing content generate করা ✔ Audience growth accelerate করা ✔ Consistent brand identity build করা ✔ Multi-platform optimization করা ✔ AI-assisted content strategy automate করা ✔ Engagement-driven content intelligence তৈরি করা

2. Technology Stack (Final)
System হবে modular monolith architecture.
Backend:
NestJS
TypeScript
Prisma ORM
Redis (later)

Frontend:
Next.js (App Router)
TypeScript
Tailwind CSS

Database
PostgreSQL
Cache / Queue
Redis
BullMQ

AI Layer
OpenAI
Gemini
Claude
OpenRouter
Infrastructure
Docker
Nginx

3. High-Level System Flow:
User Request
    ↓
Authentication
    ↓
Subscription Validation
    ↓
Usage Validation
    ↓
Input Sanitization
    ↓
Audience Intelligence
    ↓
Strategy Generation
    ↓
Prompt Orchestration
    ↓
AI Provider Routing
    ↓
Generation Pipeline
    ↓
Validation Layer
    ↓
Post Processing
    ↓
Analytics Save
    ↓
Database Save
    ↓
Response Return

4. Subscription Engine (Final)
PLAN LIMITS:
FREE → 10 posts/day
PRO → 500 posts/day
PREMIUM → 10000/day

Flow:
User → request generate
        ↓
  - verify auth
  - check plan
  - check usage আজকের
  - limit exceed? → reject
  - না হলে → AI API call
  - usage increment
  - response return

5. Payment System Design (Manual Approval + SSLCommerz)

Overall Flow (Simple + Safe)
User → Click Upgrade
    ↓
Create Payment Request
    ↓
User pays via SSLCommerz
    ↓
User clicks "I Paid" (submit trx info)
    ↓
Admin reviews request
    ↓
Approve → Plan সক্রিয়
Reject → Reason show

6. Database Design
paymentRequests:
uid,
  plan: "free | pro | premium",
  amount,
  currency: 
  status: 
  paymentMethod: "sslcommerz",
  trxId,
  senderNumber,   
  proofImage, 
  createdAt,
  updatedAt,
  reviewedBy, 
  reviewNote

subscriptions (update হবে approve হলে)
subscriptions:
uid
 plan,
 status: "active",
 startDate,
 endDate

user_ai_keys:
id
user_id
provider
encrypted_key
iv
auth_tag
is_active
created_at
updated_at

posts:
id
uid
platform
template
input
output
createdAt

usage_logs:
id
user_id
provider
model
tokens_input
tokens_output
estimated_cost
request_type
status
created_at

daily_usage:
user_id
date
posts_generated
tokens_used
cost

templates:
id
name
version
platform
content
status

post_analytics:
post_id
platform
likes
comments
shares
reach
engagement_rate
audience_country
audience_age

users
uid
email
createdAt
plan

7. 🔥 Prompt Engineering & Content Intelligence Layer (CORE SYSTEM)
Overview
AI-কে শুধু user input দিলে powerful output আসবে না। AI-কে full context দিতে হবে।
এই Layer এর কাজ শুধুমাত্র prompt তৈরি করা নয়। 
বরং:
ইউজারের intent বুঝা
audience analyze করা
platform behavior detect করা
content strategy তৈরি করা
psychology apply করা
brand identity maintain করা
content sequence manage করা
optimized prompt build করা
AI output structure ও validate করা

7.1 Final Context Object-
context Sources 
System combine করবে
User Input (niche, Topic/subject, Audience type, Goal, Platform, Content type)
+
Platform Rules
+
Audience Psychology
+
Brand Identity
+
Previous Posts
+
Performance Analytics
+
Content Funnel Stage
+
Goal
+
Tone
+
Winning Templates
+
Engagement Patterns
{
 "platform": {},
 "audience": {},
 "identity": {},
 "psychology": {},
 "analytics": {},
 "sequence": {},
 "strategy": {}
}

7.2 Content Strategy Intelligence Layer
এখানেই actual intelligence তৈরি হবে।
AI-কে “write post” বললে হবে না।
আগে strategy তৈরি করতে হবে।
System Decide করবে
educational হবে?
controversy ব্যবহার করবে?
emotional angle নেবে?
authority tone হবে?
storytelling হবে?
curiosity gap হবে?
retention style হবে?
CTA aggressive না soft হবে?

Strategy Output
{
 "primary_emotion": "curiosity",
 "secondary_emotion": "urgency",
 "hook_pattern": "problem-first",
 "content_style": "storytelling",
 "retention_pattern": "open loop",
 "cta_style": "comment trigger"
}

7.3. Prompt Orchestration Engine (ULTRA IMPORTANT)
এটাই actual “AI quality engine”।
একটা single prompt যথেষ্ট না।

Better Architecture
System Prompt
+
Platform Prompt
+
Audience Prompt
+
Psychology Prompt
+
Brand/Identity Prompt
+
Sequence Prompt
+
Task Prompt
+
Output Format Prompt

7.4. Prompt Compression + Optimization Engine
Large prompt = expensive + slower।
তাই intelligent prompt optimization দরকার।
কাজ
duplicate context remove
token optimization
reusable blocks
prompt caching
dynamic truncation

7.5. Memory Engine (GAME CHANGER)
এটা ছাড়া intelligent SaaS incomplete।
Store করবে
previous posts
successful hooks
failed topics
user preferences
audience reactions
best-performing tones

7.6. Adaptive Learning Engine
System নিজে নিজে learn করবে।
Example
যদি:
emotional posts বেশি engagement পায়
short captions বেশি save পায়
curiosity hooks বেশি perform করে
তাহলে system future এ automatically strategy adjust করবে।

7.7. Viral Pattern Intelligence
System viral patterns detect করবে।
Detect করবে
curiosity gaps
controversial hooks
emotional pacing
retention triggers
pattern interrupts
engagement bait styles

7.8 Humanization Engine
AI লেখা robotic feel দিলে মানুষ ignore করে।
তাই Inject করবে:
conversational imperfections
natural rhythm
emotional phrasing
human pauses
sentence variation
casual language variation

7.9 Multi-Stage Generation Pipeline
একবারে full content generate না করে staged generation better।

Better Pipeline
Generate Hook
  ↓
Generate Structure
  ↓
Generate Main Body
  ↓
Generate CTA
  ↓
Generate Hashtags
  ↓
Optimize Tone
  ↓
Validate
এতে quality dramatically improve হয়।

12. Content DNA System
প্রতিটি brand/page-এর unique identity থাকবে।
DNA Example
{
 "tone": "bold",
 "sentence_style": "short punchy",
 "emoji_usage": "medium",
 "cta_behavior": "community-first",
 "storytelling_depth": "high"
}

8.10 Audience State Engine
সব audience একই stage-এ না।
System detect করবে:
State
Strategy
Cold
awareness
Warm
trust
Hot
conversion
Loyal
community

7.11 Viral/Trend Intelligence Engine
High-performing pattern detect করবে।
Analyze করবে:
hook performance
retention triggers
viral formatting
engagement spikes
scroll-stopping structures
trending topics
trending hooks
trending keywords
viral structures
detect করা যাবে।

Platform Adaptation Layer
Supported Platforms
Supported Platforms:
Facebook
Instagram
TikTok
YouTube
LinkedIn
X (Twitter)
Pinterest
Medium
Threads
Behance
Dribbble
Future:
Reddit
Telegram
Discord
Quora
একই content সব জায়গায় কাজ করে না এজন্য
Platform Rule সেট করতে হবে
TikTok
Hook: curiosity / shock
Tone: casual
Length: very short
Facebook
Hook: emotional / relatable
Tone: storytelling
Length: medium-long
LinkedIn
Hook: insight
Tone: professional
Length: medium
Instagram
Hook: visual-first
Tone: trendy
Length: short
YouTube
Hook: retention-focused
Tone: value-driven
Length: structured
Behance / Dribbble
Focus: design showcase
Caption: minimal, aesthetic
Visual: primary
Pinterest:
Medium:
 
System কী করবে:
previous posts analyze করবে
next best content suggest করবে
sequence maintain করবে
identity maintain করবে
Memory + Analytics Engine
Store করবে:
user posts
engagement data
audience behavior
Use করবে:
“এই ধরনের পোস্টে বেশি engagement”
“এই topic কাজ করছে না”
👉 এখান থেকেই smart recommendation আসবে এবং এটা আগের জেনারেট করা কন্টেন্টে ইউজার দিতে পারবে এঙ্গেজমেন্ট কত, লাইক/কমেন্ট/শেয়ার কত, কোন দেশের, বয়সের, ক্যাট্যাগরির, টপিকের, প্লার্টফর্মের কত সেটা বুঝে তৈরি তৈরি করবে।

AI Logic (এখানেই game win/lose হবে)
simple prompt দিলে হবে না।
system এ থাকতে হবে:
Step 1: Intent Extraction
User input → structured data
niche: 
audience: 
goal: 
platform: 

Step 2: Strategy Intelligence Engine
AI-কে raw prompt দেওয়া হবে না।
আগে strategy generate হবে।
System decide করবে:
hook type
emotional angle
CTA style
pacing
storytelling depth
controversy level
retention structure
authority level

Step 3: Prompt Builder (dynamic)
Generate TikTok script:
- 5 sec hook
- problem-solution
- high retention
Step 4: Output Structuring
Return:
Caption
Script
Hashtags
Visual idea
Audience Control System (Reality Check)
System নিজে বুঝবে:
ইউজারের audience কারা,তাদের pain কী, কী type content তারা consume করবে সে অনুযায়ী কন্টেন্ট তৈরি করবে।
✔️ Possible:
influence behavior
guide journey
build perception
🔁 Content Sequencing Engine (ADVANCED)
👉 এটা ছাড়া growth system incomplete
Psychology Engine Layer Funnel:
Human behavioral psychology apply করবে।
Analyze করবে:
curiosity gaps
emotional triggers
dopamine loops
authority framing
storytelling tension
scarcity
urgency
community belonging
social proof
identity reinforcement
demographics
psychographics
pain points
desires
behavior patterns
attention span
content preferences
engagement timing
audience maturity
emOffer
Story
Motivational 
Proper guideline
Problem awareness
Solution
Proof
Soft CTA
Strong CTA

Brand Identity Building Engine
👉 “নিজস্ব ব্র্যান্ড তৈরি” করার জন্য একই ধরনের পেইজে একই টোনে বা একই ধাঁচের কন্টেন্ট তৈরি করতে পারে সেভাবে সিস্টেম তৈরি করতে হবে। প্রয়োজনে ইউজার তার পেইজের নাম ইনপুট দিলে সেটা ডাটাবেইজে সেভ রাখে এবং পরে সেই পেইজের ধাঁচে, টোনে, স্টাইলে কন্টেন্ট তৈরি করবে। 

সব content একই personality maintain করবে।
Store করবে:
tone
vocabulary
sentence rhythm
emoji style
CTA behavior
storytelling depth
formatting style
emotional energy

Advanced Audience:
Age
Country
Language
Interests
Pain points
Goals/desires
Behavior:
Attention span (low/medium/high)
Content preference (video/text)
Strategy:
Awareness level (cold/warm/hot)
Tone (optional override)
Tone injection
“casual Bangla”, “Gen-Z style”
Strategy বের করা
{
 "hook_type": "pain-based",
 "emotion": "urgency",
 "angle": "you are missing out",
 "content_goal": "stop scrolling",
 "cta_type": "comment"
}

Content Sequencing Engine
এটাই growth system।
Single viral post দিয়ে brand grow হয় না।
তাই system content journey maintain করবে।
Funnel Stages:
Awareness
Interest
Trust
Consideration
Conversion
Retention
Community

Content Generation Engine:
Prompt Structure:
You are a senior high-level social media strategist content writer.

Now Write a high-value high-quality {educational} content for {Facebook} post in {Bangla}.

Template:
{template_structure}

Audience:
{audience json}

Strategy:
{strategy json}

Platform Rules:
{platform rules}

Goal:
{goal json}

Topic:
{topic}

Tone:
{tone}

Generate:
- Hook
- Main Content / Script
- Caption
- 15 hashtags
- CTA
- Visual idea

Return in JSON.

Follow this structure strictly:
1. Relatable opening (problem or feeling)
2. Explain past difficulty
3. Introduce new solution/tool
4. Build curiosity
5. Explain how it works (step-by-step logic)
6. Provide practical tutorial steps
7. Include commands/examples if relevant
8. Add important note or requirement
9. Add ethical disclaimer or best practice
10. End with soft CTA (Save/Share/Comment)

Style rules:
- Short readable paragraphs
- Mix conversational + informative tone
- Clear structure
- Human-like writing

9. Performance optimization Strategy (important)
Add:
region: asia-south1
lazy loading JS
minimal bundle size 

🔷 10. Cost Control (CRITICAL)
👉 এটা ignore করলে SaaS মারা যাবে
Add:
max_tokens: 500
temperature: 0.7
timeout: 10s

11. UI/UX (Final Structure)
Pages:
Landing/home
Auth (Login/Register)
User-Dashboard
Admin-Dashboard
Generator UI
History
Pricing
Settings

UX Focus:
1-click generate
Topic-Based
Title-Based
Custom Prompt
template system
copy button
Edit button
regenerate button
tone selector (formal, casual, viral etc.)

Generator UI:
Topic input
Title-input
Custom Prompt
Template selector
Tone selector
Advanced options toggle
Generate button
Output preview
Edit/ Copy / Save / Regenerate /delete

🔷 12. 30+ Core Features (Version 1)
🔹 AI Features
Multi-provider (OpenAI, Gemini, Claude)
Platform-specific posts
Tone control
Hashtag generator
Caption rewrite
Hook generator
Emotion realise
CTA generator
Emoji optimization
Viral format suggestions
Language selection
🔹 User Features
Auth system
Dashboard
Usage counter
Plan upgrade
Save posts
History
Favorite posts
Export text
Copy button
Dark mode/light mode/system mode
🔹 Advanced
Prompt templates
Custom prompt save
Bulk generation
AI rewriting
Image prompt generation
SEO caption
Keyword insert
Trend-based prompt
🔹 SaaS Features
Free/pro/premium
Daily limit
Rate limiting
API usage logs
Error tracking
Analytics basic
Admin panel
Feature flags
🔹 UX/Performance
Loading animation
Toast notification
Mobile responsive
Lazy loading
Cache system
Offline fallback (basic)
SEO optimization
PWA support

Admin Panel
Admin can:
manage users
review payments
control plans
monitor AI usage
manage templates
track analytics
ban abuse
manage feature flags

13. 📁 File (recommended) (Final):
socialforge/
├── apps/
│   ├── web/  # 🌐 FRONTEND (Next.js App Router)
│   │   ├── public/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   ├── fonts/
│   │   │   └── favicon.ico
│   │
│   │   ├── src/
│   │   │   ├── app/     # ROUTING LAYER
│   │   │   │   ├── layout.tsx
│   │   │   │
│   │   │   │   ├── (public)/
│   │   │   │   │   ├── page.tsx    # Home (Public Landing)
│   │   │   │   │   ├── pricing/page.tsx
│   │   │   │   │   ├── about/page.tsx
│   │   │   │   │   ├── features/page.tsx
│   │   │   │   │   ├── contact/page.tsx
│   │   │   │
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/page.tsx
│   │   │   │   │   ├── register/page.tsx
│   │   │   │   │   ├── forgot-password/page.tsx
│   │   │   │
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── generator/page.tsx
│   │   │   │   │   ├── history/page.tsx
│   │   │   │   │   ├── analytics/page.tsx
│   │   │   │   │   ├── settings/page.tsx
│   │   │   │
│   │   │   │   ├── admin/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── users/page.tsx
│   │   │   │   │   ├── posts/page.tsx
│   │   │   │   │   ├── payments/page.tsx
│   │   │   │   │   ├── subscriptions/page.tsx
│   │   │   │   │   ├── ai-usage/page.tsx
│   │   │   │   │   ├── analytics/page.tsx
│   │
│   │   │   ├── components/    # UI LAYER
│   │   │   │   ├── ui/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Input.tsx
│   │   │   │   │   ├── Textarea.tsx
│   │   │   │   │   ├── Select.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── Toast.tsx
│   │   │   │   │   ├── badge.tsx
│   │   │   │   │   ├── Spinner.tsx
│   │   │   │
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Sidebar.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── Navbar.tsx
│   │   │   │
│   │   │   │   ├── generator/
│   │   │   │   │   ├── GeneratorForm.tsx
│   │   │   │   │   ├── OutputPreview.tsx
│   │   │   │   │   ├── PlatformSelector.tsx
│   │   │   │   │   ├── ToneSelector.tsx
│   │   │   │   │   ├── TemplateSelector.tsx
│   │
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── StatsCard.tsx
│   │   │   │   │   ├── UsageChart.tsx
│   │   │   │   │   ├── RecentPosts.tsx
│   │
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.ts
│   │   │   │   ├── useGenerator.ts
│   │   │   │   ├── usePosts.ts
│   │
│   │   │   ├── lib/
│   │   │   │   ├── api.ts
│   │   │   │   ├── auth.ts
│   │   │   │   ├── config.ts
│   │   │   │   ├── utils.ts
│   │
│   │   │   ├── store/
│   │   │   │   ├── auth.store.ts
│   │   │   │   ├── user.store.ts
│   │   │   │   ├── generator.store.ts
│   │
│   │   │   ├── styles/
│   │   │   │   ├── globals.css
│   │   │   │   ├── theme.css
│   │
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   ├── package.json
│
├── api/        # ⚙️ BACKEND (NestJS)
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── config/
│   │   │   ├── env.config.ts
│   │   │   ├── database.config.ts
│   │   ├── common/
│   │   │   ├── guards/auth.guard.ts
│   │   │   ├── interceptors/logging.interceptor.ts
│   │   │   ├── filters/http-exception.filter.ts
│   │   │   ├── utils/
│   │   │   │   ├── crypto.util.ts
│   │   │   │   ├── response.util.ts
│   │
│   │   ├── database/
│   │   │   ├── prisma.service.ts
│   │   │   ├── schema.prisma
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── dto/
│   │   │
│   │   │   ├── user/
│   │   │   │   ├── user.controller.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   ├── user.module.ts
│   │   │   │   ├── entity/user.entity.ts
│   │
│   │   │   ├── post/
│   │   │   │   ├── post.controller.ts
│   │   │   │   ├── post.service.ts
│   │   │   │   ├── post.module.ts
│   │   │   │   ├── dto/
│   │   │   │   ├── entity/post.entity.ts
│   │
│   │   │   ├── subscription/
│   │   │   │   ├── subscription.service.ts
│   │   │   │   ├── subscription.module.ts
│   │   │
│   │   │   ├── usage/
│   │   │   │   ├── usage.service.ts
│   │   │   │   ├── usage.module.ts
│   │
│   │   │   ├── payment/
│   │   │   │   ├── payment.service.ts
│   │   │   │   ├── payment.module.ts
│   │
│   │   │   ├── admin/
│   │   │   │   ├── admin.service.ts
│   │   │   │   ├── admin.module.ts
│   │
│   │   │   ├── ai/
│   │   │   │   ├── ai.service.ts
│   │   │   │   ├── ai.module.ts
│   │   │   │   ├── providers/
│   │   │   │   │   ├── openai.provider.ts
│   │   │   │   │   ├── gemini.provider.ts
│   │   │   │   │   ├── claude.provider.ts
│   │   │   │   │   ├── router.provider.ts
│   │
│   │   │   ├── content/      # 🧠 CORE INTELLIGENCE ENGINE
│   │   │   │   ├── content.service.ts
│   │   │   │   ├── content.module.ts
│   │   │   │
│   │   │   │   ├── engine/
│   │   │   │   │   ├── intent.engine.ts
│   │   │   │   │   ├── strategy.engine.ts
│   │   │   │   │   ├── prompt.engine.ts
│   │   │   │   │   ├── audience.engine.ts
│   │   │   │   │   ├── identity.engine.ts
│   │   │   │   │   ├── sequence.engine.ts
│   │   │   │
│   │   │   │   ├── rules/platform.rules.ts

│   │   │   │   ├── templates/
│   │   │   │   │   ├── viral.template.ts
│   │   │   │   │   ├── educational.template.ts
│   │   │   │   │   ├── storytelling.template.ts
│   │   ├── jobs/
│   │   │   ├── usage-reset.job.ts
│   │   │   ├── analytics.job.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   ├── package.json
│   ├── tsconfig.json
├── .env
├── README.md

16. Template Types:
Viral Hook পোস্ট
Educational Tutorial
Authority পোস্ট
Storytelling পোস্ট
Conversion/CTA পোস্ট
Sales Post
আরও ১৫+

queue system
request
→ queue
→ worker
→ AI call
→ save

🔥 Phase 1 এ কী কাজ করবে
Phase 1
Auth
Generate post (basic)
Save post
Usage limit
API key working
Basic admin
UI working
DB connected
Deployable
Phase 2
Prompt intelligence
Sequence engine
Analytics
Audience memory
AI optimization
Multi-model routing
Phase 3
automation
scheduling
publishing
analytics sync
recommendation AI
team workspace
collaboration
affiliate/referral
marketplace
Audience Intelligence Engine
Content Sequencing System (game changer)
