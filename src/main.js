/**
 * core function
 * @param { String } target The text to copy
 */
function copywordJS (target) {
  if (!target) {
    throw new Error('Please pass in the text you want to copy！')
  }
  var fakeElem = createFake(target)
  var issuccess = copyText(fakeElem)
  removeFake(fakeElem)
  return issuccess
}

/**
 * create textArea dynamically
 * @param { String } target The text to copy
*/
function createFake (target) {
  var isRTL = document.documentElement.getAttribute('dir') == 'rtl'
  var fakeElem = document.createElement('textarea')
   // Prevent zooming on iOS
  fakeElem.style.fontSize = '12pt'
  // Reset box model
  fakeElem.style.border = '0'
  fakeElem.style.padding = '0'
  fakeElem.style.margin = '0'
  // Move element out of screen horizontally
  fakeElem.style.position = 'absolute'
  fakeElem.style[ isRTL ? 'right' : 'left' ] = '-9999px'
  // Move element to the same position vertically
  var yPosition = window.pageYOffset || document.documentElement.scrollTop
  fakeElem.style.top = yPosition + 'px'
  fakeElem.setAttribute('readonly', '')
  fakeElem.value = target
  document.body.appendChild(fakeElem)
  return fakeElem
}

/**
 * Perform a copy operation
 * @param { DOM } fakeElem
 */
function copyText (fakeElem) {
  fakeElem.select()
  fakeElem.setSelectionRange(0, fakeElem.value.length)
  var successed
  try {
    successed = document.execCommand('copy', true)
  } catch {
    successed = false
  }
  // Empty the selection
  window.getSelection().removeAllRanges()
  return successed
}

/**
 * Only removes the fake element after another copy
 * @param { DOM } fakeElem
 */
function removeFake (fakeElem) {
  document.body.removeChild(fakeElem)
  fakeElem = null
}

export default copywordJS
