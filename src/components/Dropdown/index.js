import { useState } from "react";
import IconArrowDown from "../Icons/IconArrowDown";
import { DropdownStyled, Button, Icon, Items, Item } from "./index.style";

const Dropdown = ({ onChange, items, value = items[0] }) => {
  const [selected, setSelected] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemChange = (item) => {
    setSelected(item);
    onChange(item);
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen((state) => !state);
  };

  const activeClass = isOpen ? "active" : "";

  return (
    <DropdownStyled>
      <Button className={activeClass} onClick={handleButtonClick}>
        <span>{selected.text}</span>
        <Icon className={activeClass}>
          <IconArrowDown color="#666666" />
        </Icon>
      </Button>

      {isOpen && (
        <Items>
          {items.map((item) => (
            <Item
              key={item.value}
              onClick={() => {
                handleItemChange(item);
              }}
            >
              {item.text}
            </Item>
          ))}
        </Items>
      )}
    </DropdownStyled>
  );
};

export default Dropdown;
