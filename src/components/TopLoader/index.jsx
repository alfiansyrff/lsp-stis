// import React, { useState } from 'react'
// import LoadingBar from 'react-top-loading-bar'

// const TopLoader = () => {
//   const [progress, setProgress] = useState(0)

//   return (
//     <div>
//       <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
//       <button
//         onClick={() => setProgress(progress + 10)}
//       >
//         Add 10%
//       </button>
//       <button
//         onClick={() => setProgress(progress + 20)}
//       >
//         Add 20%
//       </button>
//       <button
//         onClick={() => setProgress(100)}
//       >
//         Complete
//       </button>
//       <br/>
//     </div>
//   )
// }

// export default TopLoader

import React, { useState, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const TopLoader = ({ progress, setProgress }) => {
  return (
    <div>
      <LoadingBar color="#228be6" progress={progress} onLoaderFinished={() => setProgress(0)} />
    </div>
  );
}

export default TopLoader;
