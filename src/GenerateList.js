import axios from "axios";
import { useEffect, useState } from "react";
import ExpandableListItem from './ExpandableListItem';

const GenerateList = () => {
  const [activityList, setActivityList] = useState([]);
  const [disableButton, setDisableButton] = useState(false);

  const generateActivity = () => {
    //setDisableButton(true);
    const getActivity = async () => {
      const activity = await axios.get("https://www.boredapi.com/api/activity");
      setActivityList([...activityList, activity.data]);
     // setDisableButton(false);
    };
    getActivity();
  };

  useEffect(generateActivity, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <input
        type={"button"}
        value={"Generate Activity"}
        onClick={generateActivity}
       // disabled={disableButton}
      />
      <ul>
        {activityList.map((act) => {
          return <ExpandableListItem item={act} />;
        })}
      </ul>
    </div>
  );
};
  
export default GenerateList;  