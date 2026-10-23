
import { Link, useSearchParams } from "react-router-dom";
import { Collection, formatPrice } from "../data/collection.js";

function CollectionPage() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredCollection = category
    ? Collection.filter((item) => item.category === category)
    : Collection;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        منتجاتنا
      </h1>

      <p className="text-gray-500 mb-6">
        الاختيار الأفضل
      </p>

      {category && (
        <Link
          to="/collection"
          className="inline-block mb-5 text-red-500 underline"
        >
          عرض كل المنتجات
        </Link>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCollection.map((item) => (
          <li
            key={item.id}
            className="border rounded-xl p-4 shadow-sm"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-contain"
            />

            <h2 className="text-xl font-bold mt-3">
              {item.name}
            </h2>

            <p className="text-red-600 font-bold mt-2">
              {formatPrice(item.price)}
            </p>

            <Link
              to={`/collection/${item.id}`}
              className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Collection Details
            </Link>
          </li>
        ))}
      </ul>

      {filteredCollection.length === 0 && (
        <p className="text-gray-500 mt-6">
          مفيش منتجات في القسم ده.
        </p>
      )}
    </section>
  );
}

export default CollectionPage;
