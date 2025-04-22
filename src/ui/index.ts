export function renderAccessibilityWidget(): void {
  const widget = document.createElement("div");
  widget.textContent = "IncluLib Widget";
  widget.style.position = "fixed";
  widget.style.bottom = "10px";
  widget.style.right = "10px";
  widget.style.background = "#000";
  widget.style.color = "#fff";
  widget.style.padding = "1rem";
  widget.style.zIndex = "9999";

  document.body.appendChild(widget);
}
