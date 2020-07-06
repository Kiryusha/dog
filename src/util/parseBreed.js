export default function (url) {
  if (url.match(/\/breeds\/([^/]+)/)) {
    return url.match(/\/breeds\/([^/]+)/)[1].split('-')[0]
  }

  return ''
}
