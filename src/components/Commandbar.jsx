import styled from "styled-components";

const InternalComponent = ({ className, items, farItems }) => {
  return (
    <div className={className}>
      <div style={{ display: "flex", flexGrow: 1 }}>
        {items.map((item) => {
          if (item.href) {
            return (
              <div>
                <a className="content" href={item.href} key={item.key}>
                  {item.text}
                </a>
              </div>
            );
          } else {
            return (
              <div>
                <div className="content" key={item.key} onClick={item.onClick}>
                  {item.text}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div style={{ display: "flex" }}>
        {farItems?.map((item) => {
          if (item.href) {
            return (
              <a className="content" href={item.href} key={item.key}>
                {item.text}
              </a>
            );
          } else {
            return (
              <div className="content" key={item.key} onClick={item.onClick}>
                {item.text}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export const Component = styled(InternalComponent)`
  height: 44px;
  display: flex;

  .content {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    padding: 0px 4px;
  }

  .content:hover {
    background-color: rgb(243, 242, 241);
    color: rgb(32, 31, 30);
  }
`;
