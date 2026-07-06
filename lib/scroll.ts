export function scrollToId(id: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function scrollToTop() {
  if (typeof window === "undefined") {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
