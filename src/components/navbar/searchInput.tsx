import { useState } from "react";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";

const users = [
  { name: "Mirko Manrique Ronceros", description: "Prófugo de la justicia" },
  { name: "Javier Utrilla Camones", description: "Prófugo de la justicia" },
];

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="relative">
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Buscar a Mirko..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
        value={query}
        onChange={handleSearch}
      />
      {query && filteredUsers.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full shadow-lg max-h-60 overflow-y-auto">
          {filteredUsers.map((user, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer "
              onClick={() => alert(`Detalles de ${user.name}: ${user.description}`)}
            >
              <strong>{user.name}</strong>
              <p className="text-sm text-gray-600">{user.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
