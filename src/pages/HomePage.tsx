import EmailForm from "../components/EmailForm"
import ResultBox from "../components/ResultBox"
import { useEmailGenerator } from "../hooks/useEmailGenerator"
import { useTheme } from "../hooks/useTheme"

export default function HomePage() {
  const { generate, result, loading, error } = useEmailGenerator()
  const { dark, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center relative">

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="absolute right-0 top-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
          >
            {dark ? (
              // Sun icon
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.73 0-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 100 14A7 7 0 0012 5z" />
              </svg>
            ) : (
              // Moon icon
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 mb-4 shadow-lg shadow-blue-200 dark:shadow-blue-900">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            AI Email Assistant
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Compose, rewrite, and refine emails with AI
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-100 dark:shadow-slate-950 border border-slate-100 dark:border-slate-700 p-6 sm:p-8 transition-colors duration-300">
          <EmailForm onGenerate={generate} loading={loading} />

          {error && (
            <div className="mt-5 flex items-start gap-3 bg-red-50 dark:bg-red-950 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-2xl text-sm animate-fade-in">
              <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              {error}
            </div>
          )}

          <ResultBox result={result} />
        </div>

        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
          © 2026 Vedant Patil. All rights reserved.
        </p>
      </div>
    </div>
  )
}
