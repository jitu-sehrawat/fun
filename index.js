// const data = {
//   "pageId": [
//     {
//       "stateSchema": [
//         {
//           "state": "msil",
//           "subState": "dashboard",
//           "name": "Dashboard",
//           "type": "link",
//           "icon": "explore",
//           "children": [
//           ]
//         }
//       ],
//       "_id": "5c5aa01067971f3bd428c58e",
//       "name": "msilDashboard",
//       "link": "/msil/dashboard"
//     },
//     {
//       "stateSchema": [
//         {
//           "state": "msil",
//           "subState": "role",
//           "name": "Role Manage",
//           "type": "sub",
//           "icon": "face",
//           "children": [
//             {
//               "state": "roleManage",
//               "name": "Roles"
//             }
//           ]
//         }
//       ],
//       "_id": "5c5aa01067971f3bd428c58f",
//       "name": "roleManage",
//       "link": "/msil/role/roleManage"
//     },
//     {
//       "stateSchema": [
//         {
//           "state": "msil",
//           "subState": "role",
//           "name": "Role Manage",
//           "type": "sub",
//           "icon": "face",
//           "children": [
//             {
//               "state": "addRole",
//               "name": "Add Role"
//             }
//           ]
//         }
//       ],
//       "_id": "5c5aa01067971f3bd428c590",
//       "name": "addRole",
//       "link": "/msil/role/addRole"
//     },
//     {
//       "stateSchema": [
//         {
//           "state": "msil",
//           "subState": "fleet",
//           "name": "Fleet Manage",
//           "type": "sub",
//           "icon": "local_library",
//           "children": [
//             {
//               "state": "fleetOwners",
//               "name": "Fleet Owners"
//             }
//           ]
//         }
//       ],
//       "_id": "5c5aa01067971f3bd428c591",
//       "name": "fleetOwners",
//       "link": "/msil/fleet/fleetOwners"
//     },
//     {
//       "stateSchema": [
//         {
//           "state": "msil",
//           "subState": "fleet",
//           "name": "Fleet Manage",
//           "type": "sub",
//           "icon": "local_library",
//           "children": [
//             {
//               "state": "addFleetOwners",
//               "name": "Add Fleet Owners"
//             }
//           ]
//         }
//       ],
//       "_id": "5c5aa01067971f3bd428c592",
//       "name": "addFleetowner",
//       "link": "/msil/fleet/addFleetOwner"
//     }
//   ],
//   "_id": "5c5aa01067971f3bd428c584",
//   "name": "msil"
// };
// async function mergeRoleSchemas (role) {
// var finalArray = []
// var array = role.pageId
// //console.log(array)
// for(var m=0;m<array.length;m++){
//   //console.log("array[i]",array[m].stateSchema)
//   for(var n=0;n<array.length;n++){
//     // //console.log("array[nnnnnnnnnn]",array[n] , array[m])
//     // var arrayCheck = await objectsAreSame(array[n].stateSchema[0].children,array[m].stateSchema[0].children);
//     // console.log("arrayCheck",arrayCheck , JSON.stringify(array[n].stateSchema[0].children),'----------',JSON.stringify(array[m].stateSchema[0].children))
//    if(array[m].stateSchema[0].subState===array[n].stateSchema[0].subState){
//     var arr1 = array[m].stateSchema[0].children;
//     var arr2 = array[n].stateSchema[0].children
//      //role.pageId[i].stateSchema[0].children = Array.prototype.push.apply(role.pageId[i].stateSchema[0].children,role.pageId[j].stateSchema[0].children);
//     Array.prototype.push.apply(arr1,arr2);
//     console.log('arr1',arr1)
//     array[m].stateSchema[0].children = arr1
//    // finalArray.push(array[m]);
//    // //  role.pageId[i].stateSchema[0].children = role.pageId[i].stateSchema[0].children.concate(role.pageId[j].stateSchema[0].children);
//    //   console.log('role.pageId[i].stateSchema[0].children',role.pageId[i].stateSchema[0].children)
//    //  delete role.pageId[j].stateSchema;
//    }
//   }
// }
// return array








  
// //  console.log(`role :: ${JSON.stringify(role, null, 2)}`);
// // var finalArray = []
// //   for (var i = 0; i < role.pageId.length-1; i++) {
// //     for (var j = 0; j < role.pageId.length-1; j++) {
// //     //console.log("role.pageId[i]",role.pageId[i].stateSchema[0].subState);
// //     console.log(`${JSON.stringify(role.pageId[i].stateSchema[0].subState)} same ${JSON.stringify(role.pageId[j].stateSchema[0].subState)}`);
// //     if (role.pageId[i].stateSchema[0].subState === role.pageId[j].stateSchema[0].subState) {
// //      console.log(`${JSON.stringify(role.pageId[i].stateSchema[0].children)} same ${JSON.stringify(role.pageId[j].stateSchema[0].children)}`);
// //      var arr1 = role.pageId[i].stateSchema[0].children;
// //      var arr2 = role.pageId[j].stateSchema[0].children
// //       //role.pageId[i].stateSchema[0].children = Array.prototype.push.apply(role.pageId[i].stateSchema[0].children,role.pageId[j].stateSchema[0].children);
// //      Array.prototype.pusarrayh.apply(arr1,arr2);
// //      console.log('arr1',arrayarr1)
// //      role.pageId[i].statarrayeSchema[0].children = arr1
// //      finalArray.push(rolarraye.pageId[i]);
// //     // //  role.pageId[i].stateSchema[0].children = role.pageId[i].stateSchema[0].children.concate(role.pageId[j].stateSchema[0].children);
// //     //   console.log('role.pageId[i].stateSchema[0].children',role.pageId[i].stateSchema[0].children)
// //     //  delete role.pageId[j].stateSchema;
// //     }else{
// //       finalArray.push(role.pageId[i])
// //     }
// //   }
// //     }
// //   return role;
// };
// async function objectsAreSame(x, y) {
//   var objectsAreSame = true;
//   for(var propertyName in x) {
//      if(x[propertyName] !== y[propertyName]) {
//         objectsAreSame = false;
//         break;
//      }
//   }
//   return objectsAreSame;
// }
// mergeRoleSchemas(data).then((abc) => {;
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",JSON.stringify(abc));
// })


var merge = require("deepmerge");

const data = {
  pageId: [{
      stateSchema: {
          state: "msil",
          subState: "dashboard",
          name: "Dashboard",
          type: "link",
          icon: "explore"
        },
      _id: "5c5aa01067971f3bd428c58e",
      name: "msilDashboard",
      link: "/msil/dashboard"
    }, {
      stateSchema: {
          state: "msil",
          subState: "role",
          name: "Role Manage",
          type: "sub",
          icon: "face",
          children: [{
              state: "roleManage",
              name: "Roles"
            }]
        },
      _id: "5c5aa01067971f3bd428c58f",
      name: "roleManage",
      link: "/msil/role/roleManage"
    }, {
      stateSchema: {
          state: "msil",
          subState: "role",
          name: "Role Manage",
          type: "sub",
          icon: "face",
          children: [{
              state: "addRole",
              name: "Add Role"
            }]
        },
      _id: "5c5aa01067971f3bd428c590",
      name: "addRole",
      link: "/msil/role/addRole"
    }, {
      stateSchema: {
          state: "msil",
          subState: "fleet",
          name: "Fleet Manage",
          type: "sub",
          icon: "local_library",
          children: [{
              state: "fleetOwners",
              name: "Fleet Owners"
            }]
        },
      _id: "5c5aa01067971f3bd428c591",
      name: "fleetOwners",
      link: "/msil/fleet/fleetOwners"
    },
    {
      stateSchema: {
          state: "msil",
          subState: "fleet",
          name: "Fleet Manage",
          type: "sub",
          icon: "local_library",
          children: [{
              state: "addFleetOwners",
              name: "Add Fleet Owners"
            }]
        },
      _id: "5c5aa01067971f3bd428c592",
      name: "addFleetowner",
      link: "/msil/fleet/addFleetOwner"
    }],
  _id: "5c5aa01067971f3bd428c584",
  name: "msil"
};

const data2 = {"pages":[{"_id":"5c5bcc0e54f1184eb55fa0cf","name":"msilDashboard","link":"/msil/dashboard","stateSchema":{"state":"msil","subState":"dashboard","name":"Dashboard","type":"link","icon":"explore"}},{"_id":"5c5bcc0e54f1184eb55fa0d0","name":"msilRoleManage","link":"/msil/role/roleManage","stateSchema":{"state":"msil","subState":"role","name":"Role Manage","type":"sub","icon":"face","children":[{"state":"roleManage","name":"Roles"}]}},{"_id":"5c5bcc0e54f1184eb55fa0d1","name":"msilAddRole","link":"/msil/role/addRole","stateSchema":{"state":"msil","subState":"role","name":"Role Manage","type":"sub","icon":"face","children":[{"state":"addRole","name":"Add Role"}]}},{"_id":"5c5bcc0e54f1184eb55fa0d2","name":"fleetOwners","link":"/msil/fleet/fleetOwners","stateSchema":{"state":"msil","subState":"fleet","name":"Fleet Manage","type":"sub","icon":"local_library","children":[{"state":"fleetOwners","name":"Fleet Owners"}]}},{"_id":"5c5bcc0e54f1184eb55fa0d3","name":"addFleetowner","link":"/msil/fleet/addFleetOwner","stateSchema":{"state":"msil","subState":"fleet","name":"Fleet Manage","type":"sub","icon":"local_library","children":[{"state":"addFleetOwners","name":"Add Fleet Owners"}]}}],"_id":"5c5bcc0e54f1184eb55fa0c5","name":"msil"};

async function abc (data) {
  let finalArray = [];
  data.pages.map((val) => {
    if (finalArray.length === 0) {
      finalArray.push(val);
    } else if (finalArray.length && finalArray.map((a) => a.stateSchema.subState).indexOf(val.stateSchema.subState) < 0) {
      finalArray.push(val);
    } else {
      let x = finalArray.map((a) => a.stateSchema.subState).indexOf(val.stateSchema.subState);
      finalArray[x] = merge(val, finalArray[x]);
    }
  });

  return finalArray;
};

abc(data2).then((result) => {
  console.log(JSON.stringify(result, null, 2));
});
