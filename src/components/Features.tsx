import React, { useState } from 'react';
import { ArrowLeft, Clock, User, MapPin, Search, ChevronDown } from 'lucide-react';

interface HistoryStoriesProps {
  onBack: () => void;
}

interface Story {
  id: string;
  title: string;
  period: string;
  dynasty: string;
  description: string;
  content: string;
  image: string;
}

interface Celebrity {
  id: string;
  name: string;
  period: string;
  title: string;
  description: string;
  image: string;
  stories: string[];
}

interface SpringStory {
  id: string;
  springName: string;
  title: string;
  description: string;
  image: string;
  legend: string;
}

const HistoryStories: React.FC<HistoryStoriesProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedDynasty, setSelectedDynasty] = useState('全部');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);
  const [selectedSpring, setSelectedSpring] = useState<SpringStory | null>(null);
  const [selectedGreatWallStory, setSelectedGreatWallStory] = useState<Story | null>(null);

  const dynasties = ['全部', '春秋战国', '秦汉', '魏晋南北朝', '隋唐', '宋元', '明清', '近现代'];

  const stories: Story[] = [
    {
      id: '1',
      title: '齐国建都临淄',
      period: '公元前859年',
      dynasty: '春秋战国',
      description: '齐太公姜子牙受封齐地，建都临淄，开启了齐国800年的辉煌历史',
      content: `公元前1046年，周武王伐纣成功，建立西周王朝。为了巩固统治，周武王实行分封制，将功臣和宗室分封到各地建立诸侯国。其中，姜子牙（姜太公）因辅佐周武王灭商有功，被封为齐侯，封地在今山东一带。

姜子牙到达齐地后，面临着复杂的政治和社会环境。当时的齐地民风彪悍，部族众多，且保留着许多商朝的文化传统。姜子牙采取了"因其俗，简其礼"的治理方针，即尊重当地的风俗习惯，简化繁琐的礼制，这一政策获得了当地民众的支持。

在都城选址上，姜子牙经过深思熟虑，最终选择了临淄作为齐国的都城。临淄地处齐地中心，地理位置优越，既有淄水环绕，又有丰富的盐铁资源，是理想的建都之地。从此，临淄成为齐国的政治、经济、文化中心，历经800多年的发展，成为春秋战国时期最繁华的都市之一。

齐国在姜子牙及其后代的治理下，逐渐发展壮大。特别是到了春秋时期，齐桓公任用管仲为相，实行改革，使齐国成为春秋五霸之首。齐国不仅在政治军事上强盛，在经济文化方面也达到了很高的水平，临淄更是成为当时世界上最大的城市之一，人口达到数十万。

齐国的建立和临淄的繁荣，为后来济南地区的发展奠定了重要基础。虽然临淄不在今天的济南市区内，但作为齐文化的发源地，它对整个山东地区包括济南的文化形成产生了深远影响。齐国的政治制度、经济模式、文化传统等，都成为后来济南地区发展的重要历史遗产。`,
      image: '/images/107dc429b50fa05c235432d21ac07ea.png'
    },
    {
      id: '2',
      title: '济南府的设立',
      period: '金代',
      dynasty: '宋元',
      description: '金代设立济南府，济南正式成为重要的政治文化中心',
      content: `济南府的设立是济南历史上的一个重要转折点，标志着济南正式成为一个重要的行政区域中心。这一历史事件发生在金代，具体时间是金天会七年（1129年）。

在金代之前，济南地区虽然历史悠久，但行政地位相对较低。北宋时期，这里设置的是济南郡，隶属于京东东路。1127年，金军南下，攻占了北宋都城开封，北宋灭亡。金朝建立后，对占领区进行了大规模的行政区划调整。

金朝统治者认识到济南地区的重要性：首先，济南地处山东腹地，地理位置十分重要，是连接华北平原和胶东半岛的交通要道；其次，这里水源丰富，有众多泉水，适宜农业发展和城市建设；再次，济南地区人口稠密，经济基础较好，具备设立府级行政区的条件。

金天会七年（1129年），金朝正式设立济南府，这是济南历史上第一次以"济南府"命名的行政区划。济南府的设立，不仅提升了济南的行政地位，也促进了当地经济文化的发展。府治设在历城县（今济南市区），管辖范围包括历城、章丘、长清、济阳等县。

济南府的设立带来了深远的影响。在政治上，济南成为山东地区的重要行政中心之一，府衙的设立吸引了大量官员和文人聚集；在经济上，作为府级城市，济南的商业贸易更加繁荣，手工业也得到发展；在文化上，府学的建立促进了教育事业的发展，培养了大批人才。

此后，无论是元代、明代还是清代，济南府的建制基本得以延续，济南也逐渐发展成为山东省的重要城市。可以说，金代济南府的设立，为济南后来成为山东省会奠定了重要的历史基础。`,
      image: '/images/107dc429b50fa05c235432d21ac07ea.png'
    }
  ];

  const celebrities: Celebrity[] = [
    {
      id: '1',
      name: '李清照',
      period: '1084-1155',
      title: '宋代女词人',
      description: `号易安居士，济南章丘人，宋代著名女词人，婉约词派代表人物。李清照出生于书香门第，父亲李格非是著名学者，母亲王氏也出身名门。她自幼聪慧过人，博览群书，工诗善文，尤精于词。

李清照的一生可分为前后两期：前期生活优裕，与丈夫赵明诚伉俪情深，共同致力于金石书画的搜集整理，词风清新婉丽；后期因金兵入侵，国破家亡，丈夫病逝，词风转为沉郁凄婉。代表作有《声声慢》《如梦令》《一剪梅》等，被誉为"千古第一才女"。

她不仅在文学创作上成就卓著，还在文学理论方面有重要贡献，提出了词"别是一家"的理论，对后世词学发展产生了深远影响。李清照的作品情真意切，语言清丽，充分体现了女性独特的情感体验和审美情趣。`,
      image: '/images/5ade9a4c426e1195338e59ec226d58f.png',
      stories: ['《声声慢》的创作背景', '与赵明诚的爱情故事', '南渡后的颠沛生活']
    },
    {
      id: '2',
      name: '辛弃疾',
      period: '1140-1207',
      title: '南宋豪放派词人',
      description: `字幼安，号稼轩，济南历城人，南宋豪放派词人，抗金英雄。辛弃疾生于金占区，自幼目睹金人统治下人民的痛苦，立志恢复中原。21岁时率众起义抗金，后归附南宋，历任多地知州、安抚使等职。

辛弃疾是豪放派词人的杰出代表，其词作气势磅礴，意境雄阔，充满爱国激情和英雄气概。他善于化用典故，语言生动活泼，既有"醉里挑灯看剑，梦回吹角连营"的豪迈，也有"众里寻他千百度，蓦然回首，那人却在，灯火阑珊处"的深情。

除了文学成就，辛弃疾还是一位杰出的军事家和政治家。他在任职期间，积极整顿军务，训练军队，为抗金复国做了大量准备工作。虽然壮志未酬，但其爱国精神和文学成就永远激励着后人。现存词作600多首，是两宋词人中存词最多者。`,
      image: '/images/5ade9a4c426e1195338e59ec226d58f.png',
      stories: ['青年时期的抗金经历', '《青玉案·元夕》的创作', '晚年的田园生活']
    },
    {
      id: '3',
      name: '孔子',
      period: '公元前551-479',
      title: '春秋时期思想家',
      description: `名丘，字仲尼，春秋时期鲁国人，儒家学派创始人，被尊为"至圣先师"。孔子虽然出生于鲁国，但与济南地区有着深厚的历史渊源，其思想对齐鲁文化的形成产生了根本性影响。

孔子一生致力于恢复周礼，主张"仁政"，提出了"仁、义、礼、智、信"等核心思想。他创办私学，有教无类，培养了三千弟子，其中贤者七十二人。孔子整理了《诗》《书》《礼》《易》《乐》《春秋》等典籍，为中华文化的传承做出了巨大贡献。

孔子的思想不仅影响了中国两千多年的历史，也传播到世界各地。在济南地区，孔子文化的影响尤为深远，历代都有众多学者研习儒学，济南也因此成为重要的文化教育中心。孔子的"有朋自远方来，不亦乐乎"等名言，至今仍是中华民族待客之道的体现。`,
      image: '/images/91bd5551087c7221a74800e6e7314f5.png',
      stories: ['周游列国的经历', '教育思想的形成', '与济南的历史渊源']
    }
  ];

  const springSories: SpringStory[] = [
    {
      id: '1',
      springName: '趵突泉',
      title: '天下第一泉的传说',
      description: '相传趵突泉是龙王的三个儿子化身而成',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '相传很久以前，济南大旱三年，民不聊生。东海龙王得知后，派遣三个儿子前来济南救民于水火。三位龙子到达济南后，化身为三股清泉，日夜不停地向上喷涌，为百姓提供甘甜的泉水。因为泉水喷涌时发出"趵突"的声音，故名趵突泉。泉水清澈甘甜，冬暖夏凉，被誉为"天下第一泉"。'
    },
    {
      id: '2',
      springName: '黑虎泉',
      title: '黑虎救泉的故事',
      description: '传说有黑虎卧于泉边，保护泉水不被污染',
      image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说古时候，有一只神虎守护着这眼泉水。每当有人想要污染泉水或者破坏泉池时，黑虎就会现身阻止。泉水从虎头形状的石雕中喷涌而出，声如虎啸，故名黑虎泉。当地人相信，只要黑虎还在守护，泉水就永远不会干涸，济南的泉水文化也会世代传承下去。'
    },
    {
      id: '3',
      springName: '大明湖',
      title: '大明湖的形成传说',
      description: '众泉汇聚而成的天然湖泊，有着"四面荷花三面柳"的美景',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '大明湖并非天然湖泊，而是由众多泉水汇聚而成。相传在很久以前，济南的泉水过于丰沛，经常泛滥成灾。为了治理水患，古人在城北挖掘了一个巨大的湖泊，让众泉之水汇聚于此。湖水清澈如镜，四周种植荷花和垂柳，形成了"四面荷花三面柳，一城山色半城湖"的绝美景色。湖中还有历下亭、汇泉堂等古迹，文人墨客常在此吟诗作赋。'
    },
    {
      id: '4',
      springName: '珍珠泉',
      title: '珍珠泉的神奇传说',
      description: '泉水中冒出的气泡如珍珠般晶莹剔透',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说古时有一位美丽的仙女，因为思念人间的恋人，每日以泪洗面。她的眼泪滴落人间，化作了这眼清泉。泉水中不断冒出的气泡，就是仙女思念的眼泪化成的珍珠。当地人说，如果你在泉边许愿，泉水中的"珍珠"会帮你实现愿望。因此珍珠泉也被称为"许愿泉"，吸引了无数有情人前来祈福。'
    },
    {
      id: '5',
      springName: '五龙潭',
      title: '五龙治水的传说',
      description: '五条神龙共同治理水患，造福济南百姓',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '相传古时济南水患频发，玉皇大帝派遣五条神龙前来治水。五龙各司其职：青龙主东方，掌管春水；白龙主西方，掌管秋水；红龙主南方，掌管夏水；黑龙主北方，掌管冬水；黄龙居中央，统领四方。五龙合力，终于制服了水患，并在此地留下了五个相连的泉池，就是今天的五龙潭。每个泉池都有不同的特色，象征着五龙的不同神力。'
    },
    {
      id: '6',
      springName: '百脉泉',
      title: '百脉泉的奇观传说',
      description: '泉底涌出无数水脉，如同大地的血管',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说大地之母为了滋养济南这片土地，在地下布下了无数条水脉，就像人体的血管一样。百脉泉就是这些水脉的汇聚点，泉底可以看到无数条细小的水流涌出，形成了"百脉寒泉珍珠滚"的奇观。古人认为，百脉泉是大地的心脏，只要它还在跳动，济南就会永远充满生机。'
    },
    {
      id: '7',
      springName: '漱玉泉',
      title: '李清照与漱玉泉',
      description: '女词人李清照常在此漱口洗玉，因此得名',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '相传宋代女词人李清照居住在济南时，经常到这眼泉水边洗漱。泉水清澈甘甜，李清照用它漱口后，觉得口齿留香，诗思泉涌。她常常在泉边吟诗作词，创作了许多传世佳作。后人为了纪念这位才女，将此泉命名为"漱玉泉"，寓意泉水如玉般纯净，能够洗涤心灵，启发诗意。'
    },
    {
      id: '8',
      springName: '金线泉',
      title: '金线泉的神奇现象',
      description: '泉水中出现金色线条，如同天然的艺术品',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      legend: '传说古时有一位织女下凡，在济南与一位书生相恋。为了表达爱意，织女将自己的金丝带投入泉中，化作了一条条金色的水线。这些金线在阳光照射下闪闪发光，美不胜收。后来织女被召回天庭，但她的金线永远留在了泉中，成为了爱情忠贞的象征。人们说，如果能在金线泉中看到完整的金线，就会获得美满的爱情。'
    }
  ];

  const greatWallStories = [
    {
      id: '1',
      title: '齐长城的修建',
      period: '春秋战国时期',
      dynasty: '春秋战国',
      description: '齐国为防御楚、鲁等国入侵而修建的军事防御工程',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: `齐长城是中国历史上最早的长城，始建于春秋时期的齐国，比著名的秦长城还要早400多年，堪称"长城之父"。这一宏伟的军事防御工程，见证了春秋战国时期的烽火岁月，也体现了古代劳动人民的智慧和坚韧。

## 修建背景

春秋时期，礼崩乐坏，诸侯争霸，战争频繁。齐国作为东方大国，面临着来自南方楚国和西南鲁国的军事威胁。特别是楚国，国力强盛，不断向北扩张，对齐国构成了严重威胁。为了保卫国土安全，齐国君主决定修建一道坚固的防线。

齐长城的修建始于齐桓公时期（公元前7世纪），当时管仲辅政，国力强盛。但大规模的修建工程主要在齐威王、齐宣王时期（公元前4世纪）完成。这一工程历时数百年，动用了大量的人力物力。

## 工程特色

齐长城西起黄河，东至黄海，全长约1000多公里，横贯整个山东半岛。长城主要利用山脊、河流等天然屏障，在关键地段修建城墙、关隘和烽火台。

长城的建筑材料因地制宜：在山区多用石块垒砌，在平原地带则用夯土筑成。城墙高度一般为3-5米，底宽2-4米，顶宽1-2米。每隔一定距离设置烽火台，用于传递军情。

重要关隘包括：
- 锦阳关：位于今济南长清区，是齐鲁两国的重要通道
- 穆陵关：位于今临沂地区，扼守南北要道  
- 琅琊关：位于今青岛地区，控制海上交通

## 历史作用

齐长城在春秋战国时期发挥了重要的军事防御作用。它不仅阻挡了楚国的北进，也成为齐国与鲁国、燕国等邻国的边界标志。长城沿线驻扎重兵，形成了完整的防御体系。

除了军事功能，齐长城还促进了沿线地区的经济发展。关隘成为重要的贸易通道，带动了商业繁荣。同时，长城的修建也推动了建筑技术的发展。

## 现代价值

今天，齐长城虽然大部分已经残破，但仍有不少段落保存较好，成为重要的文物古迹。2006年，齐长城被列入全国重点文物保护单位。在济南地区，锦阳关等遗址已成为重要的旅游景点和爱国主义教育基地。

齐长城不仅是中国古代军事工程的杰作，也是中华民族不屈不挠精神的象征。它告诉我们，早在2500多年前，我们的祖先就有了保卫家园的坚强意志和高超智慧。`
    },
    {
      id: '2',
      title: '孟姜女哭长城',
      period: '秦代传说',
      dynasty: '秦汉',
      description: '虽然传说发生在秦长城，但在齐长城也有相似的民间故事',
      image: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: \`孟姜女哭长城是中国古代四大民间传说之一，虽然最著名的版本发生在秦长城，但在齐长城沿线，也流传着许多类似的悲伤故事。这些传说反映了古代劳动人民在繁重工程中的苦难，也体现了人们对美好爱情和家庭的向往。

## 齐长城版本的传说

在济南长清区的锦阳关附近，流传着这样一个故事：

春秋时期，有一对新婚夫妇，丈夫名叫杞梁，妻子美丽贤惠。新婚不久，齐国征召民夫修建长城，杞梁被迫离家参与工程。临别时，夫妻二人依依不舍，约定长城修好就回家团聚。

杞梁在长城工地上日夜劳作，工程艰苦，条件恶劣。许多民夫因为过度劳累和恶劣环境而病倒，杞梁也不幸染病身亡，被草草埋在长城脚下。

杞梁的妻子在家中苦等丈夫归来，日复一日，年复一年。终于有一天，她得知丈夫已经死去的消息，悲痛欲绝。她不顾路途遥远，跋山涉水来到长城边寻找丈夫的遗骨。

当她来到长城脚下时，面对着绵延不绝的城墙，不知丈夫埋在何处。她抱着城墙痛哭，哭声凄厉，感天动地。她的眼泪滴在城墙上，城墙竟然开始坍塌，露出了丈夫的遗骨。

## 历史背景

这类传说虽然带有神话色彩，但反映了真实的历史背景。齐长城的修建确实需要大量劳力，据史料记载，仅齐威王时期就征调了数十万民夫参与工程。

长城修建工程异常艰苦：
- 工期紧迫，劳动强度大
- 工地条件恶劣，缺医少药
- 远离家乡，思乡情切
- 伤亡率高，许多人客死他乡

## 文化意义

孟姜女哭长城的传说在齐长城地区广为流传，具有深刻的文化意义：

**人文关怀**：传说体现了对普通劳动者的同情和关怀，反映了人民对和平生活的向往。

**爱情颂歌**：杞梁妻对丈夫的忠贞不渝，成为中国古代爱情忠贞的典型代表。

**历史记忆**：通过民间传说的形式，保存了古代重大工程建设的历史记忆。

**道德教化**：传说具有劝善惩恶的教化功能，提醒统治者要体恤民情。

## 现代传承

在济南地区，孟姜女的传说至今仍在民间流传。每年都有游客来到齐长城遗址，缅怀古代劳动人民的牺牲。这些传说已经成为齐长城文化的重要组成部分，提醒我们在欣赏古代建筑奇迹的同时，不要忘记为此付出生命代价的普通劳动者。

长清区还建有孟姜女庙，供人们祭拜这位传说中的贞烈女子，表达对美好爱情和家庭和睦的祈愿。`
    },
    {
      id: '3',
      title: '锦阳关的传说',
      period: '春秋战国时期',
      dynasty: '春秋战国',
      description: '齐长城重要关隘，见证了无数历史风云',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      content: `锦阳关是齐长城上最重要的关隘之一，位于今济南市长清区，地处齐鲁两国交界处，自古就是兵家必争之地。这座古关隘不仅见证了春秋战国的烽火岁月，也承载着丰富的历史文化内涵。

## 地理位置与战略意义

锦阳关位于泰山西北麓，扼守着从齐国都城临淄通往鲁国都城曲阜的重要通道。关隘建在山谷之间，两侧高山耸立，地势险要，真正是"一夫当关，万夫莫开"的天险之地。

从军事角度看，锦阳关具有重要的战略价值：
- **南北要冲**：控制着齐鲁两国之间的主要通道
- **易守难攻**：依山而建，地势险要，便于防守
- **补给便利**：附近有水源，便于驻军长期坚守
- **信息枢纽**：可以迅速向两国都城传递军情

## 历史上的重要战役

**齐鲁长勺之战前哨**（公元前684年）
春秋时期，齐桓公为报复鲁国，大举进攻。锦阳关作为齐军南下的必经之路，成为战争的前沿阵地。虽然这次齐军最终在长勺败于鲁军，但锦阳关的战略地位由此确立。

**战国时期的攻防战**
战国时期，齐国与鲁国多次在此发生冲突。齐威王时期，为了彻底控制这一要道，在锦阳关大规模修筑防御工事，使其成为齐长城防线上的重要节点。

**秦统一战争**（公元前221年）
秦军东进时，锦阳关曾是齐军的最后防线之一。虽然最终被秦军攻破，但齐军在此进行了顽强抵抗，为齐国的最后抗争写下了悲壮的一页。

## 和平时期的繁荣

在和平年代，锦阳关不再是战争的前线，而成为了重要的贸易通道：

**商贸中心**：齐鲁两国的商人在此交易，关市繁荣，商品琳琅满目。齐国的盐、铁、丝绸，鲁国的粮食、布匹在此交换。

**文化交流**：两国的文人学者经常通过锦阳关互访，促进了\齐鲁文化的交流融合。孔子周游列国时，很可能就经过了这里。

**驿站功能**：关隘设有驿站，为过往行人提供食宿，成为古代交通网络的重要节点。

## 民间传说

**锦阳关名称的由来**
传说古时这里山花烂漫，每当朝阳初升，阳光照射在满山的鲜花上，如锦似缎，绚烂夺目，故名"锦阳关"。

**\将军石的传说**
关隘附近有一块巨石，形似将军，当地人称为"将军石"。传说这是一位守关将军的化身，他为保卫关隘而战死，精神不散，化作巨石继续守护着这里。

**望夫石的故事**
关隘山上有一块石头，形似女子远望，传说是一位将军夫人等待丈夫归来的化身。这个故事与孟姜女传说相呼应，体现了古代妇女对征战丈夫的思念之情。

## 现状与保护

今天的锦阳关虽然已经失去了军事功能，但作为重要的文物古迹，仍然吸引着众多游客和学者。

**遗址现状**：
- 关隘的主体建筑虽已不存，但城墙遗迹依然可见
- 附近的齐长城段落保存较好，可以清楚地看到古代的建筑工艺
- 周围的自然环境基本保持原貌，山清水秀

**保护措施**：
- 2006年被列入全国重点文物保护单位
- 设立了专门的保护区域，禁\止破坏性开发
- 建立了齐长城博物馆，展示相关历史文物
- 开展了考古发掘工作，不断有新的发现

**旅游开发**：
- 修建了登山步道\，方便游客参观
- 设置了详细的历史介绍牌
- 开展了文化旅游活动，如"重走齐长城"等

锦阳关作为齐长城的重要组成部分，不仅是一处军事遗迹，更是中华民族历史文化的重要载体。它见证了古代战争的残酷，也记录了和平的珍贵，提醒我们珍惜今天的美好生活。`
    }
  ];

  const filteredStories = selectedDynasty === '全部' 
    ? stories 
    : stories.filter(story => story.dynasty === selectedDynasty);

  if (selectedGreatWallStory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedGreatWallStory(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回长城往事
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{selectedGreatWallStory.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{selectedGreatWallStory.period}</span>
              <span>{selectedGreatWallStory.dynasty}</span>
            </div>
            <p className="text-lg leading-relaxed">{selectedGreatWallStory.content}</p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedStory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedStory(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回历史长廊
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{selectedStory.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{selectedStory.period}</span>
              <span>{selectedStory.dynasty}</span>
            </div>
            <p className="text-lg leading-relaxed">{selectedStory.content}</p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCelebrity) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedCelebrity(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回名士风流
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img src={selectedCelebrity.image} alt={selectedCelebrity.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedCelebrity.name}</h1>
                  <p className="text-lg">{selectedCelebrity.title}</p>
                  <p className="text-sm opacity-90">{selectedCelebrity.period}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed mb-6">{selectedCelebrity.description}</p>
              <h3 className="text-xl font-bold mb-4">相关故事</h3>
              <div className="space-y-2">
                {selectedCelebrity.stories.map((story, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    {story}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSpring) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedSpring(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回泉城记忆
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img src={selectedSpring.image} alt={selectedSpring.springName} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedSpring.springName}</h1>
                  <p className="text-lg">{selectedSpring.title}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed mb-6">{selectedSpring.description}</p>
              <h3 className="text-xl font-bold mb-4">传说故事</h3>
              <p className="text-gray-700 leading-relaxed">{selectedSpring.legend}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'history') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-white shadow-sm">
          <div className="absolute inset-0">
            <img 
              src="/images/5ade9a4c426e1195338e59ec226d58f.png" 
              alt="历史长廊背景" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="relative flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="relative text-3xl font-bold text-gray-900">历史长廊</h1>
            <p className="relative text-gray-600 mt-2">千年春秋，见证济南历史变迁</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <div className="relative">
              <select
                value={selectedDynasty}
                onChange={(e) => setSelectedDynasty(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {dynasties.map(dynasty => (
                  <option key={dynasty} value={dynasty}>{dynasty}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative h-48">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {story.dynasty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {story.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'celebrities') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-white shadow-sm">
          <div className="absolute inset-0">
            <img 
              src="/images/91bd5551087c7221a74800e6e7314f5.png" 
              alt="名士风流背景" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="relative flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="relative text-3xl font-bold text-gray-900">名士风流</h1>
            <p className="relative text-gray-600 mt-2">探访名士，感受文人风骨</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrities.map((celebrity) => (
              <div
                key={celebrity.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedCelebrity(celebrity)}
              >
                <div className="relative h-48">
                  <img src={celebrity.image} alt={celebrity.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{celebrity.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{celebrity.title}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{celebrity.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {celebrity.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'springs') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-white shadow-sm">
          <div className="absolute inset-0">
            <img 
              src="/images/107dc429b50fa05c235432d21ac07ea.png" 
              alt="泉城记忆背景" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="relative flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="relative text-3xl font-bold text-gray-900">泉城记忆</h1>
            <p className="relative text-gray-600 mt-2">泉韵往事，聆听泉水的故事</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {springSories.map((spring) => (
              <div
                key={spring.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedSpring(spring)}
              >
                <div className="relative h-48">
                  <img src={spring.image} alt={spring.springName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{spring.springName}</h3>
                      <p className="text-sm opacity-90">{spring.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{spring.description}</p>
                  <button className="mt-3 text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2 text-sm">
                    了解传说
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'greatwall') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-white shadow-sm">
          <div className="absolute inset-0">
            <img 
              src="/images/107dc429b50fa05c235432d21ac07ea.png" 
              alt="长城往事背景" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveSection(null)}
              className="relative flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回济南故事
            </button>
            <h1 className="relative text-3xl font-bold text-gray-900">长城往事</h1>
            <p className="relative text-gray-600 mt-2">齐边风云，追忆长城岁月</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {greatWallStories.map((story, index) => (
              <div 
                key={story.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative h-48">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {story.period}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{story.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {story.period}
                  </div>
                  <button className="mt-3 text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2 text-sm">
                    了解详情
                    <span className="transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-4xl font-bold text-gray-900">济南故事</h1>
          <p className="text-xl text-gray-600 mt-2">泉涌千年，故事在济南的街巷中流淌着</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 历史长廊 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('history')}
          >
            <div className="relative h-64">
              <img 
                src="/images/5ade9a4c426e1195338e59ec226d58f.png" 
                alt="历史长廊" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">历史长廊</h2>
                  <p className="text-lg opacity-90">穿越千年时光，探寻济南历史足迹</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                从春秋战国到近现代，济南见证了中华文明的兴衰更替。在这里，您可以按朝代检索，深入了解每个历史时期的重要事件和文化变迁。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                千年春秋
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 名士风流 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('celebrities')}
          >
            <div className="relative h-64">
              <img 
                src="/images/91bd5551087c7221a74800e6e7314f5.png" 
                alt="名士风流" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">名士风流</h2>
                  <p className="text-lg opacity-90">文人墨客，风流千古</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                李清照的婉约词章，辛弃疾的豪放情怀，孔子的儒家思想...济南孕育了无数文化名人，他们的故事至今传颂不衰。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                探访名士
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 泉城记忆 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('springs')}
          >
            <div className="relative h-64">
              <img 
                src="/images/107dc429b50fa05c235432d21ac07ea.png" 
                alt="泉城记忆" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">泉城记忆</h2>
                  <p className="text-lg opacity-90">七十二泉的传说与故事</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                每一眼泉水都有自己的故事，从趵突泉的龙王传说到黑虎泉的神兽守护，这些美丽的传说构成了济南独特的泉水文化。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                泉韵往事
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 长城往事 */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setActiveSection('greatwall')}
          >
            <div className="relative h-64">
              <img 
                src="/images/5ade9a4c426e1195338e59ec226d58f.png" 
                alt="长城往事" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">长城往事</h2>
                  <p className="text-lg opacity-90">齐长城的历史变迁</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                作为中国最古老的长城，齐长城见证了春秋战国的烽火岁月。从修建到废弃，从军事要塞到文化遗产，每一段城墙都诉说着历史的沧桑。
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                齐边风云
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryStories;