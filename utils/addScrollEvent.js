function isClose(element) {
  const windowScrollY = window.scrollY;
  const clientHeight = document.scrollingElement.clientHeight;

  return windowScrollY + clientHeight - element.offsetTop >= clientHeight * 0.3;
}

function showElement(element, delay) {
  setTimeout(() => {
    element.style.transform = 'translate(0, 0)';
    element.classList.remove('hidden');
    window.removeEventListener('scroll', () => showElement(element));
  }, delay);
}

export function addScrollEvent(element, delay) {
  if (isClose(element)) {
    showElement(element, delay || 500);
  } else {
    window.addEventListener('scroll', () => showElement(element));
  }
}
