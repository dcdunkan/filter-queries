import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { generate } from "./docs.ts";
import fqList, { GRAMMY_VERSION } from "./mod.ts";

console.log("Generating docs...");
const filterQueries = generate();
console.log("Docs have been generated");

function slug(str: string) {
  return str.replace(":", "-").replace("_", "-");
}

const list = `<li>${
  filterQueries.map(({ filterQuery: fq, info }) => `
  <a href="#${slug(fq)}" class="anchor">#</a></span>
  <h3 style="display: inline-block" class="acc" id="${slug(fq)}">${fq}</h3>
  <div class="info">${info}</div>
  <hr>
`).join("</li>\n<li>")
}</li>`;

serve(() => {
  const queries = fqList.sort(() => 0.5 - Math.random()).slice(0, 30);
  const content = `
<html>
<head>
  <title>Filter Queries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
#query {
  width: 100%;
}

pre {
  background: lightgrey;
  padding: 10px;
  border-radius: 5px;
}

code {
  background: lightgrey;
  padding: 2px;
  border-radius: 2px;
}

.anchor {
  color: grey;
  text-decoration: underline;
}

li {
  margin: 0;
  padding: 0;
}

#list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.acc {
  color: black;
}

.active, .acc:hover {
  color: #009dca;
}

.info {
  display: none;
  overflow: hidden;
  padding-bottom: 15px;
}

#title {
  color: #009dca;
  font-family: monospace;
  width: 100%;
}

h2, h3 {
  font-family: monospace;
}

p a {
  color: #009dca;
  text-decoration: none;
}

</style>
</head>
<body style="padding: 10px">
  <h1><span id="title">filter::queries</span></h1>
  <h2>grammY version: ${GRAMMY_VERSION}</h2>
  <p>
    Ever wondered where you can find a full list of valid filter queries?
    This page lists all of them! This is an auto-generated list of filter queries available in grammY.
    For more information on filter queries, <a href="https://grammy.dev/guide/filter-queries.html">see official documentation on it.</a>
    You can find the source code of this site <a href="https://github.com/dcdunkan/filter-queries">here</a>. 
  </p>
  <input type="text" autocomplete="off" id="query" onkeyup="search()" placeholder="Search for queries...">
  <ul id="list">${list}</ul>
  <script>
  
  const fqList = ${JSON.stringify(queries)};
  let index = 0, cursor = 0;
  const title = document.getElementById("title");

  window.onload = function () {
    setTimeout(() => {
      title.style.backgroundColor = "skyblue";
      setTimeout(() => {
        title.innerText = "";
        title.style.backgroundColor = "";
        type();
      }, 500);
    }, 3000);
  }

  function search() {
    const query = document.getElementById("query").value.toLowerCase();
    const items = document.getElementsByTagName("h3");
    for (const item of items) {
      const text = item.textContent || item.innerText;
      if (text.toLowerCase().indexOf(query) > -1) {
        item.parentElement.style.display = "";
      } else {
        item.parentElement.style.display = "none";
      }
    }
  }

  const accs = document.getElementsByClassName("acc");
  for (const acc of accs) {
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      const info = this.nextElementSibling;
      info.style.display = info.style.display === "block" ? "none" : "block";
    })
  }

  function type() {
    const text = fqList[index];
    if (cursor < text.length) {
      title.innerText += text[cursor++];
      setTimeout(type, 75);
    } else if (cursor === text.length) {
      setTimeout(() => {
        title.style.backgroundColor = "skyblue";
        setTimeout(() => {
          title.innerText = "";
          index = (index + 1) >= fqList.length ? 0 : index + 1;
          cursor = 0;
          title.style.backgroundColor = "";
          type();
        }, 500);
      }, 2000);
    }
  }

  </script>
</body>
</html>`;

  return new Response(content, { headers: { "Content-Type": "text/html" } });
});
