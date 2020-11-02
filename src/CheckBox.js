import React, { useState } from "react";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return <input type="checkbox" onClick={handleClick} checked={checked} />;
};

export default CheckBox;
