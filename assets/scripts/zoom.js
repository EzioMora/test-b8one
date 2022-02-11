const initZoom = (id) => {
  const container = document.getElementById(id);
  const img = container.querySelector("img");

  container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.5)";
    img.style.cursor = "zoom-in";
  });

  container.addEventListener("mouseleave", (e) => {
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)";
    img.style.cursor = "initial";
  });
};

export default initZoom;
