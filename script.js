function getUser(){
    fetch("https://randomuser.me/api?results=6")
  .then(raw => raw.json())
  .then(data => {

    data.results.forEach(user => {

      let article = document.createElement("article");

      article.classList.add(
        "rounded-2xl",
        "bg-slate-900",
        "p-6",
        "text-center",
        "shadow-sm",
        "ring-1",
        "ring-slate-800",
        "transition",
        "hover:-translate-y-1",
        "hover:shadow-lg"
      );

      let img = document.createElement("img");

      img.classList.add(
        "mx-auto",
        "h-24",
        "w-24",
        "rounded-full",
        "object-cover",
        "ring-4",
        "ring-indigo-950"
      );

      img.setAttribute("src", user.picture.large);

      img.setAttribute(
        "alt",
        `${user.name.first} ${user.name.last}`
      );

      let h2 = document.createElement("h2");

      h2.classList.add(
        "mt-5",
        "text-xl",
        "font-bold"
      );

      h2.textContent =
        `${user.name.first} ${user.name.last}`;

      let p1 = document.createElement("p");

      p1.classList.add(
        "mt-1",
        "font-medium",
        "text-indigo-400"
      );

      p1.textContent = user.email;

      let p2 = document.createElement("p");

      p2.classList.add(
        "mt-4",
        "text-sm",
        "leading-6",
        "text-slate-400"
      );

      p2.textContent =
        "Builds fast, accessible systems that scale with the team.";

      let a = document.createElement("a");

      a.classList.add(
        "mt-5",
        "inline-block",
        "text-sm",
        "font-semibold",
        "text-slate-300",
        "hover:text-indigo-400"
      );

      a.setAttribute(
        "href",
        `mailto:${user.email}`
      );

      a.textContent = `Email ${user.name.first}`;

      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(a);

      document
        .querySelector("section")
        .appendChild(article);
    });
  });

}

getUser();
  let button=document.querySelector("#refreshButton");
  button.addEventListener("click",function(){
    getUser();
  })