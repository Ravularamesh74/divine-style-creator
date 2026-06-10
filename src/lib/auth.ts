export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

type StoredUser = AuthUser & {
  password: string;
};

const USERS_STORAGE_KEY = "style-daddy-users";
const SESSION_STORAGE_KEY = "style-daddy-session";
const authUpdatedEvent = "style-daddy-auth-updated";

function notifyAuthUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(authUpdatedEvent));
  }
}

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (user): user is StoredUser =>
        user != null &&
        typeof user === "object" &&
        typeof (user as StoredUser).id === "string" &&
        typeof (user as StoredUser).name === "string" &&
        typeof (user as StoredUser).email === "string" &&
        typeof (user as StoredUser).password === "string",
    );
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function toAuthUser(user: StoredUser): AuthUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export function readSession(): AuthUser | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as unknown;
    if (
      parsed == null ||
      typeof parsed !== "object" ||
      typeof (parsed as AuthUser).id !== "string" ||
      typeof (parsed as AuthUser).name !== "string" ||
      typeof (parsed as AuthUser).email !== "string"
    ) {
      return null;
    }

    const session = parsed as AuthUser;
    const exists = readUsers().some((user) => user.id === session.id);
    return exists ? session : null;
  } catch {
    return null;
  }
}

function writeSession(user: AuthUser | null) {
  if (typeof window === "undefined") return;

  if (user) {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }

  notifyAuthUpdated();
}

export function registerUser(input: {
  name: string;
  email: string;
  password: string;
}): AuthUser {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const password = input.password;

  if (!name || !email || !password) {
    throw new Error("All fields are required.");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  const users = readUsers();
  if (users.some((user) => user.email === email)) {
    throw new Error("An account with this email already exists.");
  }

  const user: StoredUser = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
  };

  writeUsers([...users, user]);
  const authUser = toAuthUser(user);
  writeSession(authUser);
  return authUser;
}

export function loginUser(input: {
  email: string;
  password: string;
}): AuthUser {
  const email = input.email.trim().toLowerCase();
  const password = input.password;

  if (!email || !password) {
    throw new Error("Please enter your email and password.");
  }

  const user = readUsers().find(
    (entry) => entry.email === email && entry.password === password,
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const authUser = toAuthUser(user);
  writeSession(authUser);
  return authUser;
}

export function logoutUser() {
  writeSession(null);
}

export function subscribeToAuth(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handler = () => callback();
  window.addEventListener(authUpdatedEvent, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(authUpdatedEvent, handler);
    window.removeEventListener("storage", handler);
  };
}
