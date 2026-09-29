import Allinone from "@/app/all-services/allinone" 
import Dotslide from "@/app/all-services/dostslide"
import Core from "@/app/all-services/core-service"
import Oneagency from "@/app/all-services/one-agency"
import Something from "@/app/all-services/something"

export default function Allservices() {
  return (
    <div className="all-services">
      <Allinone />
      <Dotslide />
      <Core /> 
      <Oneagency />
      <Something />
    </div>
  );
}
