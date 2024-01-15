import { ResponsiveImage } from "@/components";

export const Hero = () => {
  return (
    <section className={`flex flex-col justify-center items-center m-10`}>
      <h1 className="text-4xl font-bold pb-5">Kevin Barreto</h1>
      <p className="pb-5 text-xl">Web Developer at Softtek</p>
      <ResponsiveImage
        alt="profile pic"
        desktopHeight={400}
        desktopWidth={400}
        mobileHeight={250}
        mobileWidth={250}
        src={"/me.jpg"}
        className="rounded-full mb-32"
      />
      <div>
        <ResponsiveImage
          alt="work setup"
          desktopHeight={800}
          desktopWidth={800}
          mobileHeight={400}
          mobileWidth={400}
          src={"/work-setup.svg"}
        />
      </div>
    </section>
  );
};
