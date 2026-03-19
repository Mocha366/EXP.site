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
        id: 1,
        date: "2025年12月15日",
        title: "学園祭ハッカソン 優勝",
        material: "—",
        description:
          "24時間のハッカソンイベントで、AIを活用した学習支援アプリを開発し、見事優勝を果たしました。チームワークと技術力が評価されました。",
      },
      {
        id: 2,
        date: "2025年10月20日",
        title: "プログラミング勉強会 開催",
        material: "—",
        description:
          "初心者向けのPython入門勉強会を開催。30名以上の参加者に基礎から丁寧に指導し、全員がプログラムを完成させることができました。",
      },
      {
        id: 3,
        date: "2025年8月5日 - 8月7日",
        title: "夏合宿 in 軽井沢",
        material: "—",
        description:
          "2泊3日の開発合宿を実施。チームに分かれてWebアプリケーション開発に取り組み、最終日には成果発表会を行いました。",
      },
      {
        id: 4,
        date: "2025年6月10日",
        title: "企業コラボ LT大会",
        material: "—",
        description:
          "地元IT企業との共同イベントを開催。メンバーが日頃の学習成果を5分間のLTで発表し、企業エンジニアからフィードバックをいただきました。",
      },
      {
        id: 5,
        date: "2025年4月1日",
        title: "新歓イベント 開催",
        material: "—",
        description:
          "新入生向けのサークル紹介イベントを開催。プログラミング体験ブースを設置し、50名以上の新入生にサークルの魅力を伝えました。",
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
