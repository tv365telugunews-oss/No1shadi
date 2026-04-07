export type BackendHealth = {
  success: boolean;
  service: string;
  status: string;
  timestamp: string;
  database?: {
    connected: boolean;
    users: number;
    profiles: number;
  };
};

export type AuthUser = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  role: "user" | "parent" | "admin";
};

export type AuthSession = {
  token: string;
  user: AuthUser;
};

export type ApiProfile = {
  id: string;
  userId?: string;
  name: string;
  age: number;
  height?: string;
  education?: string;
  profession?: string;
  location?: string;
  city?: string;
  state?: string;
  maritalStatus?: string;
  religion?: string;
  caste?: string;
  gothram?: string;
  rashi?: string;
  nakshatram?: string;
  income?: string;
  employmentType?: string;
  diet?: string;
  motherTongue?: string;
  photo?: string;
  image?: string;
  verified?: boolean;
  premium?: boolean;
  trusted?: boolean;
  aiCompatibility?: number;
  compatibility?: number;
  profileViews?: number;
  about?: string;
  familyDetails?: Record<string, string>;
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  duration: string;
  durationMonths: number;
  price: number | null;
  originalPrice: number | null;
  discount: string | null;
  features: string[];
  popular: boolean;
  recommended: boolean;
};

export type UserSubscription = {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  status: string;
  autoRenew: boolean;
  startDate: string;
  endDate: string;
  durationMonths: number;
  amount: number | null;
  createdAt: string;
};

export type SupportTicketInput = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  subject: string;
  message: string;
};

export type AdminDashboardData = {
  stats: Array<{ title: string; value: number | string; change: string }>;
  recentActivities: Array<{ type: string; message: string; time: string }>;
  supportTicketCount: number;
};

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";
const AUTH_STORAGE_KEY = "no1shadi_auth";

type RequestOptions = {
  method?: string;
  body?: unknown;
  requiresAuth?: boolean;
};

type ApiEnvelope<T> = {
  success: boolean;
  message?: string;
  data: T;
};

function getStoredSession(): AuthSession | null {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored) as AuthSession;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const session = getStoredSession();
  if (options.requiresAuth && !session?.token) {
    throw new Error("Please log in to continue");
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(session?.token ? { Authorization: `Bearer ${session.token}` } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(payload?.message || "Request failed");
  }

  return payload as T;
}

export function saveAuthSession(session: AuthSession) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  localStorage.setItem("userRole", session.user.role);
  if (session.user.role === "admin") {
    localStorage.setItem("adminLoggedIn", "true");
  }
}

export function getAuthSession() {
  return getStoredSession();
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem("adminLoggedIn");
}

export function formatCurrency(amount: number | null | undefined) {
  if (amount == null) {
    return "Contact Us";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export async function getBackendHealth(): Promise<BackendHealth> {
  return apiRequest<BackendHealth>("/health");
}

export async function loginUser(payload: { email?: string; phone?: string; password: string }) {
  return apiRequest<AuthSession>("/auth/login", { method: "POST", body: payload });
}

export async function loginParent(payload: { email?: string; phone?: string; password: string }) {
  return apiRequest<AuthSession>("/auth/parent-login", { method: "POST", body: payload });
}

export async function loginAdmin(payload: { email: string; password: string }) {
  return apiRequest<AuthSession>("/auth/admin-login", { method: "POST", body: payload });
}

export async function getProfiles(filters: Record<string, string | number | undefined> = {}) {
  const searchParams = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  const query = searchParams.toString();
  const response = await apiRequest<ApiEnvelope<ApiProfile[]>>(`/profiles${query ? `?${query}` : ""}`);
  return response.data;
}

export async function getRecommendedProfiles() {
  const response = await apiRequest<ApiEnvelope<ApiProfile[]>>("/profiles/recommended");
  return response.data;
}

export async function getProfileById(id: string) {
  const response = await apiRequest<ApiEnvelope<ApiProfile>>(`/profiles/${id}`);
  return response.data;
}

export async function getSubscriptionPlans() {
  const response = await apiRequest<ApiEnvelope<SubscriptionPlan[]>>("/subscriptions/plans");
  return response.data;
}

export async function getCurrentSubscription() {
  const response = await apiRequest<ApiEnvelope<UserSubscription | null>>("/subscriptions/current", { requiresAuth: true });
  return response.data;
}

export async function checkoutSubscription(payload: { planId: string; autoRenew?: boolean }) {
  const response = await apiRequest<ApiEnvelope<UserSubscription>>("/subscriptions/checkout", {
    method: "POST",
    body: payload,
    requiresAuth: true,
  });
  return response.data;
}

export async function submitSupportTicket(payload: SupportTicketInput) {
  const response = await apiRequest<ApiEnvelope<{ id: string }>>("/support/tickets", {
    method: "POST",
    body: payload,
  });
  return response.data;
}

export async function getAdminDashboard() {
  const response = await apiRequest<ApiEnvelope<AdminDashboardData>>("/admin/dashboard", {
    requiresAuth: true,
  });
  return response.data;
}