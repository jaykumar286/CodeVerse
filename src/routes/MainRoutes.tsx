import { Routes,Route } from "react-router-dom"
import ProblemDescription from "../pages/ProblemDescription/ProblemDescription";
import SampleProlbem1 from "../constants/SampleProlbem1";
import ProblemList from "../pages/ProblemList/ProblemList";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ProblemDescription  descriptionText={SampleProlbem1.problemStatement} />}/>
            <Route path="/problems/list" element={<ProblemList/>}/>
        </Routes>
    )
}