import Link from "next/link";

interface IInput {
  input: string;
  href: string;
  isSelfCentered?: boolean;
  isBlank?: boolean;
}

export default function ButtonLink({ input, href, isSelfCentered, isBlank }: IInput) {
  return (
    <Link className={`${isSelfCentered ? "self-center" : "self-start"}`} href={href} target={isBlank ? "_blank" : "_self"} rel="noopener noreferrer">
      <button className="button m-0 select-none">{input}</button>
    </Link>
  );
}
