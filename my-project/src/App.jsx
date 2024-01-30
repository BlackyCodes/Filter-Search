import { useState } from "react";
import { data } from "./data/data";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div>
        <h1 className="text-3xl text-center m-4 font-semibold">Search Filter</h1>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 w-full rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-800">
        <thead className="bg-gray-300">
          <tr>
            <th className="py-2 px-4 border">First Name</th>
            <th className="py-2 px-4 border">Last Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })

            .map((item) => (
              <tr className="bg-gray-100" key={item.id}>
                <td className="py-2 px-4 border">{item.first_name}</td>
                <td className="py-2 px-4 border">{item.last_name}</td>
                <td className="py-2 px-4 border">{item.email}</td>
                <td className="py-2 px-4 border">{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
