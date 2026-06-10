import { Flame, LogOut, Sparkles, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, type AuthMode } from "@/hooks/use-auth";

export function AuthDialog() {
  const {
    user,
    openAuth,
    authMode,
    setOpenAuth,
    setAuthMode,
    login,
    register,
    logout,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!openAuth) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
      setLoading(false);
    }
  }, [openAuth]);

  useEffect(() => {
    if (openAuth && user) {
      setAuthMode("account");
    }
  }, [openAuth, user, setAuthMode]);

  const switchMode = (mode: AuthMode) => {
    setError("");
    setAuthMode(mode);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await register(name, email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={openAuth} onOpenChange={setOpenAuth}>
      <DialogContent className="max-w-md border-border bg-card p-0">
        <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />

        <div className="p-6">
          <DialogHeader>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-primary">
              <Sparkles className="h-4 w-4" />
              Style Daddy
            </p>
            <DialogTitle className="mt-3 font-display text-4xl uppercase leading-none">
              {authMode === "register"
                ? "Create Account"
                : authMode === "account"
                  ? "Your Account"
                  : "Welcome Back"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {authMode === "register"
                ? "Join the kingdom and unlock cart checkout."
                : authMode === "account"
                  ? "Manage your session and keep shopping."
                  : "Login to access your cart and place orders."}
            </DialogDescription>
          </DialogHeader>

          {error && (
            <div className="mt-5 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400">
              {error}
            </div>
          )}

          {authMode === "account" && user ? (
            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-4 border border-border bg-background p-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
                  <UserRound className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-black uppercase tracking-[0.12em]">
                    {user.name}
                  </p>
                  <p className="truncate text-sm text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border-border"
                onClick={() => {
                  logout();
                }}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : authMode === "register" ? (
            <form onSubmit={handleRegister} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Full name</Label>
                <Input
                  id="register-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="At least 6 characters"
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-confirm">Confirm password</Label>
                <Input
                  id="register-confirm"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-fire font-black uppercase tracking-[0.18em] text-primary-foreground"
              >
                <Flame className="h-4 w-4" />
                {loading ? "Creating account..." : "Register"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <button
                  type="button"
                  className="font-black uppercase tracking-[0.12em] text-primary"
                  onClick={() => switchMode("login")}
                >
                  Login
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-fire font-black uppercase tracking-[0.18em] text-primary-foreground"
              >
                <Flame className="h-4 w-4" />
                {loading ? "Logging in..." : "Login"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                New here?{" "}
                <button
                  type="button"
                  className="font-black uppercase tracking-[0.12em] text-primary"
                  onClick={() => switchMode("register")}
                >
                  Create account
                </button>
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
