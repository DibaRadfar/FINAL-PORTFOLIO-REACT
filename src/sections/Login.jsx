import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center relative overflow-hidden">
      <div className="flex w-full h-screen">
        <div className="w-full flex flex-col items-center justify-center lg:w-1/2 px-6 relative z-10">
          <div className="w-full max-w-md mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl px-8 py-10 rounded-3xl border border-pink-500/20 shadow-2xl shadow-pink-500/10 w-full max-w-md">
            <h1 className="text-4xl font-bold bg-linear-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="font-medium text-sm text-slate-400 mt-2">
              Welcome back! Please enter your details.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-slate-300 block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-slate-700 focus:border-pink-500 rounded-xl p-3.5 bg-slate-800/50 text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all placeholder:text-slate-500"
                  placeholder="Enter your Username"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300 block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-700 focus:border-pink-500 rounded-xl p-3.5 bg-slate-800/50 text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all placeholder:text-slate-500"
                  placeholder="Enter your Password"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-slate-700 text-pink-500 focus:ring-pink-500/30 accent-pink-500 cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-slate-400 cursor-pointer select-none"
                  >
                    Remember for 30 days
                  </label>
                </div>
                <button
                  type="button"
                  className="font-medium text-pink-400 hover:text-pink-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <div className="pt-2 flex flex-col gap-y-3">
                <button
                  type="submit"
                  className="bg-linear-to-r from-pink-500 to-rose-500 text-white text-base font-semibold py-3.5 rounded-xl shadow-lg shadow-pink-500/25 active:scale-[.98] hover:opacity-95 transition-all cursor-pointer"
                >
                  Sign in
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-3 border border-slate-700 bg-slate-800/40 text-slate-200 text-base font-medium py-3.5 rounded-xl hover:bg-slate-800 hover:border-slate-600 active:scale-[.98] transition-all cursor-pointer"
                >
                  <FcGoogle className="text-xl" />
                  Sign in with Google
                </button>
              </div>

              <div className="pt-4 flex justify-center items-center text-sm">
                <p className="text-slate-400">Don't have an account?</p>
                <button
                  type="button"
                  className="text-pink-400 hover:text-pink-300 font-medium ml-2 transition-colors cursor-pointer"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden relative lg:flex items-center justify-center w-1/2 bg-slate-900 border-l border-slate-800/80">
          <div className="absolute w-72 h-72 bg-linear-to-tr from-pink-500 to-rose-500 rounded-full animate-bounce blur-sm opacity-80 shadow-2xl shadow-pink-500/50" />
          <div className="w-full h-1/2 absolute bottom-0 bg-slate-950/40 backdrop-blur-md border-t border-slate-800/50" />
        </div>
      </div>
    </div>
  );
}

export default Login;
