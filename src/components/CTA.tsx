import { ArrowUpRight, Forward } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";

const CTABanner = () => {
  return (
        <div className="px-6">
            <div className="dark:border relative overflow-hidden my-20 w-full bg-background text-foreground max-w-screen-lg mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14 border border-foreground/10 shadow-lg">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(20, 23, 218, 0.6),transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                    )}
                />
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(20, 23, 218, 0.6),transparent)]",
                        "inset-x-0 inset-y-0 h-[200%] skew-y-12"
                    )}
                />
                    <div className="relative z-0 flex flex-col gap-3">
                    <h3 className="text-3xl md:text-4xl font-semibold text-blue-800">
                        Discover Seamless POS Solutions
                    </h3>
                    <p className="mt-2 text-base md:text-lg">
                        Empower your business with trusted POS solutions tailored to meet
                        the needs of small, medium, and large enterprises. Backed by
                        24/7 support, our services ensure smooth operations and hassle-free
                        management.
                    </p>
                </div>

                <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4">

                    <Button size="lg" className="bg-blue-800 hover:bg-blue-700">
                        Get Started <ArrowUpRight className="!h-5 !w-5" />
                    </Button>

                    <Button size="lg" variant="outline">
                        Discover Features <Forward className="!h-5 !w-5" />
                    </Button>

                </div>
            </div>
        </div>
  );
}

export default CTABanner