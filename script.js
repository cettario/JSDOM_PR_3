const menu = document.getElementById('menu');
const message = document.getElementById('message');
const selectedLink = document.getElementById('selectedLink');

function closeChildren(list) {
  list.querySelectorAll('ul').forEach(child => {
    child.hidden = true;
  });

  list.querySelectorAll('button[aria-expanded]').forEach(button => {
    button.setAttribute('aria-expanded', 'false');
  });
}

menu.addEventListener('click', event => {
  const button = event.target.closest('button');

  if (!button || !menu.contains(button)) {
    return;
  }

  const childList = button.nextElementSibling;

  if (childList && childList.tagName === 'UL') {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    childList.hidden = isOpen;

    if (isOpen) {
      closeChildren(childList);
    }

    return;
  }

  selectedLink.href = button.dataset.url;
  selectedLink.textContent = button.textContent;
  message.hidden = false;
});
