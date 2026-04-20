export interface Achievement {
  id: number
  date: string
  title: string
  material: string
  description: string
  imageSrc?: string
}

export interface YearGroup {
  year: string
  achievements: Achievement[]
}

export const achievementsByYear: YearGroup[] = [
  {
    year: "2025",
    achievements: [
      {
        id: 2001,
        date: "2025年8月1日",
        title: "チャレンジスクール",
        material: "KOOV",
        description:
          "情報科学専門学校を会場にし、学生が1対1で一緒に進めるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250801.jpg",
      },
      {
        id: 2002,
        date: "2025年8月5日",
        title: "アドベンチャーカレッジKOOV Day1",
        material: "KOOV",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250805.jpg",
      },
      {
        id: 2003,
        date: "2025年8月6日",
        title: "アドベンチャーカレッジKOOV Day2",
        material: "KOOV",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250806.JPG",
      },
      {
        id: 2004,
        date: "2025年8月7日",
        title: "アドベンチャーカレッジMESH Day1",
        material: "MESH",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250807.jpg",
      },
      {
        id: 2005,
        date: "2025年8月8日",
        title: "アドベンチャーカレッジMESH Day2",
        material: "MESH",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250808.JPG",
      },
      {
        id: 2006,
        date: "2025年9月1日",
        title: "平沼小学校 月6スタディ",
        material: "Blockly Games",
        description:
          "平沼小学校でタブレットのみでビジュアルプログラミングが可能なBlockly Gamesを使用してプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/20250901.jpg",
      },
      {
        id: 2007,
        date: "2025年11月3日",
        title: "中山まつり",
        material: "embot",
        description:
          "ダンボールで出来たロボットを使用してプログラミング教室を実施しました！",
        imageSrc: "/images/achievements/2025/20251103.PNG",
      },
      {
        id: 2008,
        date: "2025年11月4日",
        title: "別所小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2009,
        date: "2025年11月5日",
        title: "別所小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2010,
        date: "2025年11月7日",
        title: "別所小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2011,
        date: "2025年11月10日",
        title: "平沼小学校 月6スタディ",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/20251110.jpg",
      },
      {
        id: 2012,
        date: "2025年11月21日",
        title: "別所小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2013,
        date: "2025年11月26日",
        title: "別所小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2014,
        date: "2025年11月27日",
        title: "別所小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2015,
        date: "2025年12月4日",
        title: "別所小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2016,
        date: "2025年12月6日",
        title: "平沼フェスティバル",
        material: "Blockly Games",
        description:
          "タブレットのみでビジュアルプログラミングが可能なBlockly Gamesを使用してプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/20251206.jpg",
      },
      {
        id: 2017,
        date: "2025年12月18日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2018,
        date: "2026年1月13日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2019,
        date: "2026年1月14日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2020,
        date: "2026年1月15日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2021,
        date: "2026年1月16日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2022,
        date: "2026年1月17日",
        title: "コメット はまみらいみんなフォーラム",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/20260117.jpg",
      },
      {
        id: 2023,
        date: "2026年1月19日",
        title: "平沼小学校 月6スタディ",
        material: "Tello",
        description:
          "平沼小学校で、タブレットを使用してドローンをプログラミングで飛ばす授業を行いました！",
        imageSrc: "/images/achievements/2025/20260119.JPG",
      },
      {
        id: 2024,
        date: "2026年1月26日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2025,
        date: "2026年1月31日",
        title: "YOXOフェスティバル",
        material: "embot",
        description:
          "ダンボールで出来たロボットを使用してプログラミング教室を実施しました！",
        imageSrc: "/images/achievements/2025/20260131.jpg",
      },
      {
        id: 2026,
        date: "2026年2月2日",
        title: "子安小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2027,
        date: "2026年2月3日",
        title: "子安小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2028,
        date: "2026年2月4日",
        title: "子安小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2029,
        date: "2026年2月5日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2030,
        date: "2026年2月6日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2031,
        date: "2026年2月10日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2032,
        date: "2026年2月13日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2033,
        date: "2026年2月17日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2034,
        date: "2026年2月20日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2035,
        date: "2026年2月24日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2036,
        date: "2026年2月25日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2037,
        date: "2026年2月26日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2038,
        date: "2026年3月23日",
        title: "川上小学校 5年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 2039,
        date: "2026年3月24日",
        title: "川上小学校 5年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
    ],
  },
  {
    year: "2024",
    achievements: [
      {
        id: 6,
        date: "2024年11月23日",
        title: "アプリコンテスト 準優勝",
        material: "—",
        description:
          "地域のアプリ開発コンテストに出場。地域活性化をテーマにしたアプリで準優勝を獲得しました。",
      },
      {
        id: 7,
        date: "2024年9月15日",
        title: "秋のもくもく会",
        material: "—",
        description:
          "各自の課題やプロジェクトに集中して取り組むもくもく会を開催。20名が参加し、互いに刺激を受けながら学習しました。",
      },
    ],
  },
  {
    year: "2023",
    achievements: [
      {
        id: 101,
        date: "2023年5月2日",
        title: "高田中学校パソコン部支援",
        material: "なし",
        description:
          "高田中学校パソコン部の皆さんと、Scratchや寿司打を使いながら、楽しくパソコンに触れる機会づくりを行いました！",
        imageSrc: "/images/achievements/2023/20230502.jpg",
      },
      {
        id: 102,
        date: "2023年6月17日",
        title: "東芝未来科学館 ifLink プログラミング教室",
        material: "embot",
        description:
          "ifLinkと共同で、IoTデバイスを使ったプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2023/20230617.png",
      },
      {
        id: 103,
        date: "2023年7月3日",
        title: "平沼小学校 月6スタディ",
        material: "Blockly Games",
        description:
          "タブレットで操作できる「Blockly Games」を使い、楽しくビジュアルプログラミングに挑戦しました！",
        imageSrc: "/images/achievements/2023/20230703.png",
      },
      {
        id: 104,
        date: "2023年7月24日",
        title: "高田中学校 プログラミング教室",
        material: "mBot2",
        description:
          "mBot2とパソコンを使い、ライントレースに挑戦するプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2023/20230724.jpg",
      },
      {
        id: 105,
        date: "2023年8月15日",
        title: "チャレンジスクール",
        material: "mBot2",
        description:
          "情報科学専門学校を会場に、学生が1対1でサポートしながら進めるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2023/20230815.png",
      },
      {
        id: 106,
        date: "2023年8月24日",
        title: "高田中学校 ドローンプログラミング教室",
        material: "ドローン",
        description:
          "高田中学校パソコン部にて、ドローンを使ったプログラミング教室を行いました！",
        imageSrc: "/images/achievements/2023/20230824.png",
      },
      {
        id: 107,
        date: "2023年8月26日",
        title: "親子プログラミング教室",
        material: "mBot2",
        description:
          "本校にて、ロボットを使った親子向けプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2023/20230826.png",
      },
      {
        id: 108,
        date: "2023年9月14日",
        title: "岩崎学園 キッズプログラミング",
        material: "embot",
        description:
          "放課後児童クラブにて、子どもたちと一緒に楽しくプログラミングに取り組みました！",
        imageSrc: "/images/achievements/2023/20230914.png",
      },
      {
        id: 109,
        date: "2023年9月15日",
        title: "別所小学校 プログラミング授業",
        material: "mBot",
        description:
          "別所小学校にて、ロボットを使ったプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2023/20230915.png",
      },
      {
        id: 110,
        date: "2023年10月2日",
        title: "平沼小学校 月6スタディ",
        material: "フォロ",
        description:
          "平沼小学校にて、ロボットを使ったプログラミング教室を行いました！",
        imageSrc: "/images/achievements/2023/20231002.png",
      },
      {
        id: 111,
        date: "2023年10月7日",
        title: "鶴屋町 ワークショップ",
        material: "embot",
        description:
          "鶴屋町のイベントにて、ダンボールロボット「embot」を使ったワークショップを開催しました！",
        imageSrc: "/images/achievements/2023/20231007.jpg",
      },
      {
        id: 112,
        date: "2023年11月6日",
        title: "平沼小学校 月6スタディ",
        material: "フォロ",
        description:
          "平沼小学校にて、ロボットを使ったプログラミング教室を行いました！",
        imageSrc: "/images/achievements/2023/20231106.png",
      },
    ],
  },
]
