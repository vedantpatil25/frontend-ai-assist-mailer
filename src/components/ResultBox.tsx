import { useState } from "react"

interface Props {
  result: string
}

export default function ResultBox({ result }: Props) {

  const [copied, setCopied] = useState(false)

  if (!result) return null

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {
      console.error("Copy failed", error)
    }
  }

  return (
    <div className="mt-6 border rounded p-4 bg-gray-50">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Generated Result</h3>

        <button
          onClick={handleCopy}
          className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="whitespace-pre-wrap text-sm">
        {result}
      </pre>

    </div>
  )
}