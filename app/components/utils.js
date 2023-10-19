export const fetchData = async (at, time) => {
  let URL = "";
  if (process.env.MODE === "development") {
    URL = `http://localhost:4000/tasks/${at}`;
  } else {
    URL = `https://www.jsonkeeper.com/b/D5VV`;
  }
  
  const res = await fetch(URL, {
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
