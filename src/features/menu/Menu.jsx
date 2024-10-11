import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} />
      ))}
    </ul>
  );
}
//getting the Menu data from the API
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
