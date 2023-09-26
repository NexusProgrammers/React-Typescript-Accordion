/// <reference types="vite/client" />


interface AccordionItemProps {
  num: number;
  title: string;
  text: string;
}

interface FAQ {
  title: string;
  text: string;
}

interface AccordionProps {
  data: FAQ[];
}

interface AccordionItemProps {
  num: number;
  title: string;
  text: string;
  isOpenAll: boolean; 
}