import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import AppContext from "./AppContext";

const DefaultWrapper = ({ children }) => {
  return <>{children}</>;
};

const AppStateWrapper = ({
  children,
  containers = {},
  wrappers = [<DefaultWrapper />]
}) => {
  const [isInitialised, setInitialised] = useState(false);

  let mapOfInstances = new Map();

  Object.keys(containers).forEach(k => {
    mapOfInstances.set(k, containers[k](mapOfInstances));
  });

  useEffect(() => {
    setInitialised(true);
  }, [mapOfInstances]);

  const WrapperComponents = wrappers.reduce((acc, curr) => {
    return React.cloneElement(curr, { children: acc });
  }, children);

  return (
    <AppContext.Provider value={mapOfInstances}>
      {isInitialised && WrapperComponents}
    </AppContext.Provider>
  );
};


AppStateWrapper.propTypes={
  children: PropTypes.element.isRequired,
  containers: PropTypes.object.isRequired,
  wrappers: PropTypes.arrayOf(
      PropTypes.element
  )
};

export default AppStateWrapper;
