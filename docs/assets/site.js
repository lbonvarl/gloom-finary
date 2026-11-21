const announcement = document.getElementById("copy-announcement");

for (const button of document.querySelectorAll("button[data-copy]")) {
  if (!navigator.clipboard?.writeText) {
    button.hidden = true;
    continue;
  }
  const label = button.textContent;
  let reset;
  button.addEventListener("click", async () => {
    const command = document.getElementById(button.dataset.copy);
    try {
      await navigator.clipboard.writeText(command.textContent);
      button.textContent = button.dataset.copied;
      announcement.textContent = button.dataset.copied;
      clearTimeout(reset);
      reset = setTimeout(() => { button.textContent = label; }, 1600);
    } catch {
      announcement.textContent = button.dataset.failed;
    }
  });
}
