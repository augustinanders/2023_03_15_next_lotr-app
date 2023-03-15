import Link from "next/link";
import { introduction } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/volume1">Volume1</Link>
        </li>
        <li>
          <Link href="/volumes/volume2">Volume2</Link>
        </li>
        <li>
          <Link href="/volumes/volume3">Volume3</Link>
        </li>
      </ul>
    </>
  );
}
