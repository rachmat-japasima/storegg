import Image from "next/image"
import Link from "next/link"
import cx from "classnames";

interface MenuItemProps {
    title : string;
    href ?: string;
    icon : 'ic-menu-overview' | 'ic-menu-card' | 'ic-menu-logout' | 'ic-menu-messages' | 'ic-menu-rewards' | 'ic-menu-settings' |  'ic-menu-transactions';
    active ?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>){
  const { title, href="/", icon, active } = props
  const classItem = cx({
    item: true,
    'mb-30': true,
    active
  })

  return (
    <div className={classItem}>
        <Image className="icon me-3" src={`/icon/${icon}.svg`} width={25} height={25} alt="Icon Overview" />
        <p className="item-title m-0">
            <Link href={href} className="text-lg text-decoration-none">{title}</Link>
        </p>
    </div>
  )
}
