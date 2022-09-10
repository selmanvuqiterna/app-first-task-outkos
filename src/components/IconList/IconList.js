import Icons from "../Icons/Icons";
import {components} from "../../data";
 function IconList(){
    return(
        <div className="il-list">
        {components.map((item) => (
          <Icons key={item.id} logo={item.logo} title={item.title} description={item.description} />
        ))}
      </div>
    )
 }

export default IconList;