/** @jsx h */
import html, { h } from "https://deno.land/x/htm@0.1.4/mod.ts";
import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import UnoCSS from "https://deno.land/x/htm@0.1.4/plugins/unocss.ts";
import ColorScheme from "https://deno.land/x/htm@0.1.4/plugins/color-scheme.ts";
import { generate } from "./docs.tsx";

html.use(UnoCSS());
html.use(ColorScheme("dark"));

console.log("Generating docs...");
const filterQueries = generate();
console.log("Generated docs successfully");

function slug(str: string) {
  return str.replace(":", "-").replace("_", "-");
}

const list = filterQueries.map(({ query, doc }) => {
  return (
    <details class="py-1 my-2">
      <summary class="mb-2">
        <a href={`#${slug(query)}`}></a>
        <h3
          class="font-mono"
          style="display: inline-block"
          id={`${slug(query)}`}
        >
          {query}
        </h3>
      </summary>
      <div class="b-l mx-2 p-4 my-2">{doc}</div>
    </details>
  );
});

serve(() => {
  return html({
    lang: "en",
    title: "Filter Query Browser",
    meta: {
      description:
        "Browse all filter queries of the grammY Telegram bot framework",
    },
    links: [
      { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
    ],
    styles: [`
      body { font-family: "Inter", sans-serif; }
      .link { color: #3ca5c2; }
      .link:hover { text-decoration: underline }
      input:focus { outline: none }
      summary {  display: block }
      summary::after { /* thanks to the guys at stackoverflow */
        margin-left: 1ch;
        display: inline-block;
        transition: 0.2s;
        content: '\\203A'; /* chevron */
      }
      details[open] summary::after {
        transform: rotate(90deg);
      }
    `],
    scripts: [
      `
      window.onload = function () {
        var searchBox = document.getElementById("query");
        searchBox.addEventListener("keyup", function (event) {
          searchBox.value = "oeo"
          event.target.value = event.target.value.toLowerCase();
        }
      }`,
    ],
    body: (
      <div class="m-8 max-w-screen-sm h-full">
        <h1 class="text-4xl bold font-mono py-5">:filter:querY</h1>
        <p class="py-4">
          Want to see all of the filter queries? See what they filters out? This
          page lists all of them! Click on a query to see the description. Read
          the{" "}
          <a class="link" href="https://grammy.dev/guide/filter-queries">
            filter query official documentation
          </a>{" "}
          to find more about them.
        </p>
        <input
          type="text"
          autocomplete="off"
          id="query"
          placeholder={`Search among ${filterQueries.length} filter queries...`}
          class="py-3 w-full b-b-1 bg-inherit"
        />
        <div class="py-4">{list}</div>
        <div class="flex flex-col items-center justify-center">
          <a
            class="text-grey-200 dark:text-grey-800"
            href="https://github.com/dcdunkan/filter-queries"
          >
            <svg
              className="inline-block w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2C5.58161 2 2 5.67194 2 10.2029C2 13.8265 4.292 16.9015 7.4712 17.9857C7.8712 18.0611 8.01681 17.808 8.01681 17.5902C8.01681 17.3961 8.01042 16.8794 8.00641 16.1956C5.7808 16.6911 5.3112 15.0959 5.3112 15.0959C4.948 14.1476 4.4232 13.8954 4.4232 13.8954C3.69681 13.3876 4.47841 13.3975 4.47841 13.3975C5.28081 13.4548 5.70322 14.2426 5.70322 14.2426C6.41683 15.4955 7.57603 15.1335 8.03122 14.9239C8.10481 14.3941 8.31122 14.033 8.54002 13.8282C6.76402 13.621 4.896 12.9168 4.896 9.77384C4.896 8.87877 5.208 8.14588 5.7192 7.57263C5.6368 7.36544 5.36241 6.531 5.79759 5.40254C5.79759 5.40254 6.46959 5.18143 7.99759 6.24272C8.59777 6.06848 9.28719 5.96782 9.99941 5.96674C10.6794 5.97002 11.364 6.06092 12.0032 6.24272C13.5304 5.18143 14.2008 5.40171 14.2008 5.40171C14.6376 6.53097 14.3624 7.36543 14.2808 7.5726C14.7928 8.14583 15.1032 8.87874 15.1032 9.7738C15.1032 12.9249 13.232 13.6185 11.4504 13.8216C11.7376 14.0747 11.9928 14.575 11.9928 15.3407C11.9928 16.4364 11.9832 17.3216 11.9832 17.5902C11.9832 17.8097 12.1272 18.0652 12.5336 17.9849C15.7378 16.8608 18 13.8039 18 10.2062C18 10.2051 18 10.2039 18 10.2027C18 5.67175 14.4176 2 10 2Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    ),
  });
});
