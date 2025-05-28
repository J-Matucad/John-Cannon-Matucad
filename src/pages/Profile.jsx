import React from "react";
import GridBackground from "../components/GridBackground";
import BentoDiv from "../components/BentoDiv";
import ButtonWithShadow from "../components/ButtonWithShadow";

const Profile = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center w-full bg-[#111111] overflow-hidden p-7">
      <GridBackground />
        <div className="relative z-10 flex flex-col items-center h-full text-white max-w-[1100px]">
          {/* Content Section */}
          <div className="inline-grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-3 lg:col-span-3">
              <div className="h-[17rem]">
                <BentoDiv>
                  <div className="w-full h-full grid grid-cols-1 md:grid-cols-7 gap-4 relative">
                    <div className="col-span-1 md:col-span-5 flex flex-col h-full z-10 relative">
                      <div className="flex-grow">
                        <p className="text-sm font-light text-[#777474]">welcome</p>
                        <p className="font-[100] text-[13px] md:text-[16px]">
                          Hi, I'm <span className="font-bold">John Cannon Matucad</span>, a software developer with strong focus on full-stack development, server-side logic, and database management.
                        </p>
                        <p className="font-[100] text-[13px] md:text-[16px] mt-2">
                          Feel free to reach out to me if you have any projects in mind, or just to say hello.
                        </p>
                      </div>
                      <div className="inline-grid w-full grid-cols-5 gap-2">
                        <div>
                          <ButtonWithShadow href="https://linkedin.com/in/john-cannon-matucad">
                            <i className="mx-2 fab fa-github text-[18px]"></i>
                          </ButtonWithShadow>
                        </div>
                        <div>
                          <ButtonWithShadow href="https://www.facebook.com/xenon28">
                            <i className="mx-2 fab fa-facebook-square text-[18px]"></i>
                          </ButtonWithShadow>
                        </div>
                        <div>
                          <ButtonWithShadow href="https://www.facebook.com/xenon28">
                            <i className="mx-2 fab fa-linkedin text-[18px]"></i>
                          </ButtonWithShadow>
                        </div>
                        <div className="col-span-2">
                          <ButtonWithShadow href="https://www.linkedin.com/in/john-cannon-matucad-a37b782b4">
                            <p className="text-[12px] md:text-[18px]">Download CV</p>
                          </ButtonWithShadow>
                        </div>
                      </div>
                    </div>

                    {/* Image Section */}
                    {/* Mobile/Small screens: Square image in bottom-right corner as background */}
                    <div className="md:hidden absolute bottom-0 right-0 w-60 h-60 rounded-lg opacity-60 z-0">
                      <img 
                        src="/avatar.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Medium screens and up: Image on the right side */}
                    <div className="hidden md:flex col-span-2 items-center justify-center h-full">
                      <div className="w-60 h-60 lg:w-40 lg:h-40 rounded-lg overflow-hidden">
                        <img 
                          src="/avatar.png" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </BentoDiv>
              </div>
            </div>
            
            <div className="row-span-1 md:row-span-3 lg:row-span-3">
              <div className="h-full">
                <BentoDiv>
                  <div className="flex flex-col h-full">
                    <h1 className="font-bold text-[20px]">About me</h1>
                      <p className="font-[100] text-[13px]">
                          Hi, I'm JC, a passionate full-stack software developer with experience in various programming languages and frameworks. I enjoy building web and desktop applications. When I'm not coding, you'll find me gaming, experimenting in the kitchen, staying active through sports, or exploring new places through travel – all of which fuel my creativity and problem-solving approach to development.
                      </p>
                  </div>
                  
                </BentoDiv>
              </div>
            </div>

            <div className="row-span-1 md:row-span-2 lg:row-span-3 md:col-span-2 lg:col-span-2">
              <div className="h-full">
                <BentoDiv>
                  <div className="flex flex-col h-full">
                    <h1 className="font-bold text-[20px]">Technologies</h1>
                    
                    <div className="mt-2 inline-grid w-full grid-cols-6 md:grid-cols-5 gap-3">
                      
                      <ButtonWithShadow href="https://dotnet.microsoft.com/en-us/languages/csharp" className="flex flex-col">
                        <i className="mx-2 fas fa-code text-[18px]"></i>
                        <p className="text-[8px]">C#.Net</p>
                      </ButtonWithShadow>

                      <ButtonWithShadow href="https://react.dev/" className="flex flex-col">
                        <i className="mx-2 fab fa-react text-[18px]"></i>
                        <p className="text-[8px]">React</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="https://www.facebook.com/xenon28" className="flex flex-col">
                        <i className="mx-2 fab fa-laravel text-[18px]"></i>
                        <p className="text-[8px]">Laravel</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="https://nodejs.org/en" className="flex flex-col">
                        <i className="mx-2 fab fa-node-js text-[18px]"></i>
                        <p className="text-[8px]">Node.js</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="https://codeigniter.com/user_guide/intro/index.html" className="flex flex-col">
                        <i className="mx-2 fas fa-fire text-[18px]"></i>
                        <p className="text-[8px]">Codeigniter</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="#" className="flex flex-col">
                        <i className="mx-2 fas fa-database text-[18px]"></i>
                        <p className="text-[8px]">Mysql</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="#" className="flex flex-col">
                        <i className="mx-2 fab fa-bootstrap text-[18px]"></i>
                        <p className="text-[8px]">Bootstrap</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="https://dotnet.microsoft.com/en-us/languages/csharp" className="flex flex-col">
                        <i className="mx-2 fas fa-code text-[18px]"></i>
                        <p className="text-[8px]">Tailwind</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="https://github.com/" className="flex flex-col">
                        <i className="mx-2 fab fa-git text-[18px]"></i>
                        <p className="text-[8px]">Git</p>
                      </ButtonWithShadow>
                      
                      <ButtonWithShadow href="https://github.com/" className="flex flex-col">
                        <i className="mx-2 fab fa-github text-[18px]"></i>
                        <p className="text-[8px]">Github</p>
                      </ButtonWithShadow>
                    </div>
                  </div>
                </BentoDiv>
              </div>
            </div>

            <div className="row-span-1">
              <div className="h-full">
                <BentoDiv py="2" px="4">
                    <h1 className="font-bold text-[20px] self-center">Projects</h1>
                    <i className="fas fa-long-arrow-alt-up self-center transform rotate-[45deg]"></i>
                </BentoDiv>
              </div>
            </div>

            <div className="row-span-1 col-span-1 md:col-span-1 lg:row-span-2 lg:col-span-1">
              <div className="h-full">
                <BentoDiv>
                  <div className="flex flex-col h-full">
                    <h1 className="font-bold text-[20px]">Contact Me</h1>
                    <p className="text-[13px] md:text-[12px]"><span className="font-bold">Email :</span> Jmatucadwork@gmail.com</p>
                    <p className="text-[13px] md:text-[12px]"><span className="font-bold">WhatsApp :</span> 09912281789</p>
                    <p className="text-[13px] md:text-[12px]"><span className="font-bold">Viber :</span> 09912281789</p>
                  </div>
                </BentoDiv>
              </div>
            </div>

            <div className="row-span-1">
              <div className="h-full">
                <BentoDiv py="2" px="4">
                  <p className="text-[13px] md:text-[12px]">© 2025 · JC Matucad</p>
                </BentoDiv>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Profile;
