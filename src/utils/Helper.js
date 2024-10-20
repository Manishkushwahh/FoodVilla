export function filterData(searchText, restraunts){
    const filterData = restraunts.filter((restraunt) =>
        restraunt?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}