import Link from "next/link";
import { useRouter } from "next/router";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";

export default function Volumes() {
  const router = useRouter();

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}

        {/*         <li>
          <Link href={`/volumes/${volumes[1].slug}`}>Volume1</Link>
        </li>
        <li>
          <Link href={`/volumes/${volumes[2].slug}`}>Volume2</Link>
        </li>
        <li>
          <Link href="/volumes/volume3">Volume3</Link>
        </li> */}
      </ul>
    </>
  );
}
