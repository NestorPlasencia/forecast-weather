import "./switch.css";

const Switch = () => {
  const handleChange = () => {};
  return (
    <div className="toggle--checkbox--container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onChange={handleChange}
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
