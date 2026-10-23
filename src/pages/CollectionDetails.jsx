
import { Link, useParams } from "react-router-dom";
import { Collection, formatPrice } from "../data/collection.js";

export default function CollectionDetails() {
  const { collectionId } = useParams();

  const collection = Collection.find(
    (item) => String(item.id) === collectionId
  );

  if (!collection) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">
          Product not found
        </h1>
        <Link to="/collection" className="text-red-500 underline">
          Back to Collection
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto p-6">
      <img
        src={collection.img}
        alt={collection.name}
        className="w-full max-w-md h-80 object-contain mx-auto rounded-lg"
      />

      <p className="text-gray-500 mt-4">{collection.id}</p>

      <h1 className="text-3xl font-bold mt-2">
        {collection.name}
      </h1>

      <p className="text-gray-600 mt-3">
        {collection.description}
      </p>

      <p className="text-xl font-bold text-red-500 mt-4">
        {formatPrice(collection.price)}
      </p>

      <p className="mt-2">Stock: {collection.stock}</p>
      <p>Color: {collection.color}</p>

      <Link
        to="/collection"
        className="inline-block mt-6 bg-black text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
      >
        All Collections
      </Link>
    </section>
  );
}
