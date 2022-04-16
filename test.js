function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "ok" });
    }, 1000);
  });
}

async function getItems() {
  let temp = [];
  for (let i = 0; i < 5; i++) {
    let response = getData();
    temp.push(response);
  }

  const d = await Promise.all(temp);
  console.log(d);
}

getItems();
