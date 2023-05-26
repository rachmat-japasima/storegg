import Image from "next/image"
import Link from "next/link"
import Menu from "./menu"
import Auth from "./auth"
import ToggleMenu from "./ToggleMenu"

export default function Navbar() {
  return (
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src="/icon/logo.svg" alt="Logo" width={60} height={60} />
                </Link>
               <ToggleMenu />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                       <Menu title="Home" active href="/" />
                       <Menu title="Games" href="/games"/>
                       <Menu title="Rewards" href="/rewards"/>
                       <Menu title="Discover" href="/discover"/>
                       <Menu title="Global rank" href="/global-rank"/>
                        <Auth isLogin/>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}
