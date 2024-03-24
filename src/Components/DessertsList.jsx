import React from "react";

const DessertsList = ({ data }) => {
  const list = data.map((datalist) => {
    const itemList = `${datalist.name} - ${datalist.Calories} made at ${datalist.CreatedAt}`;
    return <li>{itemList}</li>;
  });
  return <>{list}</>;
};

export default DessertsList;
