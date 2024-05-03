"use client"
import BtnComponent from "@/components/BtnComponent";
import { usePathname } from "next/navigation";

const DynamicRoutePage = () => {
  const routeNum = usePathname() || ""; 

  const routeName = () =>{
  alert(`dynamic params received from the URL- ${window.location.href}`)
  console.log(window.location.href)
  };

  return (
    <div>
      <h1>Dynamic Route Page</h1>
      <p>Route NO: {routeNum.split('/')}</p>
      <BtnComponent routeName={routeName} />
    </div>
  );
};

export default DynamicRoutePage;
