import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";

import './App.css';
import './Commons.css';

import Root from "./Root";
import Home from "./components/home/Home";
import ProjectsLibrary from "./components/projects/library/ProjectsLibrary";
import SidequestsLibrary from "./components/sidequests/SidequestsLibrary";
import AboutMePage from "./components/about/AboutMePage";
import ProjectPage from "./components/projects/ProjectPage";
import ContactMePage from "./components/contact/ContactMePage";

const projectsData = (await axios.get("/projects/projects.json")).data;

// Load sidequests database
const sidequestsPathDatabase = (await axios.get("/sidequests/sidequests_db.json")).data.pathDatabase;
const sidequestsData = []
for (let i = 0; i < sidequestsPathDatabase.length; i++) {
  sidequestsData.push((await axios.get(sidequestsPathDatabase[i])).data);
} 

const router  = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home projectsData={projectsData}/>
      },
      {
        path:"/projects-library",
        element:<ProjectsLibrary projectsData={projectsData}/>
      },
      {
        path:"/about-me",
        element:<AboutMePage />
      },
      {
        path:"/sidequests",
        element:<SidequestsLibrary sidequestsData={sidequestsData} />
      },
      {
        path:"/contact-me",
        element:<ContactMePage />
      },
      {
        path:"/project/:projectId",
        element:<ProjectPage projectsData={projectsData}/>
      }
    ],
  },
]);

function App() {
  return (
    <>  
      <RouterProvider router={router} />
    </>
  );
}

export default App;
