import { LSG, LSS }  from "./store";
import { v4 as uuidv4 } from 'uuid';
export const InitUser = () => {
    if (!LSG("user")) {
        const uuid = uuidv4();
        const webID = uuid.replace(/-./g , "-5").replace("0", "P");
        LSS("user", JSON.stringify({
            ID: webID
        }))
        
    }
}
