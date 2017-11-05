// e.g., node ~/Projects/Toys/facebook-desktop-link-generate/index.js https://blabla.com
// cmd = node
// srcFilePath ~/Projects/Toys/facebook-desktop-link-generate/index.js
// url = https://blabla.com
const [cmd, srcFilePath, url] = process.argv

const { pageId, postId } = getInfo(url)
const newLink = genLink(pageId, postId)
console.log('\n—————————————————————————————————————————————————————————————')
console.log(newLink)
console.log('—————————————————————————————————————————————————————————————')

function getInfo(url) {
  const pattern = /([0-9]+)&id=([0-9]+)$/
  const [, postId, pageId] = pattern.exec(url)

  return { pageId, postId }
}

function genLink(pageId, postId) {
  return `https://www.facebook.com/${pageId}/posts/${postId}`
}
