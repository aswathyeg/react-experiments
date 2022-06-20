import {useState} from 'react';
const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <div style={{ display: "flex" }}>
        <p>{item.activity}</p>
        <input
          style={{ margin: 20, alignSelf: "start" }}
          type={"button"}
          value={expanded ? "Collapse" : "Expand"}
          onClick={() => setExpanded(!expanded)}
        />
      </div>
      {expanded && (
        <div style={{ paddingLeft: 20 }}>
          <ul>
            {Object.keys(item)
              .filter((key) => key != "activity")
              .map((key) => (
                <li>{`${key}: ${item[key]}`}</li>
              ))}
          </ul>
        </div>
      )}
    </li>
  );
};
                
export default ExpandableListItem;