// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import firebase from "../services/firebase";

// let database = firebase.database();

// export default function ShowSelectedImage() {
//   const { eventname } = useParams();
//   const [image, setImage] = useState([]);
//   const [likeUsers, setlikeUsers] = useState([]);

//   const fetchData = async () => {
//     const snapshot = await firebase.database().ref("works").once("value");
//     const data = snapshot.val();

//     setImage(data[eventname]);
//     setlikeUsers(data[eventname].likeUsers);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function checkLikeStatus() {
//     console.log(image.votes);
//     if (image.votes === 0) {
//       await database.ref("/works").update({
//         [eventname]: {
//           ...image,
//           votes: image.votes + 1,
//           likeUsers: [await firebase.auth().currentUser.uid],
//         },
//       });
//     } else if (image.votes > 0) {
//       let count = likeUsers.filter(
//         (user) => user === firebase.auth().currentUser.uid
//       ).length;

//       console.log(
//         likeUsers.filter((user) => user === firebase.auth().currentUser.uid)
//           .length
//       );
//       if (count > 0) {
//         await database.ref("/works").update({
//           [eventname]: {
//             ...image,
//             votes: image.votes - 1,
//             likeUsers: likeUsers.filter(
//               (user) => user !== firebase.auth().currentUser.uid
//             ),
//           },
//         });
//       } else if (count === 0) {
//         await database.ref("/works").update({
//           [eventname]: {
//             ...image,
//             votes: image.votes + 1,
//             likeUsers: [...likeUsers, firebase.auth().currentUser.uid],
//           },
//         });
//       }
//     }
//     fetchData();
//   }

//   return (
//     <div>
//       {
//         <div>
//           <h1>{image.artist}</h1>
//           <img src={image.imgUrl} alt="" />
//           <button onClick={checkLikeStatus}>like</button>
//           <h1>{image.votes}</h1>
//         </div>
//       }
//     </div>
//   );
// }
