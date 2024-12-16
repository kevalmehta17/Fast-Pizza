import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="px-2  divide-y  divide-stone-300 ">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
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
