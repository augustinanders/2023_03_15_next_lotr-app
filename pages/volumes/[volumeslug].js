import Link from "next/link.js";
import { Fragment } from "react";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { volumeslug } = router.query;

  console.log("router", router);

  const volume = volumes.find(({ slug }) => slug === volumeslug);
  const currentIndex = volumes.indexOf(volume);

  console.log("index", volumes.length);
  if (volume) {
    return (
      <>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
        <Image src={volume.cover} alt={volume.title} width={140} height={230} />
        <ul>
          {volume.books.map((book) => {
            return (
              <Fragment key={book.title}>
                <li>{book.ordinal}</li>
                <li>{book.title}</li>
              </Fragment>
            );
          })}
        </ul>

        <Link href="/volumes">
          <button>All Volumes</button>
        </Link>
        <Link
          href={
            currentIndex > 0
              ? `/volumes/${volumes[currentIndex - 1].slug}`
              : `/volumes/${volumes[currentIndex].slug}`
          }
        >
          <button>←</button>
        </Link>
        <Link
          href={
            currentIndex < volumes.length - 1
              ? `/volumes/${volumes[currentIndex + 1].slug}`
              : `/volumes/${volumes[currentIndex].slug}`
          }
        >
          <button>→</button>
        </Link>
      </>
    );
  }
}
//wie kann ich hier die buttons am besten disabled setzen?, conditioning im href hier nicht optimal
