import { useState } from "react";

const Folder = ({ explore }) => {
  const [expand, setExpand] = useState(false);

  if (explore.isFolder)
    return (
      <div
        style={{ marginTop: 5 }}
        className="folder"
        onClick={() => setExpand(!expand)}
      >
        <span>{explore.name}</span>
        <div>
          <button>Folder+</button>
          <button>File+</button>
        </div>

        <div style={{ display: expand ? "block" : "none" }}>
          {explore.items.map((exp) => {
            return <Folder explore={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  else {
    return <span className="file">{explore.name}</span>;
  }
};

export default Folder;
