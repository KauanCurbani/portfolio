import gsap from "gsap";
import Blur from "./assets/blur.png";
import Terminal from "./components/terminal";
import Item from "./components/item";
import { FaAws } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";

function App() {
  window.onload = () => {
    gsap
      .timeline()
      .from(".title", {
        translateX: -100,
        stagger: 0.1,
        opacity: 0,
        delay: 0.2,
        duration: 0.6,
        ease: "power1.inOut",
      })
      .from(".title2", {
        translateY: 100,
        stagger: 0.2,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .from("#blur", {
        translateY: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(".item1", {
        x: 200,
        y: 200,
        scale: 0,
        ease: "elastic",
        duration: 1.5,
      })
      .from(".item2", {
        x: -100,
        y: 50,
        scale: 0,
        ease: "elastic",
        duration: 1.5,
      });
  };

  document.onmousemove = (evt) => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    gsap.to(".item1", { x: mouseX / 25, y: mouseY / 25, ease: "elastic", duration: 2 });
    gsap.to(".item2", { x: mouseX / 100, y: mouseY / 100 , ease: "elastic", duration: 2});
  };

  if (window.innerWidth < 935) {
    document.body.style.overflow = "hidden";
    return (
      <div className="bg-[#121315] w-full h-screen overflow-hidden relative text-white flex justify-center items-center p-6">
        Mobile version is not available yet, sorry about that.
      </div>
    );
  }

  return (
    <div className="bg-[#121315] w-full h-screen overflow-hidden relative">
      <div
        className="pattern-boxes pattern-gray-600 pattern-bg-transparent 
        pattern-size-5 pattern-opacity-5 absolute w-full h-screen"
      />
      <Item className="item1 top-72 left-40 text-[4vmin]" icon={<BiLogoFlutter />} />
      <Item className="item2 right-64 bottom-64 text-[4vmin]" icon={<FaAws />} />
      <div className="max-w-[1100px] w-[95%] mx-auto">
        <h2 className="text-center mt-6 mb-12 text-white opacity-30">
          --= Kauan Curbani | Full-Stack =-- <br />
          type "help" to see commands
        </h2>
        <div className="text-white text-[15vmin] font-bold font-montserrat leading-[90%] ">
          <span className="flex gap-x-8 flex-wrap">
            <span className="title relative block tracking-tighter">look</span>{" "}
            <span className="title relative block tracking-tighter">at</span>{" "}
            <span className="title relative block tracking-tighter">my</span>{" "}
            <span className="title relative block tracking-tighter">
              terminal,
            </span>{" "}
          </span>
          <span className="bg-gradient-to-r to-[#FF1AA3] from-[#FFCD1A] text-transparent bg-clip-text title2 relative block">
            look at me.
          </span>
        </div>
        <Terminal />
      </div>
      <div className="absolute bottom-0 left-0 z-0 w-screen">
        <img
          src={Blur}
          className="pointer-events-none select-none w-full "
          id="blur"
        />
      </div>
    </div>
  );
}

export default App;
