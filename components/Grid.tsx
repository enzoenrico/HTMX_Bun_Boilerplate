const Grid = ({ children }) => {
  return (
    <div
      className="grid"
      id="res"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
};
export default Grid;
