import at from "../assets/at.png";
import vs from "../assets/VideoS.png";
import tc from "../assets/tclone.png";

export const ProjectList = () => {
  return (
    <div className="grid pt-12 grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
      <div className="border-2 h-96 flex flex-col border-gray-300 mb-5 bg-gray-300 rounded-3xl transform transition duration-500 hover:scale-105">
        <img className="h-1/2 border border-gray-200 mx-2 my-5" src={tc} alt="Twitter Clone" />
        <h1 className="ml-7 mb-2">Twitter Clone</h1>
        <p className="ml-7 mr-2">Features: like, follow-unfollow, view following post, media tweet, tweet edit delete ...</p>
      </div>

      <div className="border-2 h-96 flex flex-col border-gray-300 mb-5 bg-gray-300 rounded-3xl transform transition duration-500 hover:scale-105">
        <img className="h-1/2 border border-gray-200 mx-2 my-5" src={at} alt="AutoTube" />
        <h1 className="ml-7 mb-2">AutoTube</h1>
        <p className="ml-7 mr-2">A platform enabling YouTubers to exchange videos with editors, collaborate, and directly upload to channels, featuring intuitive dashboards and robust security.</p>
      </div>

      <div className="border-2 h-96 flex flex-col border-gray-300 mb-5 bg-gray-300 rounded-3xl transform transition duration-500 hover:scale-105">
        <img className="h-1/2 border border-gray-200 mx-2 my-5" src={vs} alt="PlaySync: Live Gaming & Video Calls" />
        <h1 className="ml-7 mb-2">PlaySync: Live Gaming & Video Calls</h1>
        <p className="ml-7 mr-2">A dynamic platform for video calling and live gameplay, fostering real-time interaction and gaming experiences with friends and communities worldwide.</p>
      </div>
    </div>
  );
};
