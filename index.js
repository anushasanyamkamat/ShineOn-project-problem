let data = [
    {
      name: "Gadjet",
      created_at: "2017-05-01"
    },
    {
      name: "Tiddlywink",
      created_at: "2018-03-01"
    },
    {
      name: "Gizmo",
      created_at: "2018-05-27"
    }
  ];
  //First Method
  let new_Data = data.filter((obj) => new Date(obj.created_at).getMonth() === 4);
  console.log(new_Data);
  
  //Second Method
  let newData = data.filter((obj) => obj.created_at.split("-")[1] === "05");
  console.log(newData);
  