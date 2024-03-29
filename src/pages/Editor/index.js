import React from "react";
import style from "./style.module.scss";
import Grid from "../Play/component/Grid";

const emptyLevel = {
  standard: {
    standard: true,
    defaultItem: { backgroundSize: "cover" },
    grid: [
      { css: { backgroundImage: "url('')" }, active: true },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
      { css: { backgroundImage: "url('')" } },
    ],
  },
  page1: {
    defaultItem: { backgroundSize: "cover" },
    grid: [
      {
        uuid: "e15ea2cf-8d14-443f-acf0-2357fc06cbb0",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "df13cba4-07c2-4093-820f-c089047479ab",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "42bd7e27-7b0e-4092-af2e-34feb7191979",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "8ec67de0-e690-4b38-9b79-bce0aa104a6b",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "98edae3b-ec69-4fc3-b52a-42980480f93e",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "7d8abdb5-436b-487b-b482-89d7214d6dc6",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "4afbec60-ed93-4e72-b755-489053fd410c",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "1e1b2caf-fa5f-4c97-9285-cdd582b87e5a",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "30f8a5d0-df15-40b6-a02e-18766110a3d9",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "8779e146-8e41-49cb-8ca8-cc8b0df7926e",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "8d6a1471-bc5c-4dc1-8c51-895344730b85",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "9ed343c8-eb35-477d-a013-cb898ece039f",
        css: { backgroundImage: "url('')" },
      },
    ],
  },
  page2: {
    defaultItem: { backgroundSize: "cover" },
    grid: [
      {
        uuid: "0cb6ea3c-3b97-496f-abce-e4958f18e4b7",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "33540814-719e-4356-b1d3-2e8695f6ffea",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "e04f05e2-8db5-472f-aaed-63c3a40142f9",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "dca34bd1-9ae4-47a2-8afc-c7263fa38bbc",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "9bb66737-515b-46a7-adbb-fc8398940d5b",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "b829d697-0a7b-4add-b9de-fe92bc5bbc98",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "e59c2eb9-6dd1-4926-a967-5f146cdd9e23",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "11586f1c-2ffb-4cd9-83e2-188a2156278d",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "83b55d0a-3788-418b-a7bc-6523489cc0f3",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "239ef717-1abf-4540-a859-c886696d6a6c",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "a5120f76-567c-4403-a4f1-da1f6eda51b1",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "36b87efa-0160-4d07-b6ff-83e1cd37a476",
        css: { backgroundImage: "url('')" },
      },
    ],
  },
  page3: {
    defaultItem: { backgroundSize: "cover" },
    grid: [
      {
        uuid: "45f2c497-7e26-48c3-acf0-d9438faef6b3",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "c1246adf-f413-4c48-9913-45b792f02673",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "07784c5d-d455-4c19-9543-6f7ce668f3c8",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "0cc9ec96-82e5-4d46-83e0-b1e5461c146b",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "faf0a0d7-ccc3-4722-8b38-46eda4fcab58",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "1728a9bc-3418-4a03-a2e8-8e2bae3240b3",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "c57cad6f-d0bd-4ff5-bb2c-9b1b03eed951",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "95750f66-73e5-430a-9c1c-3ea2c26b0c4c",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "f3a69712-1f78-423f-93d9-ac4280b59afd",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "d3e1ae99-de7f-4653-ac0c-667b811b94be",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "5ce6bab3-54c9-4e27-8f00-3c5314aa3070",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "5ae9d48e-28f9-4261-ba8e-27a7dee794d7",
        css: { backgroundImage: "url('')" },
      },
    ],
  },
  page4: {
    defaultItem: { backgroundSize: "cover" },
    grid: [
      {
        uuid: "e3161ab9-f182-4f34-b5d4-3ce5beb0731d",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "b6550a89-5136-4bc5-9749-91c35d0d2138",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "a2e32c6c-9386-4eeb-be9e-8792a7aacfba",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "f5ca846b-7c1a-46a9-8dac-fd3102cf6165",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "f3af7ddb-9a28-447d-8291-755d3141f4f0",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "823bd8c6-ec12-4d10-9010-044c812ac9e0",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "e373fd5c-6c27-4d52-8fa6-a483289a268c",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "a27f5902-24e9-45be-887e-bec0e42873be",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "f84f4ff0-ced2-4dc6-a8e9-39cb8a5964c0",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "3a269cbf-6341-4d41-8ec1-9222777a485a",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "fe1e5203-e3eb-48e8-bb0c-433d1abeb73c",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "ca27b180-3bdf-40ab-8f7d-18c28ed74da2",
        css: { backgroundImage: "url('')" },
      },
    ],
  },
  page5: {
    defaultItem: { backgroundSize: "cover" },
    grid: [
      {
        uuid: "cc2b57d7-1911-4092-bfe6-229ae9a9e056",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "72856bf7-c400-4c39-b9de-4bf93cda17d9",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "f8b35cc3-1844-4b94-9b24-85ecc3d552e9",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "1421708f-cff1-4b88-a4c6-ecc571ec2c97",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "889268c9-dc90-488e-beab-78191061e9f7",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "c23d2c94-03c2-4f16-80af-b77cb3808bfe",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "b0f89042-2512-4a24-94e7-97057c40bc85",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "f1bfd57a-0ce6-427a-9b43-68890d518532",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "d2105088-26bd-4558-b1c4-0b95616e9c55",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "97990d79-487d-43c8-bab3-9e586a846684",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "41acb7d7-f0b0-4036-a7ed-4e0671d4f95f",
        css: { backgroundImage: "url('')" },
      },
      {
        uuid: "d10609ce-bc79-406b-9041-6f4faa3b058e",
        css: { backgroundImage: "url('')" },
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

const Editor = () => {
  return (
    <section className={style["level-editor-container"]}>
      <h4>Level Editor</h4>
      <div>
        <div className={style["page-container"]}>
          <span className={style["text"]}>Pattern detection</span>
          <Grid editor standard data={emptyLevel.standard} />
        </div>
      </div>
    </section>
  );
};

export default Editor;
