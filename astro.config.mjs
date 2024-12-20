import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Code Mastery",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/xxehacker",
      },
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Javascript",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introduction Of JS and Variables",
              slug: "javascript/lecture1",
            },
            {
              label: "Data Types",
              slug: "javascript/lecture2",
            },
            {
              label: "Operators",
              slug: "javascript/lecture3",
            },
            {
              label: "Conditional Statements",
              slug: "javascript/lecture4",
            },
            {
              label: "Function and User Input",
              slug: "javascript/lecture5",
            },
            {
              label: "String and String Methods",
              slug: "javascript/lecture6",
            },
            {
              label: "Number and Number Methods",
              slug: "javascript/lecture7",
            },
            {
              label: "Array and Array Methods",
              slug: "javascript/lecture8",
            },
            {
              label: "Different Types of Loops",
              slug: "javascript/lecture9",
            },
            {
              label: "More about Map , Filter and Reduce",
              slug: "javascript/lecture10",
            },
            {
              label: "Object and Its Method",
              slug: "javascript/lecture11",
            },
            {
              label: "Advance Function",
              slug: "javascript/lecture12",
            },
            {
              label: "Date and Math Object in JavaScript",
              slug: "javascript/lecture13",
            },
            {
              label: "JSON",
              slug: "javascript/lecture14",
            },
            {
              label: "Oops and Clases",
              slug: "javascript/lecture15",
            },
            {
              label: "Data Fetching and Async/Await in JS",
              slug: "javascript/lecture16",
            }
          ],
        },
        {
          label: "30 Days of Python",
          items: [
            {
              label: "Day 1 - Introduction Of Python",
              slug: "python/lecture1",
            },
            {
              label: "Day 2 - Data Types and Type Casting",
              slug: "python/lecture2",
            },
            {
              label: "Day 3 - Operators",
              slug: "python/lecture3",
            },
          ],
        },
        {
          label: "Java",
          items: [
            {
              label: "Introduction of Java and its importance",
              slug: "java/lecture1",
            },
            {
              label: "Variables and Data Types in Java",
              slug: "java/lecture2",
            },
            {
              label: "Operators in Java",
              slug: "java/lecture3",
            },
          ],
        },
        {
          label: "Who am I",
          items: [
            {
              label: "Who am I",
              slug: "reference/who",
            },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
