import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const histrroy = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: histrroy.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("The container noticed navigation in Markting!!");
        const { pathname } = histrroy.location;
        if (pathname !== nextPathname) {
          histrroy.push(nextPathname);
        }
      }
    });
    histrroy.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
