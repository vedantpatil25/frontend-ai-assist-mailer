import { useState } from "react"
import ActionSelector from "./ActionSelector"

interface Props {
  onGenerate: (data: any) => void
  loading: boolean
}

export default function EmailForm({ onGenerate, loading }: Props) {

  const [emailContent, setEmailContent] = useState("")
  const [userRecommendation, setUserRecommendation] = useState("")
  const [tone, setTone] = useState("professional")
  const [action, setAction] = useState("reply")

  const handleSubmit = () => {
    onGenerate({
      emailContent,
      userRecommendation,
      tone,
      action
    })
  }

  return (
    <div className="space-y-4">

      <textarea
        className="w-full border p-3 rounded"
        rows={6}
        placeholder="Paste email content..."
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
      />

      <textarea
        className="w-full border p-3 rounded"
        rows={3}
        placeholder="User recommendation..."
        value={userRecommendation}
        onChange={(e) => setUserRecommendation(e.target.value)}
      />

      <select
        className="border p-2 rounded w-full"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option value="professional">Professional</option>
        <option value="friendly">Friendly</option>
        <option value="formal">Formal</option>
        <option value="casual">Casual</option>
      </select>

      <ActionSelector
        value={action}
        onChange={setAction}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

    </div>
  )
}