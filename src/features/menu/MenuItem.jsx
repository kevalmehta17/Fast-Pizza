import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  //destructing the object data
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "grayscale opacity-70 " : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-600 ">
              Sold out
            </p>
          )}
          <Button type="small">Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
