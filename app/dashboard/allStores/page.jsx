import StoresTable from "@/components/StoresTable";
import { getStores } from "@/lib/data";

async function AllStoresPage() {
  const data = await getStores();
  const allStores = JSON.parse(JSON.stringify(data));
  return (
    <main>
      <StoresTable allStores={allStores} />
    </main>
  );
}

export default AllStoresPage;
