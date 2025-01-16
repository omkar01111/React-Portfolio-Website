import { Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-fit flex justify-center flex-col relative">
        <div className="herosection w-full flex flex-row justify-center relative  h-[42rem]  pt-32" >
          <div className="container-hero-image  w-[70%]">
            <div className="glare-item-top outer-edge z-1 ">
              <div className="window-outline">
                <div className="glare-item-top hero-inner"></div>

                <div className="window-main">
                  <div className="window-bar flex justify-between">
                    {" "}
                    <div className="flex justify-between gap-2">
                      <div className="dot dot-red"></div>
                      <div className="dot dot-yellow"></div>
                      <div className="dot dot-green"></div>
                    </div>
                    <Plus stro className="plus" />
                  </div>
                  <div className="window-content flex flex-col justify-center items-center relative p-[10%]  w-[100%]">
                    <div className="hero-text-content">
                      <div className="text-hero">
                        I craft products, interactions &amp; stories.
                      
                      </div>

                      <div className="hero-about-grid">
                        <div className="hero-about-null"></div>
                        <div>
                          <div className="text-hero-about">
                            Designer at Discord. Based in Toronto.
                            <br />
                            <span className="text-hero-about-formerly text-sub_title">
                              Formerly at Google and RBC.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="window-grain"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="project1" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatibus nostrum aut repudiandae nihil ea sapiente, repellendus porro similique molestiae possimus unde distinctio ex minus deserunt hic reiciendis dolorum voluptate, accusamus dignissimos rerum reprehenderit, libero ducimus. Eaque quisquam dolore, nulla explicabo asperiores quam consequatur doloribus iusto harum laboriosam laudantium vero facilis repudiandae illum in nostrum, corrupti dolorem? Nihil officiis iusto alias autem soluta provident! Eligendi sapiente voluptas incidunt unde iste quidem magni nisi tempora atque dignissimos ducimus praesentium ad, nostrum iusto debitis officia quas impedit deserunt ullam pariatur quaerat, obcaecati placeat voluptate ea? Magnam autem obcaecati, vel earum nesciunt dignissimos!
        </div>
       
      </div>
      
      
    </div>
  );
};

export default Home;
