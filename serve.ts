import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { generate } from "./docs.ts";
import { GRAMMY_VERSION } from "./mod.ts";

const filterQueries = generate();

const list = `<li>${
  filterQueries.map((fq) => `
  <a href="#${
    fq.filterQuery.replace(":", "-")
  }" style="text-decoration: none; color: black">#</a></span>
  <h3 style="display: inline-block" class="acc" id="${
    fq.filterQuery.replace(":", "-")
  }">${fq.filterQuery}</h3>
  <div class="info">${fq.info}</div>
`).join("</li>\n<li>")
}</li>`;

serve(() => {
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
  background: dimgrey;
  color: white;
  padding: 10px;
}

code {
  background: dimgrey;
  color: white;
  padding: 2px;
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
}

.y {
  color: #009dca;
}
</style>
</head>
<body style="padding: 10px">
  <h1 id="title" class="y">Filter Queries (Y@${GRAMMY_VERSION})</h1>
  <a href="https://github.com/dcdunkan/filter-queries">source</a>
  <br>
  <p>
    Ever wondered where you can find a full list of valid filter queries?
    This page lists all of them; this is an auto-generated list of filter queries available in grammY.
    For more information on filter queries, <a href="https://grammy.dev/guide/filter-queries.html">see official documentation on it.</a>
  </p>
  <input type="text" autocomplete="off" id="query" onkeyup="search()" placeholder="Search for queries...">
  <ul id="list">${list}</ul>
  <script>
  function search() {
    const query = document.getElementById("query").value.toLowerCase();
    const items = document.getElementById("list").children;
    for (const item of items) {
      const text = item.textContent || item.innerText;
      if (text.toLowerCase().indexOf(query) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  }

  const accs = document.getElementsByClassName("acc");
  for (const acc of accs) {
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      const info = this.nextElementSibling;
      info.style.display = info.style.display === "block" ? "none" : "block";    })
  }
  </script>
</body>
</html>`;

  return new Response(content, { headers: { "Content-Type": "text/html" } });
});
