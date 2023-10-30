const navLinks = document.getElementsByClassName("nav-link");

let navKeys = Object.keys(navLinks);

navKeys.forEach((navKey) => {
  //console.log(navLinks[navKey]);
  navLinks[navKey].addEventListener("click",(e)=>{
    navLinks[0].classList.remove("rounded", "bg-zinc-950", "text-neutral-100");
    navLinks[1].classList.remove("rounded", "bg-zinc-950", "text-neutral-100");
    navLinks[2].classList.remove("rounded", "bg-zinc-950", "text-neutral-100");
    navLinks[3].classList.remove("rounded", "bg-zinc-950", "text-neutral-100");
    e.target.classList.add("rounded", "bg-zinc-950", "text-neutral-100");
  });
});