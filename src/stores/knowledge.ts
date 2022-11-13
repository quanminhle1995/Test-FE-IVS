import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useKnowledgeStore = defineStore("knowledge", () => {
  const showSimpleMenu = ref(false);
  const listBord = ref<any[]>([]);
  const listPosts = ref<any[]>([]);

  //dummy-data
  const dataSource = ref([
    {
      name: "設定なし",
      value: "murakami",
    },
    {
      name: "設定なし2",
      value: "kaburaki",
    },
    {
      name: "設定なし3",
      value: "matsumoto",
    },
    {
      name: "設定なし4",
      value: "yasuda",
    },
    {
      name: "設定なし4",
      value: "itakura",
    },
  ]);

  //dummy-data
  const dataKeyWord = ref([
    {
      name: "設定なし",
      value: "murakami",
    },
    {
      name: "設定なし2",
      value: "kaburaki",
    },
    {
      name: "設定なし3",
      value: "matsumoto",
    },
    {
      name: "設定なし4",
      value: "yasuda",
    },
    {
      name: "設定なし4",
      value: "itakura",
    },
  ]);
  
  const openSimpleMenu = () => {
    showSimpleMenu.value = true;
  };
  const closeSimpleMenu = () => {
    showSimpleMenu.value = false;
  };

  const getDataBord = async () => {
    listBord.value = lstBordDummy;
    listPosts.value = lstPostsDummy;
  };

  const filterDataBord = computed(() => {
    return listBord.value.map((bord, index) => {
      return {
        ...bord,
        key: `bord-${index}`,
        posts: listPosts.value.filter((item) => {
          return item;
        }),
      };
    });
  });

  const updateSettingsBord = async (index: number, newValue: any) => {
    return await saveSettingBordToDB(index, newValue).then(() => {
      const bord = listBord.value.find((bord, i) => i === index);
      bord.settings = {
        ...newValue,
      };
    });
  };

  return {
    showSimpleMenu,
    openSimpleMenu,
    closeSimpleMenu,
    getDataBord,
    filterDataBord,
    updateSettingsBord,
    dataSource,
    dataKeyWord
  };
});

export async function saveSettingBordToDB(index: number, newValue: any) {
  return (lstBordDummy[index].settings = newValue);
}

//dummy-db
export let lstBordDummy = [
  {
    tag: "All",
    settings: {},
  },
  {
    tag: "沼尾さんのナレッジ",
    settings: {
      type: 1,
      source: "murakami",
      tag: false,
      keyword: false,
      dateTimeDesignation: "",
      likeCount: 0,
      favorite: false,
    },
  },
];

export let lstPostsDummy = [
  {
    userName: "numao",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "FY22 キックオフミーティング資料",
    description: "こちらに格納されています。",
    type: 1,
    thumbnail: {
      image: "image-dummy.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 12,
      comment: 3,
      share: 4,
    },
  },
  {
    userName: "numao",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "マーケティングで使えるHack",
    type: 2,
    description:
      "良記事を見つけたのでシェア。 https://toyokeizai.net/articles/-/409835",
    thumbnail: {
      image: "image-dummy-2.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 141,
      comment: 13,
      share: 43,
    },
  },
  {
    userName: "murakami",
    avatar: "image-dummy-3.png",
    note: "たった今",
    title: "マーケティングで使えるHack",
    type: 0,
    description:
      "良記事を見つけたのでシェア。 https://toyokeizai.net/articles/-/409835",
    thumbnail: {
      image: "image-dummy-3.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 11,
      comment: 13,
      share: 3,
    },
  },
  {
    userName: "numao",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "",
    description: "",
    type: 0,
    thumbnail: {
      image: "image-dummy-3.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 12,
      comment: 31,
      share: 5,
    },
  },
  {
    userName: "numao",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "",
    description: "",
    type: 0,
    thumbnail: {
      image: "image-dummy-3.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 12,
      comment: 31,
      share: 5,
    },
  },
  {
    userName: "numao",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "FY22 キックオフミーティング資料",
    description: "こちらに格納されています。",
    type: 1,
    thumbnail: {
      image: "image-dummy.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 12,
      comment: 3,
      share: 4,
    },
  },
  {
    userName: "itakura",
    avatar: "image-dummy-2.png",
    note: "たった今",
    title: "FY22 キックオフミーティング資料",
    description: "こちらに格納されています。",
    type: 2,
    thumbnail: {
      image: "image-dummy-2.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 12,
      comment: 3,
      share: 4,
    },
  },
  {
    userName: "numao",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "マーケティングで使えるHack",
    type: 0,
    description:
      "良記事を見つけたのでシェア。 https://toyokeizai.net/articles/-/409835",
    thumbnail: {
      image: "image-dummy-2.png",
      link: "https://app.box.com/s/xla8523hewputms10budz3emewcmor",
      title: "2022kickoffmeeting | BOX",
    },
    interact: {
      like: 141,
      comment: 13,
      share: 43,
    },
  },
];
