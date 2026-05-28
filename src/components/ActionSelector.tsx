interface Props {
  value: string
  onChange: (value: string) => void
}

const actions = [
  { value: "reply", label: "Generate Reply" },
  { value: "summarize", label: "Summarize Email" },
  { value: "rewrite", label: "Rewrite Better" },
  { value: "grammar", label: "Fix Grammar" },
]

export default function ActionSelector({ value, onChange }: Props) {
  return (
    <select
      className={
        "w-full border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 " +
        "rounded-2xl p-3 text-sm text-slate-800 dark:text-slate-100 " +
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " +
        "focus:bg-white dark:focus:bg-slate-600 transition-all duration-200 cursor-pointer appearance-none"
      }
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {actions.map((a) => (
        <option key={a.value} value={a.value} className="dark:bg-slate-700">
          {a.label}
        </option>
      ))}
    </select>
  )
}
