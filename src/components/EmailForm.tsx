import { useState } from "react"
import ActionSelector from "./ActionSelector"
import type { EmailRequest } from "../types/email"

interface Props {
  onGenerate: (data: EmailRequest) => void
  loading: boolean
}

export default function EmailForm({ onGenerate, loading }: Props) {
  const [emailContent, setEmailContent] = useState("")
  const [userRecommendation, setUserRecommendation] = useState("")
  const [tone, setTone] = useState("professional")
  const [action, setAction] = useState("reply")

  const handleSubmit = () => {
    onGenerate({ emailContent, userRecommendation, tone, action })
  }

  const showTone = action === "reply" || action === "rewrite"
  const showRecommendation = action === "reply"

  const inputBase =
    "w-full border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 " +
    "rounded-2xl p-3 text-sm text-slate-800 dark:text-slate-100 " +
    "placeholder-slate-400 dark:placeholder-slate-500 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " +
    "focus:bg-white dark:focus:bg-slate-600 transition-all duration-200 resize-none"

  return (
    <div className="space-y-4">

      <div>
        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
          Email Content
        </label>
        <textarea
          className={inputBase}
          rows={6}
          placeholder="Paste the email you want to work with..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
          Action
        </label>
        <ActionSelector value={action} onChange={setAction} />
      </div>

      {showRecommendation && (
        <div className="animate-fade-in">
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
            Your Instructions
          </label>
          <textarea
            className={inputBase}
            rows={3}
            placeholder="e.g. Decline politely, ask for a reschedule..."
            value={userRecommendation}
            onChange={(e) => setUserRecommendation(e.target.value)}
          />
        </div>
      )}

      {showTone && (
        <div className="animate-fade-in">
          <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
            Tone
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["professional", "friendly", "formal", "casual"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTone(t)}
                className={
                  "py-2 px-3 rounded-xl text-xs font-medium border transition-all duration-150 capitalize " +
                  (tone === t
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200 dark:shadow-blue-900"
                    : "bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-blue-300 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400")
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading || !emailContent.trim()}
        className={
          "w-full py-3 px-4 rounded-2xl text-sm font-semibold transition-all duration-200 " +
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 " +
          (loading || !emailContent.trim()
            ? "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-100 dark:shadow-blue-900 hover:shadow-blue-200")
        }
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Generating...
          </span>
        ) : (
          "Generate"
        )}
      </button>
    </div>
  )
}
