import "./switch.css";

const Switch = ({
  checked = false,
  onChange = () => {},
}: {
  checked?: boolean;
  onChange?: () => void;
}) => {
  return (
    <div className="toggle--checkbox--container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--C">°C</span>
        <span className="toggle--F">°F</span>
      </label>
      <div className="background"></div>
    </div>
  );
};

export { Switch };
