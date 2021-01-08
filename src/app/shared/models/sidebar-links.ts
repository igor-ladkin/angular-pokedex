export interface SidebarLinks {
    sessao: string,
    itens: Array<Link>
}

interface Link {
    icon: string,
    name: string,
    routerLink: string,
}