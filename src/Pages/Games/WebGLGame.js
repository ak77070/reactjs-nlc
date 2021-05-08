import React from 'react'
import Unity, { UnityContent  } from "react-unity-webgl";

const unityContent  = new UnityContent (
  "WebGLBuild/Web Gl Test New.json",
  "WebGLBuild/UnityLoader.js",
  "WebGLBuild/Web Gl Test New.asm.code",
  "WebGLBuild/Web Gl Test New.asm.framework",
  "WebGLBuild/Web Gl Test New.asm.memory",
  "WebGLBuild/Web Gl Test New.data",
);

const WebGLGame = () => {
  return (
    <div>
      <div id="unityContainer">
        <Unity 
            unityContent ={ unityContent }       
            width="100%" 
            height="100%" 
        />
      </div>
    </div>
  )
}

export default WebGLGame
