export const Component = ({ items, columns }) => {
  return (
    <div>
      {items.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};
