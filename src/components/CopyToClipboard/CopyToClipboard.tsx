import "./CopyToClipboard.css"

interface Types {
  textToCopy: string
}

export const CopyToClipboard = ({ textToCopy }: Types) => {

  function copyToClipboard(textToCopy: string) {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <div className="copy-to-clipboard">
      <button onClick={() => copyToClipboard(textToCopy)}>Copy</button>
      <p>{textToCopy}</p>
    </div>
  )
}