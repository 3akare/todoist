export const fetchData = async (at, time) => {
  const res = await fetch(`https://www.jsonkeeper.com/b/DXI4`, {
    next: { revalidate: time },
  });
  const data = await res.json();
  return data;
};

export const cutText = (data, num) => {
  if (data.length > num) {
    return true;
  }
  return false;
};
