interface Props {
  value: string
  onChange: (value: string) => void
}

export default function ActionSelector({ value, onChange }: Props) {
  return (
    <select
      className="w-full border rounded p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="reply">Generate Reply</option>
      <option value="summarize">Summarize Email</option>
      <option value="rewrite">Rewrite Better</option>
      <option value="grammar">Fix Grammar</option>
    </select>
  )
}