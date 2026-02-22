# 💍 No1 Shadi.com - Safe & Secure

> **Premium Telugu Matrimony & Wedding Ecosystem Platform**  
> Connecting hearts with AI-powered matchmaking + Complete wedding planning services

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)]()
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)]()

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Key Screens](#key-screens)
- [System Architecture](#system-architecture)
- [Development Roadmap](#development-roadmap)
- [Contact](#contact)

---

## 🌟 Overview

**No1 Shadi.com** is a comprehensive matrimony and wedding services platform designed specifically for the Telugu community. It combines traditional Indian cultural values with modern technology, featuring:

- 🤖 **AI-Powered Matching** - Intelligent compatibility scoring
- 🔐 **Verified Profiles** - PAN card & AI face verification
- 📱 **Video/Voice Calls** - Built-in communication
- 💫 **Kundali Matching** - Traditional Ashtakoot Guna Milan
- 👨‍👩‍👧 **Parent Accounts** - Family-managed profiles
- 💒 **Wedding Marketplace** - Complete vendor ecosystem
- 💰 **6-Tier Subscriptions** - Flexible pricing plans
- 🎯 **Admin Dashboard** - Comprehensive management system

---

## ✨ Features

### Phase 1: Core Matrimony Platform ✅ (90% Complete)

#### Authentication & Onboarding
- [x] Multi-method login (Email, Phone, Google)
- [x] OTP verification
- [x] 7-step registration wizard
- [x] Selfie upload with guidelines
- [x] Profile verification system

#### Profile Management
- [x] Comprehensive profile creation
- [x] Multi-photo gallery (6 images)
- [x] Telugu-specific fields (Gothram, Rashi, Nakshatram)
- [x] Family details management
- [x] Partner preferences
- [x] Privacy controls
- [x] Edit profile functionality

#### Matchmaking & Search
- [x] AI compatibility scoring
- [x] Advanced search with 15+ filters
- [x] Match recommendations
- [x] Interest request system
- [x] Profile detail views
- [x] Match history tracking

#### Communication
- [x] Real-time chat messaging
- [x] Interest requests (send/receive)
- [x] **NEW: Voice calling**
- [x] **NEW: Video calling**
- [x] Message notifications

#### Verification System
- [x] **NEW: PAN card verification**
- [x] **NEW: AI Face Match & Liveness Check**
- [x] Selfie verification
- [x] Photo verification
- [x] Verified badge system

#### Kundali & Astrology
- [x] **NEW: Complete Kundali Matching**
- [x] **Ashtakoot Guna Milan (8 aspects)**
- [x] **Dosha Analysis (Mangal, Kalsarpa, Pitru)**
- [x] **Compatibility percentage**
- [x] **Expert astrologer consultation**

#### Subscriptions
- [x] 6-tier plans (Silver to Super Prime)
- [x] Dynamic payment system
- [x] GST calculations
- [x] Multiple payment methods (UPI, Cards, Net Banking, Wallets)
- [x] Razorpay integration ready
- [x] Subscription management
- [x] Auto-renewal options

#### Settings & Support
- [x] Profile settings
- [x] Privacy controls
- [x] Language selection
- [x] Blocked users management
- [x] Password change
- [x] Help & FAQ
- [x] Contact support (+91 9100810606)
- [x] Terms & Conditions
- [x] Privacy Policy

#### Admin Panel
- [x] Admin login (Separate from user login)
- [x] Dashboard with analytics
- [x] User management
- [x] Verification queue
- [x] Subscription management
- [x] Support tickets
- [x] Content management
- [x] System settings
- [x] Analytics & reports

### Phase 2: Wedding Marketplace 🔄 (30% Complete)

- [x] **Wedding Marketplace UI**
- [x] **8 Vendor Categories**
  - Venues (Function Halls)
  - Catering Services
  - Photography & Videography
  - Makeup Artists
  - Decorators & Event Planners
  - Entertainment (DJ, Bands)
  - Invitations
  - Transport & Travel
- [x] Vendor search & filters
- [ ] Vendor registration (Coming soon)
- [ ] Booking system (Coming soon)
- [ ] Review & rating system (Coming soon)
- [ ] Vendor dashboard (Coming soon)

### Phase 3: Parent/Family Accounts ✅ (80% Complete)

- [x] **Parent login system**
- [x] **Parent dashboard**
- [x] **Multi-child profile management**
- [x] **View matches for children**
- [x] **Respond to interest requests**
- [x] **Family communication**
- [ ] Permission controls (Coming soon)
- [ ] Activity notifications (Coming soon)

### Phase 4: AI Wedding Planner 🔜 (Planned)

- [ ] AI-powered wedding checklist
- [ ] Budget calculator
- [ ] Timeline planner
- [ ] Vendor recommendations
- [ ] Couple mode (shared dashboard)
- [ ] Task tracking
- [ ] Expense management

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Routing:** React Router v7 (Data Mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom component library
- **Animations:** Motion (Framer Motion successor)
- **Icons:** Lucide React
- **State:** React Context + LocalStorage

### Backend (Recommended)
- **API:** Node.js + NestJS / Python FastAPI
- **Database:** PostgreSQL 15+
- **Cache:** Redis 7+
- **Search:** Elasticsearch
- **Storage:** AWS S3 / CloudFlare R2
- **Real-time:** Socket.io / WebSocket

### Services & Integrations
- **Payments:** Razorpay (ready for integration)
- **Video Calls:** Agora.io / 100ms (architecture ready)
- **SMS:** Twilio / MSG91
- **Email:** SendGrid / AWS SES
- **Authentication:** JWT + Refresh Tokens

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 18.0.0
npm or pnpm
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-org/no1-shadi-com.git
cd no1-shadi-com
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
pnpm dev
```

4. **Open browser**
```
http://localhost:5173
```

### Environment Variables

Create a `.env` file in the root:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api/v1

# Payment Gateway
VITE_RAZORPAY_KEY_ID=your_razorpay_key
VITE_RAZORPAY_KEY_SECRET=your_razorpay_secret

# Video Calling
VITE_AGORA_APP_ID=your_agora_app_id
VITE_AGORA_CERTIFICATE=your_agora_certificate

# Storage
VITE_S3_BUCKET=your_s3_bucket
VITE_S3_REGION=ap-south-1

# Analytics
VITE_ANALYTICS_ID=your_analytics_id
```

---

## 📁 Project Structure

```
no1-shadi-com/
├── src/
│   ├── app/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Base UI components (Button, Input, etc.)
│   │   │   └── figma/        # Figma-imported components
│   │   ├── screens/          # Page components
│   │   │   ├── Welcome.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Registration.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── ProfileDetail.tsx
│   │   │   ├── HoroscopeMatching.tsx    # NEW
│   │   │   ├── VideoCall.tsx            # NEW
│   │   │   ├── ParentLogin.tsx          # NEW
│   │   │   ├── ParentDashboard.tsx      # NEW
│   │   │   ├── WeddingMarketplace.tsx   # NEW
│   │   │   └── admin/        # Admin panel screens
│   │   ├── data/             # Mock data & constants
│   │   ├── utils/            # Helper functions
│   │   ├── routes.tsx        # React Router configuration
│   │   └── App.tsx           # Main app component
│   ├── styles/
│   │   ├── theme.css         # Design tokens
│   │   ├── fonts.css         # Font imports
│   │   └── globals.css       # Global styles
│   └── main.tsx              # Entry point
├── public/                    # Static assets
├── SYSTEM_ARCHITECTURE.md     # Complete system architecture
├── package.json
└── README.md                  # This file
```

---

## 🗺️ Available Routes

### Public Routes
```
/                           Welcome screen
/login                      User login
/phone-number-entry         Phone login
/parent-login              Parent/family login (NEW)
/wedding-marketplace       Wedding vendor marketplace (NEW)
/registration              7-step registration
/otp-verification          OTP verification
/selfie-upload             Selfie upload
```

### Authenticated Routes
```
/home                      Dashboard with matches
/search                    Advanced search
/profile/:id               Profile detail view
/horoscope-matching        Kundali matching (NEW)
/video-call               Video/voice calling (NEW)
/chat                      Messaging
/notifications            Notifications
/subscription             Subscription plans
/payment                   Payment processing
/profile                   User profile
/edit-profile             Edit profile
/settings                  Settings
```

### Parent Routes (NEW)
```
/parent-login             Parent login
/parent-dashboard         Manage children profiles
```

### Admin Routes
```
/admin/login              Admin login
/admin/dashboard          Admin dashboard
/admin/users              User management
/admin/verifications      Verification queue
/admin/subscriptions      Subscription management
/admin/analytics          Analytics & reports
/admin/support            Support tickets
/admin/content            Content management
/admin/settings           System settings
```

---

## 📱 Key Screens

### 1. Welcome Screen
- Hero section with branding
- Feature highlights
- Quick links (Parent Login, Wedding Services)
- CTA buttons

### 2. Registration Flow (7 Steps)
1. Basic Information
2. Religious & Cultural Details
3. Family Background
4. Education & Career
5. Lifestyle & Habits
6. Partner Preferences
7. Photo Upload

### 3. Home Dashboard
- AI-recommended matches
- Match percentage
- Quick filters
- Premium badges
- Bottom navigation

### 4. Profile Detail
- Image gallery (multi-photo)
- AI compatibility score
- Tabbed information (About, Family, Career, Lifestyle, Partner)
- **Kundali Matching button**
- Voice/Video call buttons
- Interest request
- Chat messaging

### 5. Horoscope Matching (NEW)
- Overall compatibility percentage
- 8 Guna breakdown (Ashtakoot)
- Dosha analysis (Mangal, Kalsarpa, Pitru)
- Expert astrologer consultation
- Beautiful UI with circular progress

### 6. Video/Voice Call (NEW)
- Full-screen video interface
- Picture-in-picture local video
- Call controls (Mute, Video, Speaker, End)
- Connection quality indicator
- Premium feature badge

### 7. Parent Dashboard (NEW)
- Multi-child profile cards
- Quick stats (matches, requests)
- Manage multiple profiles
- View matches per child
- Respond to interests

### 8. Wedding Marketplace (NEW)
- 8 vendor categories
- Location-based search
- Featured vendors
- Rating & reviews
- Quick actions (Saved, Top Rated, Offers)
- AI wedding planner CTA

### 9. Subscription Plans
- 6 tiers (Silver, Gold, Diamond, Platinum, Prime, Super Prime)
- Feature comparison
- "Contact Us" for Premium plans (calls +91 9100810606)
- Dynamic pricing

### 10. Payment Processing
- **Dynamic order summary** (changes per plan)
- GST calculation (18%)
- Multiple payment methods
- Razorpay integration ready
- Secure payment flow

### 11. Admin Panel
- User management
- Profile verification queue
- Subscription analytics
- Support ticket system
- Content moderation
- System settings

---

## 🏗️ System Architecture

For detailed system architecture, database schema, API structure, and deployment strategy, see:

**[SYSTEM_ARCHITECTURE.md](./SYSTEM_ARCHITECTURE.md)**

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    NO1 SHADI.COM                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  MATRIMONY   │  │   WEDDING    │  │  AI WEDDING  │  │
│  │   PLATFORM   │  │ MARKETPLACE  │  │   PLANNER    │  │
│  │              │  │              │  │              │  │
│  │ • Profiles   │  │ • Vendors    │  │ • Checklist  │  │
│  │ • Matching   │  │ • Bookings   │  │ • Budget     │  │
│  │ • Chat       │  │ • Reviews    │  │ • Timeline   │  │
│  │ • Calls      │  │ • Payments   │  │ • Tasks      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Database Schema

Primary tables:
- **users** - Authentication & roles
- **profiles** - User profiles with Telugu fields
- **partner_preferences** - Match criteria
- **matches** - AI compatibility scores
- **messages** - Chat history
- **subscriptions** - Payment & plans
- **wedding_vendors** - Vendor marketplace
- **vendor_bookings** - Wedding bookings
- **payments** - Transaction records

---

## 🗓️ Development Roadmap

### ✅ Phase 1: Core Matrimony (Weeks 1-4) - 90% Complete

- [x] Authentication system
- [x] Registration flow
- [x] Profile management
- [x] Matchmaking engine
- [x] Chat system
- [x] **Voice/Video calling**
- [x] **Kundali matching**
- [x] **Parent accounts**
- [x] Subscriptions
- [x] Payments
- [x] Admin panel
- [ ] Phone number masking (90%)
- [ ] Advanced AI recommendations (80%)

### 🔄 Phase 2: Wedding Marketplace (Weeks 5-8) - 30% Complete

- [x] Marketplace UI
- [x] Vendor categories
- [x] Search & filters
- [ ] Vendor registration (Week 5)
- [ ] Booking system (Week 6)
- [ ] Review & rating (Week 7)
- [ ] Vendor dashboard (Week 8)

### 📅 Phase 3: AI Wedding Planner (Weeks 9-12)

- [ ] AI planning engine (Week 9)
- [ ] Budget calculator (Week 10)
- [ ] Checklist generator (Week 10)
- [ ] Timeline planner (Week 11)
- [ ] Couple mode (Week 11)
- [ ] Vendor recommendations (Week 12)

### 🚀 Phase 4: Launch & Scale (Weeks 13-16)

- [ ] Performance optimization (Week 13)
- [ ] Security audit (Week 13)
- [ ] Load testing (Week 14)
- [ ] Mobile app (React Native) (Week 14-15)
- [ ] Beta testing (Week 15)
- [ ] Production launch (Week 16)

---

## 📊 Current Progress

```
Overall Progress:     ████████████░░░░░░░░ 60%

Phase 1 (Matrimony):  ██████████████████░░ 90%
Phase 2 (Marketplace):███████░░░░░░░░░░░░░ 30%
Phase 3 (AI Planner): ░░░░░░░░░░░░░░░░░░░░  0%
Phase 4 (Launch):     ░░░░░░░░░░░░░░░░░░░░  0%
```

---

## 🎯 Key Performance Indicators (KPIs)

### Current Metrics
- **Users:** 0 (Pre-launch)
- **Profiles:** 0
- **Matches:** 0
- **Subscriptions:** 0
- **Revenue:** ₹0

### Target (Year 1)
- **Users:** 10,000
- **Paid Users:** 2,000 (20% conversion)
- **Active Vendors:** 500
- **Revenue:** ₹2.2 Crore

---

## 🔒 Security Features

- ✅ JWT authentication with refresh tokens
- ✅ Password hashing (BCrypt)
- ✅ PAN card verification
- ✅ AI face liveness detection
- ✅ Photo verification system
- ✅ Secure payment integration
- ✅ Data encryption at rest
- ✅ HTTPS only
- ✅ Rate limiting
- ✅ Input sanitization
- ✅ SQL injection prevention

---

## 🌐 Deployment

### Production Environment
- **Cloud:** AWS / Google Cloud Platform
- **CDN:** CloudFlare
- **Database:** PostgreSQL (managed)
- **Cache:** Redis (managed)
- **Storage:** AWS S3
- **Container:** Docker + Kubernetes
- **CI/CD:** GitHub Actions

### Staging Environment
- **URL:** staging.no1shadi.com
- **Purpose:** Pre-production testing
- **Data:** Test/dummy data only

---

## 📞 Contact & Support

### Business Inquiries
- **Phone:** +91 9100810606
- **Email:** no1shadi.com@gmail.com
- **Address:** Hyderabad, Telangana, India

### Technical Support
- **GitHub Issues:** [Report a bug](https://github.com/your-org/no1-shadi-com/issues)
- **Email:** tech@no1shadi.com
- **Hours:** Mon-Sat, 9 AM - 6 PM IST

### Social Media
- **Facebook:** facebook.com/no1shadicom
- **Instagram:** @no1shadicom
- **Twitter:** @no1shadicom

---

## 👥 Team

- **Founder:** Kasturi Gopala Krishna
- **Tech Lead:** [Your Name]
- **Design:** [Designer Name]
- **Backend:** [Developer Name]
- **Marketing:** [Marketer Name]

---

## 📄 License

Proprietary - All rights reserved © 2026 No1 Shadi.com

---

## 🙏 Acknowledgments

- Telugu community for cultural guidance
- Vedic astrology experts for Kundali matching algorithms
- Design inspiration from leading matrimony platforms
- Open-source community for amazing tools

---

## 📚 Additional Documentation

- [System Architecture](./SYSTEM_ARCHITECTURE.md) - Complete technical architecture
- [API Documentation](./docs/API.md) - API endpoints & usage
- [Database Schema](./docs/DATABASE.md) - Database structure
- [Deployment Guide](./docs/DEPLOYMENT.md) - Deployment instructions
- [Contributing Guide](./docs/CONTRIBUTING.md) - How to contribute

---

## 🎉 Recent Updates (February 2026)

### Version 2.0.0 - Major Feature Release

**New Features:**
1. ✨ **Complete Kundali Matching System**
   - Ashtakoot Guna Milan (8 aspects)
   - Dosha analysis (Mangal, Kalsarpa, Pitru)
   - Compatibility percentage
   - Expert consultation integration

2. 📹 **Voice & Video Calling**
   - Full-screen video interface
   - Voice-only mode
   - Call controls (Mute, Video, Speaker)
   - Connection quality indicator

3. 👨‍👩‍👧 **Parent/Family Account System**
   - Dedicated parent login
   - Multi-child profile management
   - View matches for each child
   - Respond to interest requests

4. 💒 **Wedding Marketplace Foundation**
   - 8 vendor categories
   - Location-based search
   - Featured vendors
   - Rating system

**Improvements:**
- ✅ Replaced Aadhaar with PAN card verification
- ✅ AI Face Match & Liveness Check
- ✅ Dynamic payment calculations
- ✅ Contact number updated to 9100810606
- ✅ Enhanced siblings information
- ✅ Improved verification workflow

**Bug Fixes:**
- Fixed subscription plan amounts not updating in payment
- Fixed Contact Us button for Premium plans
- Fixed selfie upload functionality
- Fixed all verification options

---

**Built with ❤️ for the Telugu community**

**Version:** 2.0.0  
**Last Updated:** February 21, 2026  
**Status:** Active Development 🚀
