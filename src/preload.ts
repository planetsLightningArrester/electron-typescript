window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    const version = process.versions[type];
    if (version) replaceText(`${type}-version`, version)
  }

  // Replace URLs
  Array.from(document.getElementsByTagName('img')).forEach(i => i.src = i.src.replace(/^file:\/\/\/\w:\//i, './'))

})
