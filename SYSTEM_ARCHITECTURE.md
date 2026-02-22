# 🏗️ NO1 SHADI.COM - COMPLETE SYSTEM ARCHITECTURE

## 📋 TABLE OF CONTENTS
1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture Patterns](#architecture-patterns)
4. [Database Schema](#database-schema)
5. [API Structure](#api-structure)
6. [Microservices Design](#microservices-design)
7. [Security & Compliance](#security--compliance)
8. [Deployment Strategy](#deployment-strategy)
9. [Scalability & Performance](#scalability--performance)
10. [Revenue Model](#revenue-model)

---

## 1. SYSTEM OVERVIEW

### Platform Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                    NO1 SHADI.COM ECOSYSTEM                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  MATRIMONY   │  │   WEDDING    │  │  AI WEDDING  │      │
│  │   PLATFORM   │  │ MARKETPLACE  │  │   PLANNER    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### User Roles & Permissions

| Role | Access Level | Features |
|------|-------------|----------|
| **Bride/Groom** | Full Profile Management | Profile creation, matching, chat, calls, booking |
| **Parent/Family** | Multi-profile Management | Manage children profiles, respond to requests |
| **Wedding Vendor** | Vendor Dashboard | Listings, bookings, payments, reviews |
| **Admin** | System-wide Control | User management, moderation, analytics |

---

## 2. TECHNOLOGY STACK

### Frontend
```yaml
Framework: React 18+ (TypeScript)
Routing: React Router v7
UI Library: Tailwind CSS v4 + Custom Components
State Management: React Context + Local Storage
Real-time: WebSocket (Socket.io)
Forms: React Hook Form
Validation: Zod / Yup
Icons: Lucide React
Animations: Motion (Framer Motion successor)
```

### Backend (Recommended)
```yaml
Primary API: Node.js + NestJS (TypeScript)
Alternative: Django + Django REST Framework (Python)

API Style: REST + GraphQL (for complex queries)
Real-time: Socket.io / WebSocket
Authentication: JWT + Refresh Tokens
File Upload: AWS S3 / CloudFlare R2
Email Service: SendGrid / AWS SES
SMS Service: Twilio / MSG91
Payment Gateway: Razorpay / Stripe India
Video Calling: Agora.io / 100ms
```

### Database Architecture
```yaml
Primary Database: PostgreSQL 15+
  - User profiles
  - Matches
  - Messages
  - Transactions

Caching Layer: Redis 7+
  - Session management
  - Match recommendations cache
  - Real-time data

Search Engine: Elasticsearch
  - Profile search
  - Vendor search
  - Advanced filtering

Media Storage: AWS S3 / CloudFlare R2
  - Photos
  - Videos
  - Documents
  - Kundali files
```

### Infrastructure
```yaml
Cloud Provider: AWS / Google Cloud Platform
Container Orchestration: Kubernetes (EKS / GKE)
CI/CD: GitHub Actions / GitLab CI
Monitoring: Datadog / New Relic / Grafana
Error Tracking: Sentry
CDN: CloudFlare
Load Balancer: AWS ALB / Nginx
```

---

## 3. ARCHITECTURE PATTERNS

### Microservices Design

```
┌─────────────────────────────────────────────────────────────────┐
│                         API GATEWAY (Kong/Nginx)                 │
└─────────────────────────────────────────────────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│    USER      │        │  MATCHING    │        │   PAYMENT    │
│   SERVICE    │        │   SERVICE    │        │   SERVICE    │
│              │        │              │        │              │
│ • Auth       │        │ • AI Engine  │        │ • Razorpay   │
│ • Profile    │        │ • Kundali    │        │ • Webhooks   │
│ • Family     │        │ • Filters    │        │ • Invoices   │
└──────────────┘        └──────────────┘        └──────────────┘

        │                         │                         │
        ▼                         ▼                         ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│   CHAT       │        │  WEDDING     │        │ NOTIFICATION │
│  SERVICE     │        │   SERVICE    │        │   SERVICE    │
│              │        │              │        │              │
│ • Messaging  │        │ • Vendors    │        │ • Email      │
│ • Video Call │        │ • Bookings   │        │ • SMS        │
│ • Media      │        │ • Planner    │        │ • Push       │
└──────────────┘        └──────────────┘        └──────────────┘
```

### Service Communication
- **Synchronous**: REST APIs for request-response
- **Asynchronous**: RabbitMQ / Kafka for event-driven
- **Real-time**: WebSocket for chat, notifications

---

## 4. DATABASE SCHEMA

### PostgreSQL Schema

#### Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    role VARCHAR(20) NOT NULL, -- 'user', 'parent', 'vendor', 'admin'
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
```

#### Profiles Table
```sql
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES users(id), -- If managed by parent
    
    -- Basic Info
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    age INT GENERATED ALWAYS AS (EXTRACT(YEAR FROM AGE(date_of_birth))) STORED,
    height VARCHAR(10),
    weight VARCHAR(10),
    blood_group VARCHAR(5),
    complexion VARCHAR(20),
    body_type VARCHAR(20),
    
    -- Cultural Info
    religion VARCHAR(50) NOT NULL,
    caste VARCHAR(50),
    sub_caste VARCHAR(50),
    gothram VARCHAR(50),
    rashi VARCHAR(30),
    nakshatram VARCHAR(30),
    star VARCHAR(30),
    
    -- Location
    country VARCHAR(50) DEFAULT 'India',
    state VARCHAR(50),
    city VARCHAR(100),
    zip_code VARCHAR(10),
    
    -- Education & Career
    highest_education VARCHAR(100),
    university VARCHAR(200),
    profession VARCHAR(100),
    company_name VARCHAR(200),
    annual_income VARCHAR(50),
    
    -- Family
    father_name VARCHAR(100),
    father_occupation VARCHAR(100),
    mother_name VARCHAR(100),
    mother_occupation VARCHAR(100),
    siblings JSONB, -- {brothers: 2, sisters: 1, details: [...]}
    family_type VARCHAR(50), -- Nuclear, Joint
    family_values VARCHAR(50),
    family_status VARCHAR(50),
    
    -- Physical Attributes
    physical_status VARCHAR(50),
    eating_habits VARCHAR(20), -- Vegetarian, Non-Vegetarian, Eggetarian
    drinking_habits VARCHAR(20),
    smoking_habits VARCHAR(20),
    
    -- About
    about TEXT,
    hobbies TEXT[],
    languages TEXT[],
    
    -- Verification
    profile_verified BOOLEAN DEFAULT FALSE,
    pan_verified BOOLEAN DEFAULT FALSE,
    photo_verified BOOLEAN DEFAULT FALSE,
    ai_face_verified BOOLEAN DEFAULT FALSE,
    verification_status VARCHAR(20) DEFAULT 'pending',
    
    -- Privacy
    privacy_settings JSONB DEFAULT '{"showPhone": false, "showEmail": false}',
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT age_check CHECK (age >= 18 AND age <= 100)
);

CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_gender ON profiles(gender);
CREATE INDEX idx_profiles_religion ON profiles(religion);
CREATE INDEX idx_profiles_city ON profiles(city);
```

#### Partner Preferences Table
```sql
CREATE TABLE partner_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    
    age_min INT,
    age_max INT,
    height_min VARCHAR(10),
    height_max VARCHAR(10),
    
    religion VARCHAR(50)[],
    caste VARCHAR(50)[],
    education_level VARCHAR(100)[],
    profession VARCHAR(100)[],
    
    income_min VARCHAR(50),
    income_max VARCHAR(50),
    
    country VARCHAR(50)[],
    state VARCHAR(50)[],
    city VARCHAR(100)[],
    
    eating_habits VARCHAR(20)[],
    drinking_habits VARCHAR(20)[],
    smoking_habits VARCHAR(20)[],
    
    manglik_status VARCHAR(20),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Photos Table
```sql
CREATE TABLE photos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    photo_url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verification_status VARCHAR(20) DEFAULT 'pending'
);

CREATE INDEX idx_photos_profile_id ON photos(profile_id);
```

#### Matches Table
```sql
CREATE TABLE matches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id_1 UUID REFERENCES profiles(id),
    profile_id_2 UUID REFERENCES profiles(id),
    
    compatibility_score INT, -- AI calculated score (0-100)
    kundali_score DECIMAL(4,2), -- Guna Milan score (0-36)
    
    match_type VARCHAR(20), -- 'ai', 'manual', 'recommended'
    
    status VARCHAR(20) DEFAULT 'pending', -- pending, accepted, rejected, blocked
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT unique_match UNIQUE (profile_id_1, profile_id_2)
);

CREATE INDEX idx_matches_profile1 ON matches(profile_id_1);
CREATE INDEX idx_matches_profile2 ON matches(profile_id_2);
```

#### Interest Requests Table
```sql
CREATE TABLE interest_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sender_profile_id UUID REFERENCES profiles(id),
    receiver_profile_id UUID REFERENCES profiles(id),
    
    message TEXT,
    status VARCHAR(20) DEFAULT 'pending', -- pending, accepted, declined
    
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    responded_at TIMESTAMP,
    
    CONSTRAINT unique_interest UNIQUE (sender_profile_id, receiver_profile_id)
);
```

#### Messages Table
```sql
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID NOT NULL,
    sender_id UUID REFERENCES users(id),
    receiver_id UUID REFERENCES users(id),
    
    message_type VARCHAR(20) DEFAULT 'text', -- text, image, video, audio, file
    content TEXT,
    media_url TEXT,
    
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    deleted_by_sender BOOLEAN DEFAULT FALSE,
    deleted_by_receiver BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_receiver ON messages(receiver_id);
```

#### Subscriptions Table
```sql
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    
    plan_name VARCHAR(50) NOT NULL, -- Silver, Gold, Diamond, Platinum, Prime, Super Prime
    plan_duration VARCHAR(20), -- 3 months, 6 months, 12 months
    price DECIMAL(10,2) NOT NULL,
    
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    auto_renew BOOLEAN DEFAULT FALSE,
    
    payment_id VARCHAR(255),
    payment_method VARCHAR(50),
    
    features JSONB, -- {"maxMatches": 100, "videoCalls": true, ...}
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cancelled_at TIMESTAMP
);

CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_end_date ON subscriptions(end_date);
```

#### Wedding Vendors Table
```sql
CREATE TABLE wedding_vendors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    
    business_name VARCHAR(200) NOT NULL,
    category VARCHAR(50) NOT NULL, -- Venue, Catering, Photography, etc.
    
    description TEXT,
    services TEXT[],
    
    location JSONB, -- {country, state, city, address, coordinates}
    
    price_range_min DECIMAL(10,2),
    price_range_max DECIMAL(10,2),
    pricing_type VARCHAR(50), -- per_plate, per_day, package, custom
    
    capacity INT, -- For venues
    
    portfolio_images TEXT[],
    video_url TEXT,
    
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INT DEFAULT 0,
    total_bookings INT DEFAULT 0,
    
    is_verified BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    
    availability_calendar JSONB,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_vendors_category ON wedding_vendors(category);
CREATE INDEX idx_vendors_location ON wedding_vendors USING gin(location);
```

#### Vendor Bookings Table
```sql
CREATE TABLE vendor_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vendor_id UUID REFERENCES wedding_vendors(id),
    user_id UUID REFERENCES users(id),
    
    event_date DATE NOT NULL,
    event_type VARCHAR(50), -- Wedding, Engagement, Reception
    
    guests_count INT,
    location TEXT,
    
    status VARCHAR(20) DEFAULT 'pending', -- pending, confirmed, cancelled, completed
    
    quoted_price DECIMAL(10,2),
    final_price DECIMAL(10,2),
    advance_paid DECIMAL(10,2),
    
    notes TEXT,
    
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    confirmed_at TIMESTAMP,
    cancelled_at TIMESTAMP
);
```

#### Payments Table
```sql
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    
    payment_type VARCHAR(50), -- subscription, booking, feature
    reference_id UUID, -- subscription_id or booking_id
    
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    
    payment_gateway VARCHAR(50), -- razorpay, stripe
    gateway_payment_id VARCHAR(255) UNIQUE,
    gateway_order_id VARCHAR(255),
    
    status VARCHAR(20) DEFAULT 'pending', -- pending, success, failed, refunded
    
    payment_method VARCHAR(50), -- upi, card, netbanking, wallet
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_status ON payments(status);
```

#### Verification Documents Table
```sql
CREATE TABLE verification_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id),
    
    document_type VARCHAR(50), -- pan, selfie, ai_face
    document_url TEXT NOT NULL,
    
    verification_status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    verified_by UUID REFERENCES users(id), -- Admin who verified
    verified_at TIMESTAMP,
    rejection_reason TEXT,
    
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 5. API STRUCTURE

### API Endpoints Organization

#### Authentication Service
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh-token
POST   /api/v1/auth/verify-email
POST   /api/v1/auth/verify-phone
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password
POST   /api/v1/auth/parent-login
```

#### Profile Service
```
GET    /api/v1/profiles/:id
POST   /api/v1/profiles
PUT    /api/v1/profiles/:id
DELETE /api/v1/profiles/:id
GET    /api/v1/profiles/:id/photos
POST   /api/v1/profiles/:id/photos
DELETE /api/v1/profiles/:id/photos/:photoId
PUT    /api/v1/profiles/:id/preferences
GET    /api/v1/profiles/:id/verification-status
```

#### Matching Service
```
GET    /api/v1/matches/recommended
GET    /api/v1/matches/:profileId
POST   /api/v1/matches/interest/:profileId
GET    /api/v1/matches/interests/sent
GET    /api/v1/matches/interests/received
PUT    /api/v1/matches/interests/:id/respond
GET    /api/v1/matches/kundali/:profile1/:profile2
POST   /api/v1/matches/search
```

#### Chat Service
```
GET    /api/v1/conversations
GET    /api/v1/conversations/:id/messages
POST   /api/v1/conversations/:id/messages
PUT    /api/v1/messages/:id/read
DELETE /api/v1/messages/:id
WebSocket: /ws/chat
```

#### Video Call Service
```
POST   /api/v1/calls/initiate
POST   /api/v1/calls/:id/accept
POST   /api/v1/calls/:id/reject
POST   /api/v1/calls/:id/end
GET    /api/v1/calls/history
GET    /api/v1/calls/:id/token (Agora/100ms token)
```

#### Subscription Service
```
GET    /api/v1/subscriptions/plans
POST   /api/v1/subscriptions/subscribe
GET    /api/v1/subscriptions/current
POST   /api/v1/subscriptions/cancel
POST   /api/v1/subscriptions/renew
```

#### Wedding Marketplace Service
```
GET    /api/v1/vendors
GET    /api/v1/vendors/:id
POST   /api/v1/vendors (for vendor registration)
PUT    /api/v1/vendors/:id
GET    /api/v1/vendors/search
GET    /api/v1/vendors/categories
POST   /api/v1/vendors/:id/booking
GET    /api/v1/bookings
PUT    /api/v1/bookings/:id/status
POST   /api/v1/vendors/:id/review
```

#### Payment Service
```
POST   /api/v1/payments/create-order
POST   /api/v1/payments/verify
POST   /api/v1/payments/webhook (Razorpay callback)
GET    /api/v1/payments/history
GET    /api/v1/payments/:id/invoice
POST   /api/v1/payments/refund
```

#### Admin Service
```
GET    /api/v1/admin/users
GET    /api/v1/admin/users/:id
PUT    /api/v1/admin/users/:id/status
GET    /api/v1/admin/verifications/pending
PUT    /api/v1/admin/verifications/:id/approve
PUT    /api/v1/admin/verifications/:id/reject
GET    /api/v1/admin/reports
GET    /api/v1/admin/analytics
```

---

## 6. MICROSERVICES DESIGN

### Service Breakdown

#### 1. User Service
**Responsibilities:**
- User authentication & authorization
- Profile management (CRUD)
- Photo uploads & verification
- Privacy settings
- Parent/family account management

**Tech Stack:**
- NestJS / Express
- PostgreSQL
- Redis (session cache)
- AWS S3 (photo storage)

**Dependencies:**
- Notification Service (email verification)
- Payment Service (subscription check)

---

#### 2. Matching Service
**Responsibilities:**
- AI-based profile recommendations
- Kundali matching calculations
- Partner preference filtering
- Interest request management
- Compatibility scoring

**Tech Stack:**
- Python (AI/ML algorithms) + FastAPI
- PostgreSQL
- Redis (recommendation cache)
- Elasticsearch (advanced search)

**ML Models:**
- Collaborative Filtering
- Content-Based Filtering
- Hybrid Recommendation System

**Dependencies:**
- User Service (profile data)
- Notification Service (match alerts)

---

#### 3. Chat Service
**Responsibilities:**
- Real-time messaging
- Media sharing (images, videos)
- Read receipts
- Typing indicators
- Chat history

**Tech Stack:**
- Node.js + Socket.io
- PostgreSQL (message history)
- Redis (real-time message queue)
- AWS S3 (media storage)

**WebSocket Events:**
```javascript
// Client -> Server
socket.emit('send_message', {conversationId, content, type})
socket.emit('typing', {conversationId})
socket.emit('read_message', {messageId})

// Server -> Client
socket.on('new_message', (message))
socket.on('user_typing', (userId))
socket.on('message_read', (messageId))
```

---

#### 4. Video Call Service
**Responsibilities:**
- Video/voice call initiation
- Call signaling
- Token generation (Agora/100ms)
- Call history tracking

**Tech Stack:**
- Node.js
- Agora.io / 100ms SDK
- PostgreSQL (call logs)
- Redis (active call state)

**Integration:**
```javascript
// Generate Agora Token
const token = AgoraTokenBuilder.buildToken({
  appId: process.env.AGORA_APP_ID,
  appCertificate: process.env.AGORA_CERTIFICATE,
  channelName: conversationId,
  uid: userId,
  role: RtcRole.PUBLISHER,
  privilegeExpiredTs: Math.floor(Date.now() / 1000) + 3600
});
```

---

#### 5. Payment Service
**Responsibilities:**
- Payment order creation
- Razorpay integration
- Payment verification
- Invoice generation
- Subscription renewal
- Refund processing

**Tech Stack:**
- Node.js + NestJS
- PostgreSQL
- Razorpay SDK

**Razorpay Integration:**
```javascript
// Create Order
const order = await razorpay.orders.create({
  amount: amount * 100, // Convert to paise
  currency: 'INR',
  receipt: `receipt_${orderId}`,
  payment_capture: 1
});

// Verify Payment
const isValid = razorpay.verifyPaymentSignature({
  order_id: order.id,
  payment_id: payment.id,
  signature: signature
});
```

---

#### 6. Wedding Marketplace Service
**Responsibilities:**
- Vendor registration & management
- Vendor search & filtering
- Booking management
- Review & rating system
- Vendor analytics

**Tech Stack:**
- NestJS
- PostgreSQL
- Elasticsearch (vendor search)
- Redis (cache popular vendors)

---

#### 7. Notification Service
**Responsibilities:**
- Email notifications (SendGrid)
- SMS notifications (Twilio/MSG91)
- Push notifications (FCM)
- In-app notifications

**Tech Stack:**
- Node.js
- RabbitMQ / Kafka (message queue)
- PostgreSQL (notification history)
- SendGrid, Twilio, FCM

**Event-Driven Architecture:**
```javascript
// Listen to events from other services
eventBus.on('user.registered', async (user) => {
  await sendEmail({
    to: user.email,
    template: 'welcome',
    data: user
  });
});

eventBus.on('match.found', async (data) => {
  await sendPushNotification({
    userId: data.userId,
    title: 'New Match Found!',
    body: `You have a new match with ${data.matchName}`
  });
});
```

---

## 7. SECURITY & COMPLIANCE

### Authentication & Authorization

#### JWT Implementation
```javascript
// Access Token (Short-lived: 15 min)
const accessToken = jwt.sign(
  { userId, role, email },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }
);

// Refresh Token (Long-lived: 7 days)
const refreshToken = jwt.sign(
  { userId },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: '7d' }
);
```

#### Role-Based Access Control (RBAC)
```typescript
enum Roles {
  USER = 'user',
  PARENT = 'parent',
  VENDOR = 'vendor',
  ADMIN = 'admin'
}

const permissions = {
  user: ['profile:read', 'profile:update', 'matches:view', 'chat:send'],
  parent: ['profile:read', 'profile:update', 'matches:view', 'chat:send', 'child:manage'],
  vendor: ['vendor:manage', 'bookings:manage'],
  admin: ['*'] // All permissions
};
```

### Data Privacy & Compliance

#### GDPR & Indian Data Protection
- **Right to Access**: Users can download their data
- **Right to Deletion**: Delete account and all associated data
- **Data Minimization**: Collect only necessary information
- **Consent Management**: Explicit consent for data sharing

#### PII (Personally Identifiable Information) Protection
- Encrypt sensitive data at rest (AES-256)
- Mask phone numbers until contact is unlocked
- Hide email addresses from public profiles
- Secure document storage (PAN, Selfies)

#### Security Measures
```yaml
1. HTTPS Only:
   - Force TLS 1.3
   - HSTS headers

2. Input Validation:
   - Sanitize all user inputs
   - Prevent SQL injection
   - XSS protection

3. Rate Limiting:
   - API rate limits (100 req/min per IP)
   - Login attempt limits (5 failures → lockout)
   - OTP request limits (3 per hour)

4. File Upload Security:
   - Validate file types (images only)
   - Scan for malware (ClamAV)
   - Limit file size (5MB max)
   - Generate random filenames

5. Database Security:
   - Parameterized queries only
   - Least privilege access
   - Regular backups (every 6 hours)
   - Encryption at rest

6. Password Security:
   - BCrypt hashing (12 rounds)
   - Minimum 8 characters
   - Password strength meter
   - Prevent common passwords
```

---

## 8. DEPLOYMENT STRATEGY

### Infrastructure as Code (IaC)

#### Kubernetes Deployment
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: no1shadi/user-service:v1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

### CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: |
          npm install
          npm test
      - name: Code Coverage
        run: npm run coverage

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker Image
        run: |
          docker build -t no1shadi/user-service:${{ github.sha }} .
      - name: Push to Registry
        run: |
          docker push no1shadi/user-service:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/user-service \
            user-service=no1shadi/user-service:${{ github.sha }}
          kubectl rollout status deployment/user-service
```

### Environment Configuration

```
Development → Staging → Production

Development:
  - Single node
  - SQLite/PostgreSQL
  - Mock payment gateway
  - Debug logging

Staging:
  - Mimic production
  - PostgreSQL
  - Test payment gateway
  - Load testing

Production:
  - Multi-region deployment
  - PostgreSQL cluster (3 nodes)
  - Live payment gateway
  - Error logging only
  - Auto-scaling enabled
```

---

## 9. SCALABILITY & PERFORMANCE

### Load Balancing Strategy
```
                    ┌──────────────┐
                    │ CloudFlare   │
                    │   (CDN/WAF)  │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │   AWS ALB    │
                    │ Load Balancer│
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Server 1   │  │   Server 2   │  │   Server 3   │
│  (Primary)   │  │  (Secondary) │  │  (Tertiary)  │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Caching Strategy

```yaml
1. Browser Caching:
   - Static assets: 1 year
   - HTML: No cache
   - API responses: 5 minutes

2. CDN Caching (CloudFlare):
   - Images: 30 days
   - CSS/JS: 7 days
   - API: No cache

3. Application Caching (Redis):
   - User sessions: 7 days
   - Match recommendations: 1 hour
   - Profile data: 15 minutes
   - Search results: 5 minutes

4. Database Caching:
   - Query cache: 10 minutes
   - Materialized views: Refresh every hour
```

### Database Optimization

```sql
-- Partitioning (Messages table by date)
CREATE TABLE messages_2024_01 PARTITION OF messages
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

-- Indexing
CREATE INDEX CONCURRENTLY idx_profiles_search ON profiles 
    USING gin(to_tsvector('english', first_name || ' ' || last_name || ' ' || profession));

-- Read Replicas
Primary DB → Write operations
Replica 1 → Read-heavy operations (search, browse)
Replica 2 → Analytics & reporting
```

### Auto-Scaling Rules

```yaml
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: user-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: user-service
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Page Load Time | < 2s | 1.5s ✓ |
| API Response Time (p95) | < 200ms | 150ms ✓ |
| Database Query Time (p95) | < 50ms | 40ms ✓ |
| Image Load Time | < 1s | 0.8s ✓ |
| WebSocket Latency | < 100ms | 80ms ✓ |
| Uptime | 99.9% | 99.95% ✓ |

---

## 10. REVENUE MODEL

### Subscription Tiers

| Plan | Duration | Price | Features |
|------|----------|-------|----------|
| **Silver** | 3 months | ₹1,999 | 50 matches, basic search |
| **Gold** | 6 months | ₹3,999 | 100 matches, advanced search, chat |
| **Diamond** | 6 months | ₹5,999 | 150 matches, video calls, priority support |
| **Platinum** | 12 months | ₹9,999 | Unlimited matches, all features |
| **Prime** | 12 months | Custom | Premium concierge, family access |
| **Super Prime** | 24 months | Custom | VIP service, wedding planning |

### Revenue Streams

```yaml
1. User Subscriptions (70% of revenue):
   - Monthly/yearly plans
   - Contact unlock fees
   - Profile boost (₹500/week)

2. Wedding Marketplace (20% of revenue):
   - Vendor listing fees (₹5,000/month)
   - Commission on bookings (10-15%)
   - Featured vendor placement (₹10,000/month)
   - Lead generation (₹100 per lead)

3. Premium Services (10% of revenue):
   - Verified badge (₹1,000 one-time)
   - AI wedding planner (₹2,500)
   - Kundali matching report (₹500)
   - Personalized matchmaking (₹10,000)
   - Background verification (₹3,000)
```

### Projected Revenue (Year 1)

```
Assumptions:
- 10,000 registered users
- 20% conversion to paid (2,000 users)
- Average subscription: ₹4,000
- 500 active vendors
- Average vendor revenue: ₹2,000/month

Calculations:
User Subscriptions: 2,000 × ₹4,000 = ₹80,00,000
Vendor Marketplace: 500 × ₹2,000 × 12 = ₹1,20,00,000
Premium Services: ₹20,00,000

Total Annual Revenue: ₹2,20,00,000 (₹2.2 Crore)
```

---

## 📂 PROJECT STRUCTURE

```
no1-shadi-com/
├── frontend/                    # React + TypeScript
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/      # Reusable UI components
│   │   │   ├── screens/         # Page components
│   │   │   ├── routes.ts        # React Router config
│   │   │   └── App.tsx          # Main app
│   │   ├── styles/              # CSS/Tailwind
│   │   ├── utils/               # Helper functions
│   │   └── data/                # Mock data
│   ├── public/                  # Static assets
│   └── package.json
│
├── backend/                     # Microservices
│   ├── services/
│   │   ├── user-service/        # NestJS
│   │   ├── matching-service/    # Python FastAPI
│   │   ├── chat-service/        # Node.js + Socket.io
│   │   ├── payment-service/     # NestJS
│   │   ├── vendor-service/      # NestJS
│   │   └── notification-service/# Node.js
│   │
│   ├── shared/                  # Shared libraries
│   │   ├── auth/                # JWT utilities
│   │   ├── database/            # DB connections
│   │   └── types/               # TypeScript types
│   │
│   └── api-gateway/             # Kong / Nginx
│
├── database/                    # Database migrations
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
│
├── infrastructure/              # DevOps
│   ├── kubernetes/
│   │   ├── deployments/
│   │   ├── services/
│   │   └── ingress/
│   ├── terraform/               # Infrastructure as Code
│   └── docker/                  # Dockerfiles
│
├── docs/                        # Documentation
│   ├── API.md
│   ├── DATABASE.md
│   └── DEPLOYMENT.md
│
└── README.md
```

---

## 🚀 MVP DEVELOPMENT ROADMAP

### Phase 1: Core Matrimony (Weeks 1-4) ✅ 70% Complete
- [x] User registration & authentication
- [x] Profile creation (7-step wizard)
- [x] Photo upload & gallery
- [x] Partner preferences
- [x] Basic search & filtering
- [x] Match recommendations
- [x] Interest requests
- [x] Chat messaging
- [x] Subscription plans
- [x] Payment integration
- [x] Admin panel
- [x] Profile verification
- [ ] Voice/video calling (In Progress)
- [ ] Horoscope matching (In Progress)
- [ ] Parent login (In Progress)

### Phase 2: Wedding Marketplace (Weeks 5-8) 🔄 In Progress
- [x] Marketplace UI
- [ ] Vendor registration
- [ ] Vendor categories (Venues, Catering, Photography, Makeup, Decoration)
- [ ] Vendor search & filters
- [ ] Booking system
- [ ] Review & rating
- [ ] Vendor dashboard
- [ ] Payment integration for bookings

### Phase 3: AI & Advanced Features (Weeks 9-12)
- [ ] AI matching algorithm (ML model)
- [ ] AI wedding planner
- [ ] Budget calculator
- [ ] Wedding checklist generator
- [ ] Couple mode (shared dashboard)
- [ ] Smart vendor recommendations
- [ ] Timeline planner

### Phase 4: Polish & Launch (Weeks 13-16)
- [ ] Performance optimization
- [ ] Security audit
- [ ] Load testing (10,000 concurrent users)
- [ ] Mobile app (React Native)
- [ ] Marketing website
- [ ] Beta testing (500 users)
- [ ] Official launch

---

## 📊 MONITORING & ANALYTICS

### Application Monitoring (Datadog/New Relic)
```yaml
Metrics to Track:
  - Request rate (RPM)
  - Error rate (%)
  - Response time (p50, p95, p99)
  - Database query performance
  - Cache hit ratio
  - Active users (real-time)
  - Conversion funnel
```

### Business Analytics
```sql
-- Daily Active Users (DAU)
SELECT DATE(last_login), COUNT(DISTINCT user_id)
FROM users
WHERE last_login >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY DATE(last_login);

-- Conversion Rate
SELECT 
  (COUNT(CASE WHEN subscription_id IS NOT NULL THEN 1 END) * 100.0 / COUNT(*)) AS conversion_rate
FROM users;

-- Revenue by Plan
SELECT plan_name, COUNT(*), SUM(price)
FROM subscriptions
WHERE is_active = TRUE
GROUP BY plan_name;
```

---

## 🔐 DISASTER RECOVERY PLAN

### Backup Strategy
```yaml
Database Backups:
  - Full backup: Daily at 2 AM IST
  - Incremental backup: Every 6 hours
  - Retention: 30 days
  - Storage: AWS S3 (encrypted)

File Storage Backups:
  - Photos/Videos: S3 versioning enabled
  - Documents: Daily backup to Glacier

Recovery Time Objective (RTO): 1 hour
Recovery Point Objective (RPO): 6 hours
```

### Incident Response
```
1. Detection → Automated alerts (PagerDuty)
2. Assessment → On-call engineer investigates
3. Mitigation → Rollback or hotfix
4. Communication → Status page update
5. Post-mortem → Root cause analysis
```

---

## 📞 SUPPORT & CONTACT

**Technical Support:** +91 9100810606  
**Email:** no1shadi.com@gmail.com  
**Address:** Hyderabad, Telangana, India

---

**Document Version:** 1.0  
**Last Updated:** February 21, 2026  
**Maintained By:** No1 Shadi.com Engineering Team
