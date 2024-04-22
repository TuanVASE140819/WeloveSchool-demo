import { useLocation } from "react-router-dom";
import { getListSchool } from "../../api/apiServices";
import { useEffect, useState } from "react";
// ...

const NewPage = () => {
  const location = useLocation();
  const { province, district, ward } = location.state;

  const [data, setData] = useState([]);

  // Call the API getListSchool
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListSchool(province, district, ward, "", "");

      setData(data.data);
    };
    fetchData();
  }, [province, district, ward]);
  console.log("Data", data);
  return (
    <div>
      {/* data */}
      <h1>new page</h1>

      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewPage;
