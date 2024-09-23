import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo/logoOne.png";

function Navbarother() {
  return (
    <div>
      <Link href={"/"}>
        <div style={{ color: "black", fontSize: "0.875rem", fontWeight: 600 }}>
          <Image src={Logo} height={70} width={70} alt="Logo" />
        </div>
      </Link>
    </div>
  );
}

export default Navbarother;
