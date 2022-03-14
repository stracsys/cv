window.onload = function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
    document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");

  const theme = document.querySelectorAll(".theme");
  for (let i = 0; i < theme.length; i++)
    theme[i].addEventListener("click", (event) => toggleTheme());

  const toggleTheme = () => {
    if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };
};
