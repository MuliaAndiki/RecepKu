export interface NavbarConfig {
  title: string;
  href: string;
}

export interface FooterConfig {
  Footer1: {
    desc: string;
  };

  Footer2: {
    title: string;
    href: string;
  }[];
  Footer3: {
    title: string;
    href: string;
  }[];
  Footer4: {
    Icon: any;
    href: string;
  }[];
}
