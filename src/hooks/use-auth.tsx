import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  loginUser,
  logoutUser,
  readSession,
  registerUser,
  subscribeToAuth,
  type AuthUser,
} from "@/lib/auth";

export type AuthMode = "login" | "register" | "account";

type AuthContextValue = {
  user: AuthUser | null;
  openAuth: boolean;
  authMode: AuthMode;
  setOpenAuth: (open: boolean) => void;
  setAuthMode: (mode: AuthMode) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  requireLogin: (action?: () => void) => boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  const refresh = useCallback(() => {
    setUser(readSession());
  }, []);

  useEffect(() => {
    refresh();
    return subscribeToAuth(refresh);
  }, [refresh]);

  const login = useCallback(async (email: string, password: string) => {
    const nextUser = loginUser({ email, password });
    setUser(nextUser);
    setAuthMode("account");
  }, []);

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      const nextUser = registerUser({ name, email, password });
      setUser(nextUser);
      setAuthMode("account");
    },
    [],
  );

  const logout = useCallback(() => {
    logoutUser();
    setUser(null);
    setAuthMode("login");
    setOpenAuth(false);
  }, []);

  const requireLogin = useCallback(
    (action?: () => void) => {
      if (user) {
        action?.();
        return true;
      }

      setAuthMode("login");
      setOpenAuth(true);
      return false;
    },
    [user],
  );

  const value = useMemo(
    () => ({
      user,
      openAuth,
      authMode,
      setOpenAuth,
      setAuthMode,
      login,
      register,
      logout,
      requireLogin,
    }),
    [user, openAuth, authMode, login, register, logout, requireLogin],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
