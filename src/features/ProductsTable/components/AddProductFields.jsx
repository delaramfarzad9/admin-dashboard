const AddProductFields = ({ newProduct, onChange }) => {
  const fields = [
    { label: "Product Title", key: "title", type: "text" },
    { label: "Visibility Status", key: "isPublished", type: "select" },
    { label: "Inventory", key: "entity", type: "number" },
    { label: "price", key: "price", type: "number" },
    { label: "Description", key: "description", type: "textarea" },
  ];
const handleChange = (key, value) => {
    const product = {
      ...newProduct,
      [key]: key === "price" ? Number(value) : value,
    };

    onChange(product);
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.key}>
          <label className="text-xs select-none text-neutral-500">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea className="block mt-2 text-sm min-h-[140px] px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm border outline-none border-gray-100 w-full"
            value={newProduct[field.key]}
             onChange={(event) => handleChange(field.key, event.target.value)} />
          ) : field.type === "select" ? (
            <select
              className="block mt-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none border-gray-100 w-full"
              value={newProduct.isPublished} onChange={(e) => handleChange("isPublished", e.target.value === "true")}
            >
              <option className="text-sm"  value="true">Published</option>
              <option className="text-sm" value="false">Unpublished</option>
            </select>
          ) : (
            <input
              type={field.type}
              className="block mt-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none border-gray-100 w-full"
              value={newProduct[field.key]}
               onChange={(event) => handleChange(field.key, event.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AddProductFields;
