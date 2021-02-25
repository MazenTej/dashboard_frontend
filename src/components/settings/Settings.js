import React, { useState, useEffect, useRef } from "react";
import { setView } from "../../Redux/actions/proprety";
import { useDispatch, useSelector } from "react-redux";

import {
  useAnalyticsApi,
  useAuthorize,
  useSignOut,
  useViewSelector,
} from "react-use-analytics-api";

const Settings = () => {
  const { ready, gapi, authorized, error } = useAnalyticsApi();
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view);
  console.log("viewww", view);

  const [viewId, setViewId] = useState();
  const viewSelectorContainerId = "view-selector-container";
  useViewSelector(
    authorized ? gapi : undefined,
    viewSelectorContainerId,
    (viewId) => setViewId(viewId)
  );

  const authDiv = useRef(null);
  const [authorizeCalled, setAuthorizeCalled] = useState(false);
  const hasAuthElements =
    authDiv.current && authDiv?.current?.children?.length > 0;

  const authorize = useAuthorize(gapi, {
    clientId:
      "256529246232-m2jn6rivk1vvsv8cuo692m0dqn4ukc6k.apps.googleusercontent.com",
    container: "authorize-container-id",
  });
  const signOut = useSignOut(gapi);
  useEffect(() => {
    if (ready && !error && !authorizeCalled) {
      authorize();
      setAuthorizeCalled(true);
    }
  }, [ready, error, authorizeCalled, authorize]);

  useEffect(() => {
    if (typeof viewId === "string") {
      dispatch(setView(viewId));
      console.log("viewId", viewId);
    }
  }, [viewId]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPay(viewId);
  //     dispatch({ type: "SET_VIEW", payload: pay });
  //   }, 8000);
  // }, [viewId]);

  return (
    <div style={{ position: "fixed", top: "50%", left: "50%" }}>
      {!ready && <div>Loading...</div>}
      {ready && (
        <div>
          {authorized && (
            <div>
              <div style={{ fontSize: "200%" }}>
                View ID:{" "}
                <span style={{ border: "solid 3px orange", padding: "5px" }}>
                  {viewId}
                </span>
              </div>
              <div id={viewSelectorContainerId} />
              <div>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            </div>
          )}
          {!authorized && (
            <div>
              <div ref={authDiv} id="authorize-container-id"></div>
              {!hasAuthElements && <div>🔄 Refresh the page to sign in.</div>}
            </div>
          )}
        </div>
      )}
      {error && <div>{error.toString()}</div>}
    </div>
  );
};

export default Settings;
