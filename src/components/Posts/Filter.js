import Dropdown from "../Dropdown";

const Filter = ({ label, items, onChange, value }) => {
  return (
    <div>
      <span>{label}: </span>
      <Dropdown items={items} onChange={onChange} value={value} />
    </div>
  );
};

export default Filter;
