import { createStore} from "redux";
import studentsApp from "../reducers/studentReducer";

export const stores = createStore(studentsApp);

export default stores;




