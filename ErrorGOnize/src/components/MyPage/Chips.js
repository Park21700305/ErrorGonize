// import React from "react";
// import { useState } from "react";
// import { styled } from "@mui/material/styles";

// import Stack from "@mui/material/Stack";
// import { Chip } from "@mui/material";
// import Box from "@mui/material/Box";

// export default function Chips({ mode, tags, edit }) {
//   const [status, setStatus] = useState(mode);
//   /*
//     const [chipData, setChipData] = React.useState([
//         { key: 0, label: 'Angular' },
//         { key: 1, label: 'jQuery' },
//         { key: 2, label: 'Polymer' },
//         { key: 3, label: 'React' },
//         { key: 4, label: 'Vue.js' },
//     ]);
//     */

//   //   const loadChipData = () => {
//   //       var cnt = 0;
//   //       var start = true;
//   //       const chipObject = data.map((chip) => {
//   //           if(!start)  cnt = cnt + 1;
//   //           start = false;
//   //           return { key: cnt, label: chip }
//   //       })
//   //       return chipObject;
//   //   }

//   const loadChipData = () => {
//     var cnt = 0;
//     var start = true;
//     // var chipList = tags.split(',')
//     var chipList = tags;
//     const chipObject = chipList.map((chip) => {
//       if (!start) cnt = cnt + 1;
//       start = false;
//       return { key: cnt, label: chip };
//     });
//     return chipObject;
//   };
//   // const loadChipData = () => {
//   //     console.log(tags)
//   //     return tags
//   // }

//   const [chipData, setChipData] = useState(loadChipData());

//   const handleDelete = (chipToDelete) => () => {
//     setChipData((chips) =>
//       chips.filter((chip) => chip.key !== chipToDelete.key)
//     );
//   };

//   return (
//     <div>
//       <h3>{mode}</h3>
//       {chipData.map((data) => {
//         if (edit)
//           return (
//             <Chip
//               key={data.key}
//               sx={{ margin: 0.4 }}
//               label={data.label}
//               onDelete={handleDelete(data)}
//             />
//           );
//         else
//           return (
//             <Chip key={data.key} sx={{ margin: 0.4 }} label={data.label} />
//           );
//       })}
//     </div>
//   );
// }

// /*
// <div>
//             <h3>{ mode }</h3>
//             {chipData.map((data) => {
//                 return (
//                     <Chip
//                         key={data.key}
//                         sx={{margin:0.4}}
//                         label={data.label}
//                         onDelete={handleDelete(data)}
//                     />
//                 );
//             })}
//             <Chip
//                 label="Add"
//                 color="success"
//                 variant='outlined'
//             />
//         </div>
// */

// /*
// if (!edit)
//         return(
//             <div>
//                 <h3>{ mode }</h3>
//                 {chipData.map((data) => {
//                     return (
//                         <Chip
//                             key={data.key}
//                             sx={{margin:0.4}}
//                             label={data.label}
//                             onDelete={handleDelete(data)}
//                         />
//                     );
//                 })}
//                 <Chip
//                     label="Add"
//                     color="success"
//                     variant='outlined'
//                 />
//             </div>
//         );
//     else
//     return(
//         <div>
//             <h3>{ mode }</h3>
//             {chipData.map((data) => {
//                 return (
//                     <Chip
//                         key={data.key}
//                         sx={{margin:0.4}}
//                         label={data.label}
//                     />
//                 );
//             })}
//             <Chip
//                 label="Add"
//                 color="success"
//                 variant='outlined'
//             />
//         </div>
//     );
// */
