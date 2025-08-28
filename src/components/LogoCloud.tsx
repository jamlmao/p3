import { Logo03, Logo04, Logo05, Logo07 } from "@/components/logo";

const logos = [Logo03, Logo04, Logo05, Logo07];

const LogoCloud = () => {
  return (
    <section className="h-[80vh] sm:h-auto md:h-[80vh]">
      <div className="min-h-screen flex flex-col">
        {/* Hide blue background on small screens */}
        <div className="hidden sm:block grow shrink-0 bg-blue-800 basis-1/2"></div>
        <div className="relative grow">
          <div className="sm:absolute sm:-translate-y-1/2 top-0 inset-x-0 mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col lg:flex-row lg:items-center justify-between gap-10 rounded-lg bg-background sm:shadow-lg dark:shadow-foreground/10 py-14 px-10">
            <div className="shrink-0 sm:items-center">
              <h3 className="text-4xl font-bold tracking-tight">Trusted by</h3>
              <p className="mt-6 sm:mt-12 text-lg max-w-xl lg:max-w-md xl:max-w-xl">
                From small businesses to large enterprises, we empower success with cutting-edge technology and unmatched reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:justify-end gap-6 lg:gap-10 [&>*]:h-8 sm:[&>*]:h-10 md:[&>*]:h-8 lg:[&>*]:h-10">
              {logos.map((Logo, index) => (
                <Logo key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;