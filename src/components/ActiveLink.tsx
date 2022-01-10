import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
}

export function ActiveLink({children, ...rest}: ActiveLinkProps) {
    const { asPath } = useRouter();
    let isActive = false;

    if(asPath === rest.href || asPath === rest.as) { 
        isActive = true; 
    }

    return (
        <Link href="/">
            {cloneElement(children, { color: isActive ? "pink.500" : "gray.50" })}
        </Link>
    )
}