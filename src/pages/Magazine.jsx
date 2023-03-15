import React, { useEffect, useState } from "react";

import { AppContext } from "../context/StateContext";
import Mosaic from "../components/Magazine/Mosaic";

function Magazine() {
  const { getPosts, posts } = AppContext();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-8xl font-medium text-center mb-14">Magazine</div>
      <Mosaic posts={posts} />
    </div>
  );
}

export default Magazine;
