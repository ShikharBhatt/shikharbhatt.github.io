import React from 'react';

interface CategoryButtonProps {
  label: string;
  active: Record<string, boolean>;
  handleClick: (label: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ handleClick, active, label }) => (
  <button
    className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

export default CategoryButton;

