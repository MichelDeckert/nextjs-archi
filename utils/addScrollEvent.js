function isClose(element) {
  const windowScrollY = window.scrollY;
  const clientHeight = document.scrollingElement.clientHeight;

  return windowScrollY + clientHeight - element.offsetTop >= clientHeight * 0.3;
}

function showElement(element, delay = 0) {
  setTimeout(() => {
    element.classList.remove('hidden');
    window.removeEventListener('scroll', () => showElement(element));
  }, delay);
}

export function addScrollEvent(element) {
  if (isClose(element)) {
    element.className.includes('hero')
      ? showElement(element, 10250)
      : showElement(element, 10500);
  } else {
    window.addEventListener('scroll', () => showElement(element));
  }
}
