import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import './Commons.css';

import Root from "./Root";
import Home from "./components/home/Home";
import ProjectsLibrary from "./components/projects/library/ProjectsLibrary";
import AboutMePage from "./components/about/AboutMePage";
import AssociationPage from "./components/association/AssociationPage";
import axios from "axios";
import ProjectPage from "./components/projects/ProjectPage";
import ContactMePage from "./components/contact/ContactMePage";

const projectsData = (await axios.get("/projects/projects.json")).data; 

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
        path:"/association",
        element:<AssociationPage />
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
