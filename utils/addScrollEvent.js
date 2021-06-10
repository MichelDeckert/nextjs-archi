function isClose(element) {
  const windowScrollY = window.scrollY;
  const clientHeight = document.scrollingElement.clientHeight;

  return windowScrollY + clientHeight - element.offsetTop >= clientHeight * 0.3;
}

function showElement(element, delay) {
  return () => {
    console.log('scroll event');
    setTimeout(() => {
      element.style.transform = 'translate(0, 0)';
      element.style.opacity = 1;
    }, delay);
  };
}

export function addScrollEvent(element, delay) {
  const cb = showElement(element, delay);
  if (isClose(element)) {
    cb(element, delay || 500);
    document.removeEventListener('scroll', cb);
  } else {
    document.addEventListener('scroll', cb);
  }
}
