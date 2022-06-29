import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, Navigate, useMatch, BrowserRouter as Router} from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
/* const {url, path} = useMatch(); */
  // use loggedIn to return a Redirect
  if (!loggedIn) {
    return <Navigate replace to="/sign-up" />
  };

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to="/profile/edit">Edit</Link>
      {/* Render a route for EditProfileForm */}
{/*       <Routes>
      <Route path="/profile/edit" element={<EditProfileForm />} />
      </Routes> */}
    </main>
  )
}
