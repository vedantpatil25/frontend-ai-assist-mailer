import EmailForm from "../components/EmailForm"
import ResultBox from "../components/ResultBox"
import { useEmailGenerator } from "../hooks/useEmailGenerator"

export default function HomePage() {

  const { generate, result, loading } = useEmailGenerator()

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-2xl font-bold mb-6">
        AI Email Assistant
      </h1>

      <EmailForm
        onGenerate={generate}
        loading={loading}
      />

      <ResultBox result={result} />

    </div>
  )
}