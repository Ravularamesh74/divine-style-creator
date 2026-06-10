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

export type AuthMode =
  | "login"
  | "register"
  | "account";

export type UserRole =
  | "user"
  | "admin";

type AuthContextValue = {
  user: AuthUser | null;

  loading: boolean;
  error: string | null;

  openAuth: boolean;
  authMode: AuthMode;

  setOpenAuth: (open: boolean) => void;
  setAuthMode: (mode: AuthMode) => void;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => void;

  requireLogin: (
    action?: () => void
  ) => boolean;

  refreshUser: () => void;

  isAuthenticated: boolean;
  isAdmin: boolean;
};

const AuthContext =
  createContext<AuthContextValue | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [openAuth, setOpenAuth] =
    useState(false);

  const [authMode, setAuthMode] =
    useState<AuthMode>("login");

  const refreshUser = useCallback(() => {
    try {
      const session = readSession();

      setUser(session);
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();

    return subscribeToAuth(
      refreshUser
    );
  }, [refreshUser]);

  const login = useCallback(
    async (
      email: string,
      password: string
    ) => {
      try {
        setLoading(true);
        setError(null);

        const nextUser =
          await loginUser({
            email,
            password,
          });

        setUser(nextUser);

        setAuthMode("account");
        setOpenAuth(false);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Login failed"
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const register = useCallback(
    async (
      name: string,
      email: string,
      password: string
    ) => {
      try {
        setLoading(true);
        setError(null);

        const nextUser =
          await registerUser({
            name,
            email,
            password,
          });

        setUser(nextUser);

        setAuthMode("account");
        setOpenAuth(false);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Registration failed"
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    logoutUser();

    setUser(null);
    setError(null);

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
    [user]
  );

  const isAuthenticated =
    !!user;

  const isAdmin =
    (user as any)?.role === "admin";

  const value = useMemo(
    () => ({
      user,

      loading,
      error,

      openAuth,
      authMode,

      setOpenAuth,
      setAuthMode,

      login,
      register,
      logout,

      requireLogin,

      refreshUser,

      isAuthenticated,
      isAdmin,
    }),
    [
      user,

      loading,
      error,

      openAuth,
      authMode,

      login,
      register,
      logout,

      requireLogin,

      refreshUser,

      isAuthenticated,
      isAdmin,
    ]
  );

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider."
    );
  }

  return context;
}