'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import styles from "./index.module.css";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { fetchNews } from "@/utils/newsApi";

export const Header = () => {
  return (
    <header className={styles["navbar-shadow"]}>
      <div className="w-full p-6 flex gap-4">
        <Link href="/">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-zinc-600">N</AvatarFallback>
          </Avatar>
        </Link>
        <NavigationMenu className="flex justify-center max-w-full">
          <div>
            <Link href="/definir" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Esportes
              </NavigationMenuLink>
            </Link>
          </div>
          <div>
            <Link href="/definir2" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Finanças
              </NavigationMenuLink>
            </Link>
          </div>
          <div>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={fetchNews}>
              Teste
            </NavigationMenuLink>
          </div>
        </NavigationMenu>
      </div>
    </header>
  );
};
