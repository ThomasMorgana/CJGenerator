export function copyToClipboard(text: string) {
  if (!text) return
  navigator.clipboard.writeText(text)
}

function toCapitalCamelCase(str) {
  return str.replace(/(?:^|\s|[^a-zA-Z0-9])(\w)/g, (_, c) => c.toUpperCase());
}

export function downloadFile(text: string, fileName: string) {
  if (!fileName) {
    alert('You need to name your Custom Job')
    return
  }

  const blob = new Blob([text], { type: 'text/yaml' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `${toCapitalCamelCase(fileName)}.yml`
  link.click()

  URL.revokeObjectURL(url)
}
