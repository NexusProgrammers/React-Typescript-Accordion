import { useEffect, useState, useRef } from "react";

interface FAQ {
  title: string;
  text: string;
}

interface AccordionProps {
  data: FAQ[];
}

function Accordion({ data }: AccordionProps) {
  const [isOpenAll, setIsOpenAll] = useState(false);

  function toggleAll() {
    setIsOpenAll((prevIsOpenAll) => !prevIsOpenAll);
  }

  return (
    <div className={`accordion ${isOpenAll ? "expanded" : ""}`}>
      <button className="toggle-all-button" onClick={toggleAll}>
        Toggle All
      </button>
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
          isOpenAll={isOpenAll}
        />
      ))}
    </div>
  );
}

interface AccordionItemProps {
  num: number;
  title: string;
  text: string;
  isOpenAll: boolean;
}

function AccordionItem({ num, title, text, isOpenAll }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);

  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  useEffect(() => {
    setIsOpen(isOpenAll);
  }, [isOpenAll]);

  


  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
      ref={itemRef}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

const faqs: FAQ[] = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
