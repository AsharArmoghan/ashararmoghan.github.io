import Image from "next/image";
import authorImage from "@/public/images/authors/ashar.png";
export default function Intro() {
  return (
    <section className="flex flex-row-reverse gap-5 pb-2">
      <div className="h-100 w-100 m-4 mt-5 flex-1 md:mt-0">
        <h1 className="">Hey, I&#39;m Ashar.</h1>
        <p className="mt-3 text-wrap font-light text-muted-foreground">
          I&#39;m a software engineer based in Delhi, India. I&#39;m passionate
          about learning new technologies and sharing knowledge with others.
        </p>
      </div>
      <div className="">
        <Image
          className="flex-1 rounded-lg grayscale"
          src={authorImage}
          alt="Ashar Armoghan"
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  );
}
