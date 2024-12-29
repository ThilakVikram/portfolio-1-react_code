import { IoLocate, IoSchool } from "react-icons/io5";
import _ProfileImage from "./Assets/Profile.png"
import Details from "./Details"
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbDirectionSign } from "react-icons/tb";
export default function HomePage(){
    let {generalDetails,Projects,platforms,Work} = Details;
    let {degree,home_location,born_date,contactno,mail} = generalDetails;
    return <div className="w-full h-full bg-violet-600 p-2 flex flex-row">
        <div className="w-1/2 bg-violet-300 h-full rounded-3xl flex flex-col p-2">
            <div className="h-1/2 w-full rounded-3xl overflow-hidden bg-white flex flex-row p-1 shadow-xl">
                <img src={_ProfileImage} className="max-w-full max-h-full rounded-3xl mr-1"></img>
                <div className="flex-1 rounded-3xl overflow-hidden flex flex-col">
                    <span className="w-full flex px-2 text-3xl font-bold uppercase">{generalDetails.name}</span>
                    <div className="flex flex-1 bg-violet-900 font-bold overflow-scroll flex-col">
                        <IconField fieldName={degree}>
                            <IoSchool className="h-fit"/>
                        </IconField>
                        <AIconField fieldName={"LinkedIn Account"} href={platforms.linkedin}>
                            <FaLinkedinIn/>
                        </AIconField>
                        <AIconField fieldName={"Github Account"} href={platforms.github}>
                            <FaGithub/>
                        </AIconField>
                        <IconField fieldName={contactno}>
                            <FaPhoneAlt className="h-fit"/>
                        </IconField>
                        <IconField fieldName={mail}>
                            <MdEmail className="h-fit"/>
                        </IconField>
                        <IconField fieldName={home_location}>
                            <FaLocationDot className="h-fit"/>
                        </IconField>
                    </div>
                </div>
                <div className=""></div>
            </div>
            <div className="h-1/2 w-full p-3 flex flex-col">
                <span className="text-3xl font-bold">Topic</span>
                <hr/>
                <div className="flex-1"></div>
            </div>
        </div>
        <div className="flex-1 bg-gray-900 flex flex-col overflow-scroll ml-2 rounded-3xl">
            <div className="min-w-full min-h-full bg-blue-300"></div>
            <div className="min-w-full min-h-full bg-blue-600"></div>
        </div>
    </div>
}

function IconField({children,fieldName}){
    return <span className="w-full h-fit p-1 flex flex-row items-center justify-end px-3 text-lg mt-1">
        <span className="px-2">{fieldName}</span>
        {children}
    </span>
}
function AIconField({children,fieldName,href}){
    return <a href={href} className="w-full h-fit p-1 flex flex-row items-center justify-end px-3 text-lg mt-1">
        <span className="px-2 flex flex-row"><TbDirectionSign/>{fieldName}</span>
        {children}
    </a>
}