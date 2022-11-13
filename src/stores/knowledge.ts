import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useKnowledgeStore = defineStore("knowledge", () => {
  const listBoard = ref<any[]>([]);
  const listPosts = ref<any[]>([]);
  const dataSimpleMenu = ref<any>({
    index: null,
    tag: null,
    type: null,
    source: null,
    keyword: null,
    boardName: null
  });

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

  const createNewBoard = (board) => {
    createBoard(board);
  }

  const getDataBoard = async () => {
    listBoard.value = lstBoardDummy.value;
    listPosts.value = lstPostsDummy.value;
  };

  const filterDataBoard = computed(() => {
    return listBoard.value.map((board, index) => {
      return {
        ...board,
        key: `Board-${index}`,
        posts: filterPosts(board.settings)
      };
    });
  });

  const filterPosts = (condition: any) => {
    return listPosts.value.filter((item) => {
      const {type, tag, source, likeCount, keyword, favorite, dateTimeDesignation} = condition;
      if(!!condition.type) {
        return (item.type == type && item.favorite === favorite);
      } else {
        return item;
      }
    })
  }

  const updateSettingsBoard = async (index: number, newValue: any) => {
    return await saveSettingBoardToDB(index, newValue).then(() => {
      const board = listBoard.value.find((board, i) => i === index);
      board.settings = {
        ...newValue,
      };
    });
  };

  return {
    getDataBoard,
    filterDataBoard,
    updateSettingsBoard,
    dataSource,
    dataKeyWord,
    dataSimpleMenu,
    createNewBoard
  };
});

export async function saveSettingBoardToDB(index: number, newValue: any) {
  return (lstBoardDummy.value[index].settings = newValue);
}

export async function createBoard(board: any) {
  const newBoard = {
    boardName: board.boardName,
    settings: {
      type: board.type,
      source: board,
      tag: board.tag,
      keyword: board.keyword,
      dateTimeDesignation: board.dateTimeDesignation,
      likeCount: board.likeCount,
      favorite: board.favorite || false
    }
  };
  return lstBoardDummy.value.push(newBoard);
}

//dummy-db
export let lstBoardDummy = ref([
  {
    boardName: "All",
    boardDefault: true,
    settings: {
    },
  },
  {
    boardName: "沼尾さんのナレッジ",
    settings: {
      type: 1,
      source: "murakami",
      tag: "false",
      keyword: 'matsumoto',
      dateTimeDesignation: "",
      likeCount: 0,
      favorite: false,
    },
  },
]);

export let lstPostsDummy = ref([
  {
    userName: "numao",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "FY22 キックオフミーティング資料",
    description: "こちらに格納されています。",
    type: 1,
    favorite: true,
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
    favorite: true,
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
    favorite: false,
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
    favorite: true,
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
    favorite: true,
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
    favorite: true,
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
    type: 3,
    favorite: true,
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
    type: 1,
    favorite: false,
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
    userName: "yasuda",
    avatar: "image-dummy.png",
    note: "たった今",
    title: "マーケティングで使えるHack",
    type: 0,
    favorite: false,
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
]);
