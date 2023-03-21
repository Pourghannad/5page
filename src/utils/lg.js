const fs = require('fs');
const path = require('path');

    const level = {
      standard: {
        standard: true,
        defaultItem: {
          width: "75px",
          height: "75px",
          backgroundSize: "cover",
        },
        grid: [
          {
            css: {
              backgroundImage: "url('')",
            },
            active: true,
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            css: {
              backgroundImage: "url('')",
            },
          },
        ],
      },
      page1: {
        defaultItem: {
          width: "75px",
          height: "75px",
          backgroundSize: "cover",
        },
        grid: [
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
        ],
      },
      page2: {
        defaultItem: {
          width: "75px",
          height: "75px",
          backgroundSize: "cover",
        },
        grid: [
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
        ],
      },
      page3: {
        defaultItem: {
          width: "75px",
          height: "75px",
          backgroundSize: "cover",
        },
        grid: [
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
        ],
      },
      page4: {
        defaultItem: {
          width: "75px",
          height: "75px",
          backgroundSize: "cover",
        },
        grid: [
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
        ],
      },
      page5: {
        defaultItem: {
          width: "75px",
          height: "75px",
          backgroundSize: "cover",
        },
        grid: [
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
          {
            uuid: crypto.randomUUID(),
            css: {
              backgroundImage: "url('')",
            },
          },
        ],
      },
      ok: [
        "f1e41353-a0d6-40df-99ee-4050b897588a",
        "7985c674-410d-42e5-89aa-948f8c96cc93",
        "cf511ca6-2f00-4409-8b8e-f478a7efd5fb",
        "460801aa-9d8f-4d16-b36f-d5913f741a58",
        "d6771cc3-e326-4c14-992b-ceb3a5774037",
      ],
    };
fs.writeFile('13.json', JSON.stringify(level), () => {
    console.log('done');
});

// fs.writeFileSync(path.join(__dirname,"niktoResults","result.txt"), "This is an example text","UTF8")
// const levelGenerator = () => {
//     const Level = {
//       standard: {
//         standard: true,
//         defaultItem: {
//           width: "75px",
//           height: "75px",
//           backgroundSize: "cover",
//         },
//         grid: [
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//             active: true,
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//         ],
//       },
//       page1: {
//         defaultItem: {
//           width: "75px",
//           height: "75px",
//           backgroundSize: "cover",
//         },
//         grid: [
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//         ],
//       },
//       page2: {
//         defaultItem: {
//           width: "75px",
//           height: "75px",
//           backgroundSize: "cover",
//         },
//         grid: [
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//         ],
//       },
//       page3: {
//         defaultItem: {
//           width: "75px",
//           height: "75px",
//           backgroundSize: "cover",
//         },
//         grid: [
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//         ],
//       },
//       page4: {
//         defaultItem: {
//           width: "75px",
//           height: "75px",
//           backgroundSize: "cover",
//         },
//         grid: [
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//         ],
//       },
//       page5: {
//         defaultItem: {
//           width: "75px",
//           height: "75px",
//           backgroundSize: "cover",
//         },
//         grid: [
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//           {
//             uuid: crypto.randomUUID(),
//             css: {
//               backgroundImage: "url('')",
//             },
//           },
//         ],
//       },
//       ok: [
//         "f1e41353-a0d6-40df-99ee-4050b897588a",
//         "7985c674-410d-42e5-89aa-948f8c96cc93",
//         "cf511ca6-2f00-4409-8b8e-f478a7efd5fb",
//         "460801aa-9d8f-4d16-b36f-d5913f741a58",
//         "d6771cc3-e326-4c14-992b-ceb3a5774037",
//       ],
//     };
//     return JSON.stringify(Level);
//   };