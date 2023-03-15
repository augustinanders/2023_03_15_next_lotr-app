import Link from "next/link.js";
import { Fragment } from "react";
import { volumes } from "../../lib/data.js";

export default function Volume1Page() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log("volumes", volumes);
  console.log("books", { volume });
  return (
    <>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => {
          return (
            <Fragment key={index}>
              <li>{book.ordinal}</li>
              <li>{book.title}</li>
            </Fragment>
          );
        })}
      </ul>

      <Link href="/volumes">All Volumes</Link>
    </>
  );
}
